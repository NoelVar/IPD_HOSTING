const express = require('express')
const {
    getAllForumGroups,
    getSingleForumGroup,
    createForumGroup,
    updateForumGroup,
    deleteForumGroup
} = require('../controllers/forumGroupController')

const router = express.Router()

//NOTE: GET ALL FORUM GROUPS
router.get('/', getAllForumGroups)

//NOTE: GET SINGLE FORUM GROUP
router.get('/:id', getSingleForumGroup)

//NOTE: CREATE FORUM GROUP
router.post('/', createForumGroup)

//NOTE: DELETE FORUM GROUP
router.delete('/:id', deleteForumGroup)

//NOTE: UPDATE FORUM GROUP
router.patch('/:id', updateForumGroup)

module.exports = router
