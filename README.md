# [Corticare HexCambridge 2021](http://www.corticare.online/login)

> A means of quantifying the healthcare system through a web app designed for healthcare professionals and their patients to monitor anxiety levels by measuring salivary cortisol.

## Built with

<img src="/builtwith2.png"> 



## [You can test the app here](http://www.corticare.online/login)

New users (patients) can register and make an account by entering details (username, email, password) or use the pre-made test user (**test/test**).

A physician can login through the admin user (**admin/admin**) required*

## About CortiCare:

Within the last few decades, mental healthcare has gained a lot of attention – which isn't without reason. In Canada, 1 in 5 Canadians are reported to experience mental health issues and by the age 40, 50% of the population will have or have had a mental illness. However, the focus of this project is with anxiety disorders reported to affect 5% of the population and the 1 in 10 Canadians that have been reported to annually use health services related to mood and anxiety disorders. In 2012, 2.4 million Canadians aged 15 and above reported symptoms which were compatible with generalized anxiety disorder (GAD) during their lifetime. These symptoms include: persistent worrying or anxiety, overthinking plans and solutions to all possible worst-case outcomes, indecisiveness and fear of making the wrong decision, inability to set aside or let go of a worry, fatigue, difficulty sleeping, sweating, nausea, diarrhea or irritable bowel syndrome and irritability – just to name a few. Besides GAD, anxiety disorders constitute an even longer list of illnesses including: panic disorder, agoraphobia, social phobia, OCD and PTSD. As such, it's easy to understand how the various forms of anxiety can drastically impair one's quality of life.

In current practice, chemical tests are not performed to diagnose mental illnesses, including anxiety. Instead, doctors assess a patient's family history and perform psychological evaluations through the use of questionnaires. This typically involves asking patients about their thoughts, feelings, symptoms, lifestyle habits, and daily activities. Based on the answers that are provided, doctors can diagnose the patient in accordance with the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders - 5th Edition) and prescribe medication or adjust current dosages. The problem with the current diagnostic method is that clinicians make subjective interpretations based on the patient’s self-reported and qualitative information. Additionally, the care provided is strongly dependent on the patient's ability to advocate for their own needs, which is not something everyone is able to do easily.

When it comes to anxiety and stress, our central nervous system responds through the activation of the hypothalamic-pituitary-adrenal (HPA) system. This means that our hypothalamus in our brain releases corticotropin-releasing hormones (CRH), signalling our pituitary glands to release adrenocorticotropic hormone (ACTH), which finally signals the adrenal glands to release cortisol, the key player in our entire project. A patient with anxiety experiences chronic stress, resulting in the persistent activation of the HPA system and impairment of cortisol to regulate its own production. Subsequently, the elevation of cortisol levels will lead to dysregulation of other important biochemicals, through decreased estrogen and testosterone levels, and impaired signalling of the serotonin pathways.

In an attempt to address this issue, we present CortiCare. We propose a method to objectively measure anxiety levels, allowing for more accurate diagnoses and efficient treatment plans. Using this technology, patients can track their own salivary cortisol levels using a web app in the form of data accessible to their doctors online.


## What it does
![steps](https://res.cloudinary.com/devpost/image/fetch/s--NSrH9OvF--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://i.ibb.co/t3j89p3/Screen-Shot-2021-01-23-at-4-51-46-PM.png)

The patients will obtain a kit containing a phone cover, cortisol test strips and capillary tubes to collect the saliva. They’ll be asked to collect saliva samples at daily scheduled time(s) 30 minutes prior to eating and place it onto the test strip. Once the salivary sample is placed onto our test strip, it undergoes a process called lateral flow immunoassay (LFIA), a technique commonly used for pregnancy tests. It indicates the concentration of our target analyte, cortisol, which is proportional to the intensity of the observed red strip colour. The saliva moves from the sample pad to the conjugate pad, where cortisol will bind to the cortisol-specific antibodies with a detection label. The cortisol-bound antibodies will then migrate to the test line and bind to additional antibodies and where a red line will be observed.

![strip](https://res.cloudinary.com/devpost/image/fetch/s--QcMiugNa--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://i.ibb.co/JvfZSZr/Screen-Shot-2021-01-23-at-2-48-34-PM.png)

The cortisol test strip will then be placed into the phone cover for proper alignment. The patient will log into the web app and take a picture of the test strip. The RGB values of the red line of the test strip will be converted into signal data and present the cortisol measurements in ng/mL. The cortisol data will be presented in a graph for users to visually see the trends of cortisol levels, and in return anxiety levels, of the patient throughout time. As an additional feature, patients can also log their emotions/mood for that day which will be presented as a monthly radar chart.



# How we built it

Our web app was built using python flask, pillow and sqlite database. While the base template is an open source template obtained for a flask admin dashboard, all of its features were built by us. This includes the admin panel and verification, patient panel, algorithm for assigning a cortisol score from an image of a test strip and storing the related information on the database to persist user information. For the algorithm to detect the cortisol score, we initially take an image as an input and break it into a numpy array. After this, we locate all black pixels (the rectangle which exists on the strips) and extract the region of interest. From the ROI, we obtain all colors present in the picture and are able to calculate a score by multiplying the R value from RGB with the amount of pixels. Using the score from images of test strips with known concentrations of cortisol (ng/mL), the values were plotted on a graph and the equation of the trendline was determined. This equation was then used to calculate the concentration of cortisol from images of test strips where the concentration was unknown.


![Data](https://res.cloudinary.com/devpost/image/fetch/s--wb1rMNyw--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://i.ibb.co/W672fT3/Screen-Shot-2021-01-23-at-5-26-22-PM.png)


# Built with boilerplate from
## [Flask Dashboard](https://appseed.us/admin-dashboards/flask?ref=gh) [Star Admin](https://appseed.us/admin-dashboards/django-dashboard-staradmin)

[Admin dashboard](https://appseed.us/admin-dashboards) generated by AppSeed in **Flask** Framework.



<br />

> Features

Our web app was built using python flask, pillow and sqlite database. While the base template is an open source template obtained for a flask admin dashboard, all of its features were built by us. 

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
- Test strip uploading and using our algorithm to determine cortisol scor
- Numpy and pillow added to list of imports
- User routes, pages revamped and our idea implemented
- Database schema edited for more user related information
- Graphs and charts generated from our data on the chart.js templates
- Various HTML, CSS and JS embellishments throughout 
- Support via Github and Discord.

We moved app to git and heroku. Deployed on heroku with our domain.com domain name, "corticare.online" (http://corticare.com or corticare.com). CNAME edited on domain.com to point to heroku host.

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
