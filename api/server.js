const express = require('express')
const helmet= require('helmet')

const ProjectsRouter = require('./project/router.js')
const ResourcesRouter = require('./resource/router.js')
const TasksRouter = require('./task/router.js')

const server = express()


server.use(helmet())
server.use(express.json())

server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResourcesRouter)
server.use('/api/tasks', TasksRouter)

module.exports = server