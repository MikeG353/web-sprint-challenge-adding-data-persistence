const express = require('express')

const Tasks = require('./model.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.getTasks()
        res.json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error with db', error: error })
    }
})

router.post('/', async (req, res) => {
    const taskData = req.body
    try {
        const newTask = await Tasks.add(taskData)
        res.json(newTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error with db", error: error })
    }
})

module.exports = router