// import express
const express = require('express');

//import path modules so that we need not enter file path manually each time
const path = require('path');

const port = 8000;

//importing the database before firing up the server
const db = require('./config/mongoose');

//requiring the schema
const Tasks = require('./models/tasks');

//setting up express server
const app = express();

//setting up ejs as the view engine
app.set('view engine','ejs');
//setting up the path to the views folder
app.set('views',path.join(__dirname,'views'));


//Middleware Parser to decode the req object 
app.use(express.urlencoded());

//Setting up static
app.use(express.static('assets'));

//Routes
app.get('/',function(req,res){
    
    Tasks.find({},function(err,tasks){
        //task in the callback function reffer to all the search results from the db
        if(err){
            console.log('Error in fetching contacts from DB');
            return;
        }

        return res.render('home',{
            title:'To-Do App',
            task_list:tasks
        });
    });


});

app.post('/create-task',function(req,res){
    Tasks.create({
        task:req.body.task,
        category:req.body.category,
        date:req.body.date        
    })
    
    return res.redirect('back');
});

app.get('/delete-task',(req,res) => res.redirect('back'));

//handler function when the server starts listening to the port
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server ', err);
    }

    console.log('Server is up and running on port ',port);
});