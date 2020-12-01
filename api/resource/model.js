const db = require('../../data/dbConfig.js')

module.exports = {
    getResources,
    getResourceById,
    add
}

async function getResources() {
    try {
        return await db('resources')
    } catch (error) {
        throw error
    }
}

async function getResourceById(id) {
    try {
        return await
            db('resources')
            .where({id})
            .first()
    } catch (error) {
        throw error
    }
}

async function add(resourceData) {
    try {
        const ids = await db('resources').insert(resourceData)
        const newResource = await getResourceById(ids[0])
        return newResource
    } catch (error) {
        throw error   
    }
}