const db = require('../../data/dbConfig.js')

module.exports = {
    getProjects,
    getProjectsById,
    //getResources,
    //getTasks
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
    } catch (error) {
        
    }
}

// async function getResources(project_id) {
//     try {
//         const resources = await
//             db('resources')
//             .join('projects', 'projects.id', 'resources.')
//     } catch (error) {
        
//     }
// }