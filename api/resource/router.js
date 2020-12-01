const express = require('express')

const Resources = require('./model.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const resources = await Resources.getResources()
        res.json(resources)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error with db', error: error })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const resource = await Resources.getResourceById(id)
        if (resource) {
            res.json(resource)
        } else {
            res.status(404).json({ message: 'resource id not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error with db', error: error })
    }
})

router.post('/', async (req, res) => {
    const resourceData = req.body
    try {
        const newResource = await Resources.add(resourceData)
        res.json(newResource)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error with db", error: error })
    }
})
module.exports = router