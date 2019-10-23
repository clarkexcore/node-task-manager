const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const User = mongoose.model('User', {
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.length < 6){
                throw new Error("Password too small - like your dick!");
            } else if (value.toLowerCase().includes("password")){
                throw new Error("Your password contains password.. Don't be stupid!");
            }
        }
    }
})

// const me = new User({
//     name: "Bulbasaur",
//     email: "bulby@pokemon.com",
//     password: "bulby123"
// })

// me.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(`Error!!!! ${err}`);
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: "Master Mongoose!"
})

task.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})