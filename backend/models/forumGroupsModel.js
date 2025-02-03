const mongoose = require('mongoose')

const Schema = mongoose.Schema

// NOTE: DEFINES THE SCHEMA FOR THE FORUM GROUP MODEL
const forumGroupSchema = new Schema({
    title: {
        type: String,
        required: true // NOTE: TITLE IS A REQUIRED FIELD
    },
    description: {
        type: String,
        required: true // NOTE: DESCRIPTION IS A REQUIRED FIELD
    },
    numPost: {
        type: Number,
        required: true // NOTE: NUMBER OF POSTS IS A REQUIRED FIELD
    },
    logoImg: {
        type: String,
        required: true // NOTE: LOGO IMAGE URL IS A REQUIRED FIELD
    }
})

// NOTE: EXPORTS THE FORUM GROUP MODEL BASED ON THE DEFINED SCHEMA
module.exports = mongoose.model('forumGroup', forumGroupSchema)
