const postModel = require('../models/postModel')
const mongoose = require('mongoose')

// GET ALL POSTS ----------------------------------------------------------------------------------
const getAllPosts = async (req, res) => {
    // NOTE: FETCHES ALL POSTS FROM DB
    // SORTS POSTS BY CREATION DATE WITH THE MOST RECENT FIRST
    const posts = await postModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(posts)
}

// GET SINGLE POST --------------------------------------------------------------------------------
const getSinglePost = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF POST EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID exists'})
    }

    const post = await postModel.findById(id)

    // NOTE: CHECKS IF POST EXISTS IN DB
    if (!post) {
        return res.status(400).json({error: 'Cannot find ID in scope'})
    }

    // NOTE: RETURNS POST IF STATUS IS OK
    res.status(200).json(post)
}

// CREATE POST ------------------------------------------------------------------------------------
const createPost = async (req, res) => {
    const { postTitle, postDescription, postMedia, posterName, group } = req.body

    // NOTE: ATTEMPTS TO CREATE POST IN DB
    try {
       const post = await postModel.create({postTitle, postDescription, postMedia, posterName, group})
       // NOTE: RETURNS POST IF STATUS IS OK
       res.status(200).json(post)
    } catch (error) {
        // NOTE: CATCHES ERRORS AND RETURNS ERROR MESSAGE
        res.status(400).json({error: error.message})
    }
}

// DELETE POST ------------------------------------------------------------------------------------
const deletePost = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF POST EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID exists'})
    }

    const post = await postModel.findOneAndDelete({_id: id})
    
    // NOTE: CHECKS IF POST EXISTS IN DB
    if (!post) {
        return res.status(400).json({error: 'Cannot find ID in scope'})
    }
    
    // NOTE: RETURNS POST IF STATUS IS OK
    res.status(200).json(post)
}

// UPDATE POST ------------------------------------------------------------------------------------
const updatePost = async (req, res) => {
    const { id } = req.params

    // NOTE: VALIDATES ID FORMAT TO CHECK IF POST EXISTS
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID exists'})
    }

    const post = await postModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // NOTE: CHECKS IF POST EXISTS IN DB
    if (!post) {
        return res.status(400).json({error: 'Cannot find ID in scope'})
    }

    // NOTE: RETURNS POST IF STATUS IS OK
    res.status(200).json(post)
}

module.exports = {
    getAllPosts,
    getSinglePost,
    createPost,
    deletePost,
    updatePost
}