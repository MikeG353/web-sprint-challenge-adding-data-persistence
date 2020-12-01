
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: "code projects router",
      notes: "",
      completed: false,
      project_id: 1
    },
    {
      description: "code resources model",
      notes: "",
      completed: false,
      project_id: 1
    }
  ])
};
