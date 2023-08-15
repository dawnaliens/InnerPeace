const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    major:String,
    avatar:String,
    gender:String,
})

mongoose.model('user',UserSchema)