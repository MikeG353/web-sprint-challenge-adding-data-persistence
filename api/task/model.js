const db = require('../../data/dbConfig.js')

module.exports = {
    getTasks,
    getTaskById,
    add
}

async function getTasks() {
    try {
        return await db('tasks')
    } catch (error) {
        throw error
    }
}

async function getTaskById(id) {
    try {
        return await
            db('tasks')
            .where({id})
            .first()
    } catch (error) {
        throw error
    }
}

async function add(taskData) {
    try {
        const ids = await db('tasks').insert(taskData)
        const newTask = await getTaskById(ids[0])
        return newTask
    } catch (error) {
        throw error   
    }
}