// BACKEND LOGIC FOR ROUTES
const learnModel = require('../models/learnModel')
const mongoose = require('mongoose')

// GET ALL LEARN
const getAllLearn = async (req, res) => {
    // NOTE: FETCHES ALL LEARN ITEMS FROM DB
    // SORTS LEARN ITEMS BY CREATION DATE WITH THE MOST RECENT FIRST
    const learn = await learnModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(learn)
}

// GET SINGLE LEARN -------------------------------------------------------------------------------
const getSingleLearn = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF LEARN ITEM EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such data exists'})
    }

    const learn = await learnModel.findById(id)

    // NOTE: CHECKS IF LEARN ITEM EXISTS IN DB
    if (!learn) {
        return res.status(400).json({error: 'No data found'})
    }

    // NOTE: RETURNS LEARN ITEM IF STATUS IS OK
    res.status(200).json(learn)
}

// CREATE LEARN -----------------------------------------------------------------------------------
const createLearn = async (req, res) => {
    const { title, description, material, media } = req.body

    // NOTE: ATTEMPTS TO CREATE LEARN ITEM IN DB
    try {
        const learn = await learnModel.create({ title, description, material, media })
        // NOTE: RETURNS LEARN ITEM IF STATUS IS OK
        res.status(200).json(learn)
    } catch (error) {
        // NOTE: CATCHES ERRORS AND RETURNS ERROR MESSAGE
        res.status(400).json({error: error.message})
    }
}

// DELETE LEARN -----------------------------------------------------------------------------------
const deleteLearn = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF LEARN ITEM EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such id exists'})
    }

    const learn = await learnModel.findOneAndDelete({_id: id})

    // NOTE: CHECKS IF LEARN ITEM EXISTS IN DB
    if (!learn) {
        return res.status(400).json({error: 'No data found'})
    }

    // NOTE: RETURNS LEARN ITEM IF STATUS IS OK
    res.status(200).json(learn)
}

// UPDATE LEARN -----------------------------------------------------------------------------------
const updateLearn = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF LEARN ITEM EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID exists'})
    }

    const learn = await learnModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // NOTE: CHECKS IF LEARN ITEM EXISTS IN DB
    if (!learn) {
        return res.status(400).json({error: 'No data found'})
    }

    // NOTE: RETURNS LEARN ITEM IF STATUS IS OK
    res.status(200).json(learn)
}

module.exports = {
    getAllLearn,
    getSingleLearn,
    createLearn,
    deleteLearn,
    updateLearn
}