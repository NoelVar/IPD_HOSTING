require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const recipesRoutes = require('./routes/recipes')
const learnRoutes = require('./routes/learn')
const forumRoutes = require('./routes/forumGroups')
const postRoutes = require('./routes/posts')

// NOTE: EXPRESS APP STORED IN THE APP CONSTANT
const app = express()
app.use(cors({
    origin: process.env.FRONTEND, // Update with your frontend URL
    credentials: true
}))

// NOTE: MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
    // DEBUG: LOGGER FOR DEBUGGING
    console.log("LOGGER: Path: " + req.path, "Mehtod: " + req.method)
    next()
})

// NOTE: ROUTE HANDLER
app.use('/recipes', recipesRoutes)
app.use('/learn', learnRoutes)
app.use('/community', forumRoutes)
app.use('/community/:id/posts', postRoutes)

// NOTE: CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // NOTE: LISTEN FOR REQUESTS IF THE DB CONNECTION IS SUCCESSFUL
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on PORT 4000')
    })
    })
    .catch((error) => {
        // DEBUG: LOGGING ERROR
        console.log('ERROR: ' + error)
    })
