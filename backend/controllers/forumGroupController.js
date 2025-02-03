const forumGroupModel = require('../models/forumGroupsModel')
const mongoose = require('mongoose')

// GET ALL FORUM GROUPS ---------------------------------------------------------------------------
const getAllForumGroups = async (req, res) => {
    // NOTE: FETCHES ALL FORUM GROUPS FROM DB
    // SORTS FORUM GROUPS BY CREATION DATE WITH THE MOST RECENT FIRST
    const forumGroup = await forumGroupModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(forumGroup)
}

// GET SINGLE FORUM GROUP -------------------------------------------------------------------------
const getSingleForumGroup = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF FORUM GROUP EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID exists'})
    }

    const forumGroup = await forumGroupModel.findById(id)

    // NOTE: CHECKS IF FORUM GROUP EXISTS IN DB
    if (!forumGroup) {
        return res.status(400).json({error: 'No data found'})
    }

    // NOTE: RETURNS FORUM GROUP IF STATUS IS OK
    res.status(200).json(forumGroup)
}

// CREATE FORUM GROUP -----------------------------------------------------------------------------
const createForumGroup = async (req, res) => {
    const { title, description, numPost, logoImg } = req.body

    // NOTE: ATTEMPTS TO CREATE FORUM GROUP IN DB
    try {
        const forumGroup = await forumGroupModel.create({title, description, numPost, logoImg})
        // NOTE: RETURNS FORUM GROUP IF STATUS IS OK
        res.status(200).json(forumGroup)
    } catch (error) {
        // NOTE: CATCHES ERRORS AND RETURNS ERROR MESSAGE
        res.status(400).json({error: error.message})
    }
}

// DELETE FORUM GROUP -----------------------------------------------------------------------------
const deleteForumGroup = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF FORUM GROUP EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID exists'})
    }

    const forumGroup = await forumGroupModel.findOneAndDelete({_id: id})

    // NOTE: CHECKS IF FORUM GROUP EXISTS IN DB
    if (!forumGroup) {
        return res.status(400).json({error: 'No data found'})
    }

    // NOTE: RETURNS FORUM GROUP IF STATUS IS OK
    res.status(200).json(forumGroup)
}

// UPDATE FORUM GROUP -----------------------------------------------------------------------------
const updateForumGroup = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF FORUM GROUP EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID found'})
    }

    const forumGroup = await forumGroupModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // NOTE: CHECKS IF FORUM GROUP EXISTS IN DB
    if (!forumGroup) {
        return res.status(400).json({error: 'No data found'})
    }

    // NOTE: RETURNS FORUM GROUP IF STATUS IS OK
    res.status(200).json(forumGroup)
}

module.exports = {
    getAllForumGroups,
    getSingleForumGroup,
    createForumGroup,
    deleteForumGroup,
    updateForumGroup
}