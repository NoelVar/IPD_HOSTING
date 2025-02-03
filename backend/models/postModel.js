const mongoose = require('mongoose')

const Schema = mongoose.Schema

// NOTE: DEFINES THE SCHEMA FOR THE POST MODEL
const postSchema = new Schema({
    postTitle: {
        type: String,
        required: true // NOTE: POST TITLE IS A REQUIRED FIELD
    },
    postDescription: {
        type: String,
        required: true // NOTE: POST DESCRIPTION IS A REQUIRED FIELD
    },
    postMedia: {
        type: String,
        required: false // NOTE: POST MEDIA IS AN OPTIONAL FIELD
    },
    posterName: {
        type: String,
        required: true // NOTE: POSTER NAME IS A REQUIRED FIELD
    },
    group: {
        type: Schema.ObjectId,
        ref: 'forumGroup' // NOTE: REFERENCES THE FORUM GROUP MODEL
    }
}, { timestamps: true }) // NOTE: AUTOMATICALLY ADDS CREATED DATE AND UPDATE DATE FIELDS

// NOTE: EXPORTS THE POST MODEL BASED ON THE DEFINED SCHEMA
module.exports = mongoose.model('Posts', postSchema)