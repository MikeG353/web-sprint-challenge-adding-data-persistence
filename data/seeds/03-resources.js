
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: "coumputer",
      description: ""
    },
    {
      name: "conference room",
      description: ""
    }
  ])
};
