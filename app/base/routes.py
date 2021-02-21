# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from flask import jsonify, render_template, redirect, request, url_for, session, flash 
from flask_login import (
    current_user,
    login_required,
    login_user,
    logout_user
)

import psycopg2
from PIL import Image
import numpy as np
import os

from app import db, login_manager
from app.base import blueprint
from app.base.forms import LoginForm, CreateAccountForm
from app.base.models import User
from datetime import date
from app.base.util import verify_pass
from flask import current_app as app

import sqlite3, json
from flask import Response



@blueprint.route('/')
def route_default():
    #return redirect(url_for('base_blueprint.login'))
    return render_template('accounts/chatbotindex.html')

@blueprint.route('home', methods=['GET'])
def home():
    return render_template('accounts/chatbotindex.html')

@blueprint.route('allusers', methods=['GET'])
def allusers():
    if current_user.username == 'admin':
        conn = psycopg2.connect(dbname='dc0bl39dhi0kui', user='qcoqwoozzdojgp', host='ec2-3-231-48-230.compute-1.amazonaws.com', password='76b00a60ba4cba50aefa6c60070093f58a634440106e6219d0d301ef95f76f24')
        cursor = conn.cursor()
        cursor.execute("SELECT username from \"User\"")

        allusers = [username[0] for username in cursor]
        conn.close()

        #d = json.loads(stringtoDict(allusers))
        
        return Response(stringtoDict(allusers) , mimetype="text/plain")
    return render_template('page-404.html'), 404


@blueprint.route('data', methods=['GET', 'POST'])
def data():
    today = date.today()
    if(request.method == 'POST'):
        if (request.files):
            image = request.files["image"]
            print(image)
            if(image.filename != ''):
                image.save(os.path.join(app.config['UPLOAD_FOLDER'], image.filename))
                filenamew = 'app/clientuploads/' + image.filename
            else:
                filenamew= ''
            
        
        if (current_user.moodData == None):
            usermood = '''{
            "Happy": "10",
            "Irritated": "20",
            "Sad": "30",
            "Anxious": "40",
            "Calm": "50",
            "Depressed": "60",
            "Apathetic": "30",
            "Confused": "10"
            }'''
            current_user.moodData = usermood
            db.session.commit()
        else:
            changed = request.form.getlist('mycheckbox')
            usermood = json.loads(current_user.moodData)

            for item in changed:
                if item in list(usermood.keys()):
                    usermood[str(item)] = int(usermood[str(item)]) + 3.33
                     
            newusermood = json.dumps(usermood)       
            current_user.moodData = newusermood
            db.session.commit()

        if (current_user.cortiData == None):
            cortiData = '''{"Date": "['Jan 1', 'Jan 2', 'Jan 3']", "Cortilvl":"[14, 12, 2]"}'''
            current_user.cortiData = cortiData
            db.session.commit()
        else:
            usercortidata = json.loads(current_user.cortiData)
            listdate = eval(usercortidata['Date'])
            testval = eval(usercortidata['Cortilvl'])
            ## add value here
            if(filenamew != ''):
                #if(listdate[-1] == today.strftime("%b %d")):
                #    listdate.pop()
                #    listdate.append(str(today.strftime("%b %d"))) #add here
                #    testval.pop()
                #    testval.append(cortisolScoreNew(filenamew)) #add here
                #else:
                listdate.append(str(today.strftime("%b %d"))) #add here
                testval.append(round(cortisolScoreNew(filenamew), 2)) # add here
            
            newcortilvl = '''{"Date": ''' + "\"" + str(listdate) + "\", " + "\"Cortilvl\": " + "\"" + str(testval) + "\"" + "}"          
            current_user.cortiData = newcortilvl
            db.session.commit()
    print(current_user.cortiData)
    flash("Your submission was successful!")
    return redirect(url_for('base_blueprint.login'))
        

## Login & Registration

@blueprint.route('/login', methods=['GET', 'POST'])
def login():
    login_form = LoginForm(request.form)   

    if 'login' in request.form:
        
        # read form data
        username = request.form['username']
        password = request.form['password']

        # Locate user
        user = User.query.filter_by(username=username).first()
        
        # Check the password
        if user and verify_pass( password, user.password):
        
            if user.username != 'admin':
                login_user(user)
                #return redirect(url_for('base_blueprint.route_default'))
                if(current_user.moodData == None):
                    usermood = {}
                else:
                    usermood = json.loads(current_user.moodData)
                if(current_user.cortiData == None):
                    cortidata = {}
                else:
                    cortidata = json.loads(current_user.cortiData)
                return render_template('layouts/base.html', user=user, usermood=usermood, cortidata=cortidata)
            if user.username == 'admin':
                return render_template( 'accounts/login.html', msg='Admin please use <a href = "/admin"> this link.</a>', form=login_form)
        # Something (user or pass) is not ok
        return render_template( 'accounts/login.html', msg='Wrong user or password', form=login_form)

    if not current_user.is_authenticated:
        return render_template( 'accounts/login.html',
                                form=login_form)
    #return redirect(url_for('home_blueprint.index'))
    
    if current_user.username != 'admin':
        if(current_user.moodData == None):
            usermood = {}
        else:
            usermood = json.loads(current_user.moodData)
        if(current_user.cortiData == None):
            cortidata = {}
        else:
            cortidata = json.loads(current_user.cortiData)
        return render_template('layouts/base.html', user=current_user, usermood=usermood, cortidata=cortidata)
    return redirect(url_for('base_blueprint.doctoradmin'))

## Known error, on page back loads index.html


@blueprint.route('/register', methods=['GET', 'POST'])
def register():
    login_form = LoginForm(request.form)
    create_account_form = CreateAccountForm(request.form)
    if 'register' in request.form:

        username  = request.form['username']
        email     = request.form['email'   ]

        # Check usename exists
        user = User.query.filter_by(username=username).first()
        if user:
            return render_template( 'accounts/register.html', 
                                    msg='Username already registered',
                                    success=False,
                                    form=create_account_form)

        # Check email exists
        user = User.query.filter_by(email=email).first()
        if user:
            return render_template( 'accounts/register.html', 
                                    msg='Email already registered', 
                                    success=False,
                                    form=create_account_form)

        # else we can create the user
        user = User(**request.form)
        db.session.add(user)
        db.session.commit()

        return render_template( 'accounts/register.html', 
                                msg='User created please <a href="/login">login</a>', 
                                success=True,
                                form=create_account_form)

    else:
        return render_template( 'accounts/register.html', form=create_account_form)

@blueprint.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('base_blueprint.login'))


@blueprint.route('/shutdown')
def shutdown():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()
    return 'Server shutting down...'




#### Admin Login ########
@blueprint.route('/admin', methods=['GET', 'POST'])
def doctoradmin():

    login_form = LoginForm(request.form)
    
    if 'login' in request.form:

        # read form data
        #username = request.form['username']
        password = request.form['password']

        # Locate user
        user = User.query.filter_by(username='admin').first()
        
        # Check the password
        if user and verify_pass( password, user.password):

            login_user(user)

            return redirect(url_for('base_blueprint.doctoradmin'))

        # Something (user or pass) is not ok
        return render_template( 'accounts/doctorlogin.html', msg='Wrong user or password', form=login_form)

    if not current_user.is_authenticated:
        return render_template( 'accounts/doctorlogin.html',
                                form=login_form)

    conn = psycopg2.connect(dbname='dc0bl39dhi0kui', user='qcoqwoozzdojgp', host='ec2-3-231-48-230.compute-1.amazonaws.com', password='76b00a60ba4cba50aefa6c60070093f58a634440106e6219d0d301ef95f76f24')
    cursor = conn.cursor()
    cursor.execute("SELECT username from \"User\"")

    allusers = [username[0] for username in cursor]
    conn.close()

    d = json.loads(stringtoDict(allusers))     
    
    length = len(d['users'])
                                
    return render_template('layouts/adminbase.html', user=current_user, d = d, length = length)


### USER ROUTES FOR DOCTOR

@blueprint.route('/user/<username>', methods=['GET', 'POST'])
@login_required
def user(username):
    if current_user.username == 'admin':
        
        user = User.query.filter_by(username=username).first_or_404()

        if user:
            if(user.moodData == None):
                usermood = {}
            else:
                usermood = json.loads(user.moodData)
            if(user.cortiData == None):
                cortidata = {}
            else:
                cortidata = json.loads(user.cortiData)
            
            return render_template('layouts/base.html', user=user, usermood=usermood, cortidata=cortidata)
    return render_template('page-404.html'), 404   



## Errors

@login_manager.unauthorized_handler
def unauthorized_handler():
    return render_template('page-403.html'), 403

@blueprint.errorhandler(403)
def access_forbidden(error):
    return render_template('page-403.html'), 403

@blueprint.errorhandler(404)
def not_found_error(error):
    return render_template('page-404.html'), 404

@blueprint.errorhandler(500)
def internal_error(error):
    return render_template('page-500.html'), 500


## Helper functions ##

def stringtoDict(s):  
    
    # initialize an empty string 
    str1 = "{" + "\"""users\": ["""
    
    # traverse in the string   
    for ele in s:  
        #str1 += "<a href=/user/" + ele + ">" + ele + "</a>,"    
        str1 += "\"" + ele + "\","  
    str1 = str1[:-1] + "]}"
    
    # return string   
    return str1  


## Image Process ##

def cortisolScoreNew(img):

    # Open image and make into Numpy array
    im = Image.open(img).convert('RGB')
    na = np.array(im)

    # Find X,Y coordinates of all yellow black
    blackY, blackX = np.where(np.all(na==[0,0,0],axis=2))

    # Find first and last row containing black pixels
    top, bottom = blackY[0], blackY[-1]
    # Find first and last column containing black pixels
    left, right = blackX[0], blackX[-1]

    # Extract Region of Interest
    ROI=na[top:bottom, left:right]

    Image.fromarray(ROI).save('result.png')


    im = Image.open("result.png")

    listim = sorted(im.getcolors(maxcolors=15000), key=lambda x: x[0], reverse=True)
    
    score = 0
    total = 0

    for items in listim:
        for i in range(0, len(listim)):
            score = items[0] * items[1][0]
        total = total + score;    

    x = abs(((total)-(4559921))/(6123.8))
    
    return x

