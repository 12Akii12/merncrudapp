const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    companyName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    stateS:{
        type:[String],
        enum : ['Maharashtra', 'Goa', 'Gujarat'],
        required:true
    },
    city:{
        type:[String],
        required:true
    }
});

module.exports = mongoose.model('Posts',postSchema);