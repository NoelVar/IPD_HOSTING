const mongoose = require('mongoose')

const Schema = mongoose.Schema

// NOTE: DEFINES THE SCHEMA FOR THE LEARN MODEL
const learnSchema = new Schema({
    title: {
        type: String,
        required: true // NOTE: TITLE IS A REQUIRED FIELD
    },
    description: {
        type: String,
        required: true // NOTE: DESCRIPTION IS A REQUIRED FIELD
    },
    material: {
        type: String,
        required: true // NOTE: MATERIAL IS A REQUIRED FIELD
    },
    media: {
        type: String,
        required: false // NOTE: MEDIA IS AN OPTIONAL FIELD
    }
})

// NOTE: EXPORTS THE LEARN MODEL BASED ON THE DEFINED SCHEMA
module.exports = mongoose.model('learn', learnSchema)