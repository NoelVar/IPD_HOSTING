// NOTE: REQUIRES MONGOOSE TO CREATE SCHEMA
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//const ingredientSchema = new Schema({ name: String });

// NOTE: DEFINES THE SCHEMA FOR THE RECIPE MODEL
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true // NOTE: TITLE IS A REQUIRED FIELD
    },
    prepTime: {
        type: String,
        required: true // NOTE: PREPARATION TIME IS A REQUIRED FIELD
    },
    cookingTime: {
        type: String,
        required: true // NOTE: COOKING TIME IS A REQUIRED FIELD
    },
    difficulty: {
        type: String,
        required: true // NOTE: DIFFICULTY LEVEL IS A REQUIRED FIELD
    },
    serving: {
        type: Number,
        required: true // NOTE: NUMBER OF SERVINGS IS A REQUIRED FIELD
    },
    cusine: {
        type: String,
        required: false // NOTE: CUISINE TYPE IS AN OPTIONAL FIELD
    },
    prepInstruction: {
        type: String,
        required: true // NOTE: PREPARATION INSTRUCTIONS ARE A REQUIRED FIELD
    },
    cookInstructions: {
        type: String,
        required: true // NOTE: COOKING INSTRUCTIONS ARE A REQUIRED FIELD
    },
    ingredients: {
        type: [String],
        required: true // NOTE: INGREDIENTS LIST IS A REQUIRED FIELD
    }

}, { timestamps: true }) // NOTE: AUTOMATICALLY ADDS CREATED DATE AND UPDATE DATE FIELDS

// NOTE: EXPORTS THE RECIPE MODEL BASED ON THE DEFINED SCHEMA
module.exports = mongoose.model('recipe', recipeSchema)