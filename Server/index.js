const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/todomodel')
const UserModel = require('./Models/User')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get', (req,res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findById(id)
        .then(todo => TodoModel.findByIdAndUpdate(id, { done: !todo.done }, { new: true }))
        .then(updatedTodo => res.json(updatedTodo))
        .catch(err => res.json(err));
});


app.delete('/delete/:id', (req,res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({
                        message: "success",
                        userId: user._id  // Include the user's object ID
                    });
                } else {
                    res.json("password is incorrect");
                }
            } else {
                res.json("User not found");
            }
        })
        .catch(err => res.json(err));
});
app.listen(3001, () => {
    console.log("Server is Runin!")
})