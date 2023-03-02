//importing the mongoose ODM
const mongoose = require('mongoose');

//connecting to the database
mongoose.connect('mongodb://localhost/task_list_db')
.catch(error => console.log(err, 'Error in connecting to database'));// handles error in connecting to database

//now the connection gives us access to the database
const db = mongoose.connection;

//once connected to database this event fires up and prints the connect status in the console
db.once('open',() => console.log('Successfully connected to database'));

