const express = require('express')

const Projects = require('./model.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects()
        res.json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error with db', error: error })
    }
})

module.exports = router