Add type module to package.json ✅

Install nodemon, dotenv, pg, express ✅

Add scripts to package.json ✅

Create app on Heroku ✅

Create .env file
    -create variables containing my credentials ✅

CREATE DATABASE✅
In db/index.js import pg&dotenv ✅
    make a pool function ✅
    populate the parameters with environemt vairables and ssl unauthorised false✅
    export the pool✅

In db/scripts/createTable 
    -import the pool function
    -Construct a query to create a table
    -pool.query the previous query

In/ db/scripts/PopulateTable
    -import pool function
    -create a simple starting array containing 2 objects of data
    -create for loop to cycle through the data
    -contruct a sql query with placeholders
    -input the data in the parameters
    -send out the query, console.log the response

CREATE ROUTES
Create the route page
    -In the routes folder, create file called score.js
    -Import Express
    -Extract the router method into a variable
    -Export the router variable
    -in app.js import the router function from the score route page

CREATE MODELS
    -create a get all scores function
        -Inlcuded a sql query string
        "SELECT * from score"
        capture the response in a variable
         and return variable.rows
    -create a get hiscores function
        -Inlcuded a sql query string
        "SELECT * from score ORDER BY score DESC Limit 10"
        capture the response in a variable
         and return variable.rows
    -create a post score functioon
        -the function will take in req.body (called body) as an arguement input 
        -make a sql query with plcaeholders
        "INSERT INTO score (username, score) VALUES ($1, $2) RETURNING *;"
        -extract the data from the req.body and put them into a parameters array
        [body.username, body.score]
        -send the query and and capture the response in a variable
        return variable.rows

Added express.json parser 

Create a get handler
    -

Create a post handler
    -
