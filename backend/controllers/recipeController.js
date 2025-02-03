// BACKEND LOGIC FOR ROUTES
const recipeModel = require('../models/recipeModel')
const mongoose = require('mongoose')

// GET ALL RECIPES --------------------------------------------------------------------------------
const getAllRecipes = async (req, res) => {
    // NOTE: FETCHES ALL RECIPES FROM DB
    // SORTS RECIPES BY CREATION DATE WITH THE MOST RECENT FIRST
    const recipes = await recipeModel.find({}).sort({ createdAt: -1 })
    
    // NOTE: RETURNS RECIPES IF STATUS IS OK
    res.status(200).json(recipes)
}

// GET SINGLE RECIPE ------------------------------------------------------------------------------
const getSingleRecipe = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF RECIPE EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe exists'})
    }

    const recipe = await recipeModel.findById(id)
    
    // NOTE: CHECKS IF RECIPE EXISTS IN DB
    if (!recipe) {
        return res.status(400).json({error: 'No recipe found'})
    }

    // NOTE: RETURNS RECIPE IF STATUS IS OK
    res.status(200).json(recipe)
}

// CREATE RECIPE ----------------------------------------------------------------------------------
const createRecipe = async (req, res) => {
    const {title, prepTime, cookingTime, difficulty, serving, cusine, prepInstruction, cookInstructions, ingredients} = req.body
    
    // NOTE: ATTEMPTS TO CREATE RECIPE IN DB
    try {
        const recipe = await recipeModel.create({title, prepTime, cookingTime, difficulty, serving, cusine, prepInstruction, cookInstructions, ingredients})
        res.status(200).json(recipe)
    } catch (error) {
        // NOTE: CATCHES ERRORS AND RETURNS ERROR MESSAGE
        res.status(400).json({error: error.message})
    }
}

// DELETE RECIPE ----------------------------------------------------------------------------------
const deleteRecipe = async (req, res) => {
    const {id} = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF RECIPE EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe exists'})
    }

    const recipe = await recipeModel.findOneAndDelete({_id: id})
    
    // NOTE: CHECKS IF RECIPE EXISTS IN DB
    if (!recipe) {
        return res.status(400).json({error: 'No recipe found'})
    }
    
    // NOTE: DELETES RECIPE IF STATUS IS OK
    res.status(200).json(recipe)
}

// UPDATE RECIPE
const updateRecipe = async (req, res) => {
    const {id} = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF RECIPE EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe exists'})
    }

    const recipe = await recipeModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // NOTE: CHECKS IF RECIPE EXISTS IN DB
    if (!recipe) {
        return res.status(400).json({error: 'No recipe found'})
    }

    // NOTE: UPDATES RECIPE IF STATUS IS OK
    res.status(200).json(recipe)
}

module.exports = {
    getAllRecipes,
    getSingleRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
}