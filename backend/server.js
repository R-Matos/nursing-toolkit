const express = require('express');				
const cors = require('cors');
const mongoose = require('mongoose');			//Allows to connect mongoDB to server

//Have env variables in a file
require('dotenv').config();

//Express server
const app = express();
const port = process.env.port || 5000;

//Middleware
app.use(cors());						
app.use(express.json());						//Allows to parse json



//Location of database
const uri = process.env.ATLAS_URI;

//Connect to database
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {console.log("MongoDB - Connection established");})


//Get Files
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);



//Setup server
app.listen(port, () =>  {
	console.log('Server is running on port: ' + port);
});