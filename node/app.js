const express = require('express')
const usersRouter = require('./routes/users')
const searchesRouter = require('./routes/searches')
const mongoose = require('mongoose')
const app = express();


mongoose.connect(' mongodb+srv://tziporah:1234@cluster0.6uceu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})

// const app = express()
app.listen(3005)
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next()
})

app.use('/users', usersRouter)
app.use('/searches', searchesRouter)





