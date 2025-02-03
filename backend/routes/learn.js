const express = require('express')
const { 
    getAllLearn,
    getSingleLearn,
    createLearn,
    deleteLearn,
    updateLearn
 } = require('../controllers/learnController')

// NOTE: ROUTER
const router = express.Router()

// NOTE: GET ALL LEARN
router.get('/', getAllLearn)

// NOTE: GET SINGLE LEARN
router.get('/:id', getSingleLearn)

// NOTE: CREATE LEARN
router.post('/', createLearn)

// NOTE: DELETE LEARN
router.delete('/:id', deleteLearn)

// NOTE: UPDATE LEARN
router.patch('/:id', updateLearn)

module.exports = router