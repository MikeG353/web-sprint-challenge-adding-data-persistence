
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: "Project API",
      description: 'Sprint to complete a project/tasks relational database',
      completed: 0,
    }
  ])
};
