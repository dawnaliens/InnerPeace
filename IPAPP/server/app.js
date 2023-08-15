const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./User')
//password = thegamecontinues

app.use(bodyParser.json())
const User = mongoose.model('user')

const mongourl = 'mongodb+srv://Gavinnahhh:thegamecontinues@cluster2.u6ph5au.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('Successfully connected to the database')
})

mongoose.connection.on('error',(error)=>{
    console.log('Failed to connect to the database',error)
})

app.get('/',(req,res)=>{
    res.send('welcome to our project')
})

app.post('/send',(req,res)=>{
    //console.log(req.body)
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("Posted Successfully!")
    }).catch(err=>{
        console.log('oops,something went wrong',err)
    })
    
})

app.post('/send-data',(req,res)=>{
    //console.log(req.body)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        major: req.body.major,
        avatar: req.body.avatar,
        gender: req.body.gender
    })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("Posted successfully!")
    }).catch(err=>{
        console.log("Ooops, failed to posted!",err)
    })
    
})
app.listen(3000,()=>{
    console.log('server is running')
})