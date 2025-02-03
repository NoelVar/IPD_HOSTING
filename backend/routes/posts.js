const express = require('express')
const { 
    getAllPosts,
    getSinglePost,
    createPost,
    deletePost,
    updatePost
 } = require('../controllers/postController')

// NOTE:    ROUTER
const router = express.Router()

// NOTE: GET ALL POSTS
router.get('/', getAllPosts)

// NOTE: GET SINGLE POST
router.get('/:id', getSinglePost)

// NOTE: CREATE POST
router.post('/', createPost)

// NOTE: DELETE POST
router.delete('/:id', deletePost)

// NOTE: UPDATE POST
router.patch('/:id', updatePost)

module.exports = router