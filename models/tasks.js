const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
    }
});

//name of the collection in the database
const Tasks = mongoose.model('Tasks',taskSchema);

//exporting the schema
module.exports = Tasks;