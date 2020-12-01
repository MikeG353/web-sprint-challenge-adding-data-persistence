const db = require('../../data/dbConfig.js')

module.exports = {
    getProjects,
    getProjectsById,
    add
}

async function getProjects() {
    try {
        return await db('projects')
    } catch (error) {
        throw error
    }
}

async function getProjectsById(id) {
    try {
        return await
            db('projects')
            .where({id})
            .first()
    } catch (error) {
        throw error
    }
}

async function add(projectData) {
    try {
        const ids = await db('projects').insert(projectData)
        const newProject = await getProjectsById(ids[0])
        return newProject
    } catch (error) {
        throw error   
    }
}