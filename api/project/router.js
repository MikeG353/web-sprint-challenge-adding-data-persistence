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

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const project = await Projects.getProjectsById(id)
        if (project) {
            res.json(project)
        } else {
            res.status(404).json({ message: 'project id not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error with db', error: error })
    }
})

router.post('/', async (req, res) => {
    const projectData = req.body
    try {
        const newProject = await Projects.add(projectData)
        res.json(newProject)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error with db", error: error })
    }
})
module.exports = router