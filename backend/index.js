const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MongodbLogin =  require('./models/login')
const app = express()
app.use(express.json())
app.use(cors({
    origin: ["https://dsample.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}))


mongoose.connect('mongodb+srv://surya_user:surya123@mern2025.rrmsu.mongodb.net/appointments')

app.listen(3002, () => {
    console.log('server running..')
})

app.get("/", (req, res) => {
    res.json("Hello");
})

app.post('/login', (req,res) => {
    const {username,password} = req.body
    MongodbLogin.findOne({username:username})
    .then(emp => {
        if(emp){
            if (emp.password === password){
                res.json('Success')
            }else{
                res.json('Password is Incorrect')
            }
        }else{
            res.json('No record credited')
        }
    })
})

app.post('/register', (req, res) => {
    MongodbLogin.create(req.body)
    .then(emp => res.json(emp))
    .catch(err => res.json(err))
})
