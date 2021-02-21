# [CortiCare - Hack & Heal](http://www.corticare.online/)

> An interactive online platform designed to educate individuals about their mental health and anxiety. This web app is designed to encourage people to book an appointment with a mental healthcare professional by providing insight to their own salivary cortisol measurements and monitor anxiety.


## Built with

<img src="/builtwith2.png"> 


## [You can test the app here](http://www.corticare.online/login)

New users can register and make an account by entering details (username, email, password) or use the pre-made test user (**test/test**).

A physician can login through the admin user (**admin/admin**) required*

**Note:** There are two roles (User/Admin). Only one member is admin which is admin/admin. Simply make an account or use **test/test** to login after going through the chatbot. You can select **No** on the first dialogue of the chatbot to move to the login page. Once logged in, please download a demo strip (see Demo Strips page on Main Menu) and upload on the Dashboard page to log your mood and upload the strip. You will see the charts below updating and logging your response. This data will be available to users as insight of their salivary cortisol measurements and will also be sent to doctors after booking an appointment to get screened for anxiety. 

## About CortiCare

CortiCare is an interactive online platform that allows users to engage in an experience that informs them about mental healthcare and encourages them to get screened for anxiety at a nearby mental healthcare practitioner. Initially, users can register for CortiCare and participate in an educational conversation with a chatbot that explains the importance of mental health, the biochemical role of anxiety and its signs and symptoms using text and videos. After this, users will be directed to purchase a one-week salivary cortisol kit containing a phone cover, cortisol LFIA test strips and capillary tubes to be shipped to their homes. The users can collect saliva samples at a daily scheduled time and place it onto the test strip. A red line will be observed to take a picture of the test strip using their phones and uploaded to CortiCare in order to calculate salivary cortisol measurements. At the end, the web app will report the trends of the user’s cortisol levels, and in return, their anxiety levels. 

## What CortiCare solves 

In Hungary, the most recent Eurobarometer survey on mental health showed that the mental health of Hungarians ranks extremely low compared to other countries. This could be due to the country’s larger emphasis on mental health strategies of services for patients diagnosed with mental disorders rather than primary prevention. Additionally, in a 2015 survey used to measure respondents struggling with pathological distress, mental health was observed to improve with increasing educational levels. 

Thus, we anticipate that CortiCare can encourage individuals to consider their mental health more proactively. By marketing CortiCare in an innovative way, this tool can engage people to take on an educational experience that will direct them to a nearby healthcare professional. Overall, this will serve to improve Hungary’s mental health ranking and treat the undiagnosed population suffering with anxiety. 

## What it does
![steps](https://res.cloudinary.com/devpost/image/fetch/s--NSrH9OvF--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://i.ibb.co/t3j89p3/Screen-Shot-2021-01-23-at-4-51-46-PM.png)

The patients will obtain a kit containing a phone cover, cortisol test strips and capillary tubes to collect the saliva. They’ll be asked to collect saliva samples at daily scheduled time(s) 30 minutes prior to eating and place it onto the test strip. Once the salivary sample is placed onto our test strip, it undergoes a process called lateral flow immunoassay (LFIA), a technique commonly used for pregnancy tests. It indicates the concentration of our target analyte, cortisol, which is proportional to the intensity of the observed red strip colour. The saliva moves from the sample pad to the conjugate pad, where cortisol will bind to the cortisol-specific antibodies with a detection label. The cortisol-bound antibodies will then migrate to the test line and bind to additional antibodies and where a red line will be observed.

![strip](https://res.cloudinary.com/devpost/image/fetch/s--QcMiugNa--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://i.ibb.co/JvfZSZr/Screen-Shot-2021-01-23-at-2-48-34-PM.png)

The cortisol test strip will then be placed into the phone cover for proper alignment. The patient will log into the web app and take a picture of the test strip. The RGB values of the red line of the test strip will be converted into signal data and present the cortisol measurements in ng/mL. The cortisol data will be presented in a graph for users to visually see the trends of cortisol levels, and in return anxiety levels, of the patient throughout time. As an additional feature, patients can also log their emotions/mood for that day which will be presented as a monthly radar chart.

# How we built it

Our web app was built using Python, Flask, Pillow and SQlite database. While the base template is an open source template obtained for a Flask admin dashboard, all of its features were built by us. This includes the admin panel and verification, patient panel, algorithm for assigning a cortisol score from an image of a test strip and storing the related information on the database to persist user information. For the algorithm to detect the cortisol score, we initially take an image as an input and break it into a numpy array. After this, we locate all black pixels (the rectangle which exists on the strips) and extract the region of interest. From the ROI, we obtain all colors present in the picture and are able to calculate a score by multiplying the R value from RGB with the amount of pixels. Using the score from images of test strips with known concentrations of cortisol (ng/mL), the values were plotted on a graph and the equation of the trendline was determined. This equation was then used to calculate the concentration of cortisol from images of test strips where the concentration was unknown.


![Data](https://res.cloudinary.com/devpost/image/fetch/s--wb1rMNyw--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://i.ibb.co/W672fT3/Screen-Shot-2021-01-23-at-5-26-22-PM.png)


# Built with boilerplate from
## [Flask Dashboard](https://appseed.us/admin-dashboards/flask?ref=gh) [Star Admin](https://appseed.us/admin-dashboards/django-dashboard-staradmin)

[Admin dashboard](https://appseed.us/admin-dashboards) generated by AppSeed in **Flask** Framework.

<br />

> Features

Our boilerplate contained:

- DBMS: SQLite, PostgreSQL (production)
- DB Tools: SQLAlchemy ORM, Alembic (schema migrations)
- Modular design with Blueprints, simple codebase
- Session-based authentication (via flask_login), forms validation
- Deployment scripts: Docker, Gunicorn/Nginx, Heroku

Features we implemented:
- Dedicated admin login with doctor dashboard 
- Admin verification for regular user page
- Admin only user route to view users - revamped and our idea implemented
- Uploading images of test strip and using our algorithm to determine cortisol scor
- Numpy and Pillow added to list of imports
- User routes, pages revamped and our idea implemented
- Database schema edited for more user related information
- Graphs and charts generated from our data on the chart.js templates
- Various HTML, CSS and JS embellishments throughout 
- Support via Github and Discord

We moved app to Git and Heroku. Deployed on heroku with our domain.com domain name, "corticare.online" (http://corticare.com or corticare.com). CNAME edited on domain.com to point to Heroku host.

<br />

## How to use it

```bash
$ # Get the code
$ git clone https://github.com/app-generator/flask-dashboard-staradmin.git
$ cd flask-dashboard-staradmin
$
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
$
$ # Install modules - SQLite Database
$ pip3 install -r requirements.txt
$
$ # OR with PostgreSQL connector
$ # pip install -r requirements-pgsql.txt
$
$ # Set the FLASK_APP environment variable
$ (Unix/Mac) export FLASK_APP=run.py
$ (Windows) set FLASK_APP=run.py
$ (Powershell) $env:FLASK_APP = ".\run.py"
$
$ # Set up the DEBUG environment
$ # (Unix/Mac) export FLASK_ENV=development
$ # (Windows) set FLASK_ENV=development
$ # (Powershell) $env:FLASK_ENV = "development"
$
$ # Start the application (development mode)
$ # --host=0.0.0.0 - expose the app on all network interfaces (default 127.0.0.1)
$ # --port=5000    - specify the app port (default 5000)  
$ flask run --host=0.0.0.0 --port=5000
$
$ # Access the dashboard in browser: http://127.0.0.1:5000/
```

## Deployment

The app is provided with a basic configuration to be executed in [Docker](https://www.docker.com/), [Heroku](https://www.heroku.com/), [Gunicorn](https://gunicorn.org/), and [Waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/).

<br />

### [Docker](https://www.docker.com/) execution
---

The application can be easily executed in a docker container. The steps:

> Get the code

```bash
$ git clone https://github.com/app-generator/flask-dashboard-staradmin.git
$ cd flask-dashboard-staradmin
```

> Start the app in Docker

```bash
$ sudo docker-compose pull && sudo docker-compose build && sudo docker-compose up -d
```

Visit `http://localhost:5005` in your browser. The app should be up & running.

<br />

### [Heroku](https://www.heroku.com/)
---

Steps to deploy on **Heroku**

- [Create a FREE account](https://signup.heroku.com/) on Heroku platform
- [Install the Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-python#set-up) that match your OS: Mac, Unix or Windows
- Open a terminal window and authenticate via `heroku login` command
- Clone the sources and push the project for LIVE deployment

```bash
$ # Clone the source code:
$ git clone https://github.com/app-generator/flask-dashboard-staradmin.git
$ cd flask-dashboard-staradmin
$
$ # Check Heroku CLI is installed
$ heroku -v
heroku/7.25.0 win32-x64 node-v12.13.0 # <-- All good
$
$ # Check Heroku CLI is installed
$ heroku login
$ # this commaond will open a browser window - click the login button (in browser)
$
$ # Create the Heroku project
$ heroku create
$
$ # Trigger the LIVE deploy
$ git push heroku master
$
$ # Open the LIVE app in browser
$ heroku open
```

<br />


## Credits & Links

- [Flask Framework](https://www.palletsprojects.com/p/flask/) - The offcial website
- [Boilerplate Code](https://appseed.us/boilerplate-code) - Index provided by **AppSeed**
- [Boilerplate Code](https://github.com/app-generator/boilerplate-code) - Index published on Github

<br />

---
[Flask Dashboard](https://appseed.us/admin-dashboards/flask?ref=gh) [Star Admin](https://appseed.us/admin-dashboards/django-dashboard-staradmin) - Provided by **AppSeed [App Generator](https://appseed.us/app-generator)**.
