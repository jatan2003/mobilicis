# mobilicis

This is the given assignme by Mobilicis India Private Limited for internship position.

As told in assignment I have created APIs to fetch data from Database for following and shown them on frontend: 
1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. Male Users which have phone price greater than 10,000.
3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. Show the data of top 10 cities which have the highest number of users and their average income.

Now I am trying to explain you my approach

I this whole assignment I have used MongoDB Atlas, ExpressJS, ReactJS, and NodeJS.

Now I am explaing Backend
#Backend

In Backend folder have config, models and routes folder
#config
In config folder there is db.js file which is use to connect server MongoDB Atlas using connectToDatabase method

#models
In models folder there is a file products.js which has schema model for our database

#routes

In routes folder there is a file Product.js. In this folder I have written all APIs to get above informations database. And also modified them according to our requirement.

1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
we can get our out for above query at: http://localhost:5000/api/deatails/user/five/bmw/mercedes

2. Male Users which have phone price greater than 10,000.
we can get our out for above query at: http://localhost:5000/api/deatails/user/male/phone/10000

3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
we can get our out for above query at: http://localhost:5000/api/deatails/user/lastname/m/email/last

4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
we can get our out for above query at: http://localhost:5000/api/deatails/user/bmw/mercedes/audi/email/hasdigit

5. Show the data of top 10 cities which have the highest number of users and their average income.
we can get our out for above query at: http://localhost:5000/api/deatails/user/top10/cities
 
 #To start backend
 cd backend
 nodemon start
 
 #Forntend
 
 In front the whole code written inside mobilicis/src/App.js. In this file I am fetch data from backend from created APIs and show it in frontend in form of table there is differnt button for different function.
 
 #To start fronted
 cd mobilicis
 npm run start
 your backend must running.
 
 Thanks
 

