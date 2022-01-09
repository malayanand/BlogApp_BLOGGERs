
# Blogger's

A simple web application for creating blogs
## Some Key Features
    1. Users can login and register on the website.
    2. Login and Signup are authenticated by Json Web Tokens (JWT)
    3. Can click on cards to open the blogs currently published on their
       page.
    4. Editing, updating and creation of blog posts can be done on the admin
       portal accessible by each of the user.
    5. Also a search box is available which facilitates post lookup based on
       matching keywords in the blog.
The backend has been developed on "Django and Django Rest Framework", while meanwhile the frontend has been developed on "ReactJS and 
Material UI".

## Getting started:



### Installation

Install npm package manager

```bash
  pip install requirements.txt
  cd frontend/blog_website
  npm install
```
This should install all the required dependencies.

## Deployment

Run the backend server 
(make sure you are in the blog directory)
```bash
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```

Start up the frontend
```bash
cd frontend/blog_website
npm start
```
