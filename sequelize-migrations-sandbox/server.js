const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const morgan = require('morgan')
const { PORT, NODE_ENV } = require('./config/config')

//  .ENV SETUP
    // Enables use of .env varibles in the server
require("dotenv").config();


//  *** BODY DATA ***
    // Global body parser middleware - converts strings to json and vice versa
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.text());


//  FOR DEVELOPMENT USES
    //  Morgan middleware - Enables better development testing for api calls
if(NODE_ENV === 'development') app.use(morgan('dev'))


// API HEADERS
    // Middleware that sends and accepts specific API headers
app.use( (req, res, next, err) => { 
    res.header("Access-Control-Allow-Origin", "*") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept") 
    next()
})

//  ERRORS
    //  Global error handling middleware
app.use( (err, req, res, next) => {
        if (err.name === "UnauthorizedError") res.status(err.status)
        return res.send({ message: err.message })
    }
)

//  SERVING STATIC FILES
    //  App Middleware to serve static files from client folders
app.use(express.static(path.join(__dirname, "client", "build")))


// DATABASES
const db = require("./models");


// ROUTES
app.use('/user', require("./routes/User"))


//  SENDING BUILD FILE
    //  Server sends a compiled build file to users on web browsers
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// RUNNING SERVER
db.sequelize
    .authenticate()
    .then(() => {
        console.log(`[0] Connected to the database: ${db.sequelize.config.database}`);
    })
    .catch(err => {
        console.error('ERROR: Unable to connect to the database:', err);
    })
    .then(()=> {
        app.listen(PORT, () => {
            console.log(`[+] Express is listening on port: ${PORT}`)
        })
    })
    .catch(err => {
        console.error('ERROR: Express is unable to listen:', err);
    })