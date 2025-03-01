const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const MongodbLogin = mongoose.model("emp", Login)

module.exports = MongodbLogin