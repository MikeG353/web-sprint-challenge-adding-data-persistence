const { table } = require("console")

exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
        tbl.string('description', 500)
        tbl.boolean('completed')
            .defaultTo(0)
    })

    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('description', 500)
            .notNullable()
        tbl.string('notes', 500)

        // https://stackoverflow.com/questions/59958918/why-am-i-unable-to-set-false-0-as-a-default-value-for-my-table-using-knex
        tbl.boolean('completed')
            .defaultTo(0)

        tbl.integer('project_id', 500)
            .notNullable()
            .unsigned()
            .references('projects.id')
    })

    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
            .unique()
        tbl.string('description', 500)        
    })

    .createTable('project_resources', tbl => {
        tbl.integer('project_id', 500)
            .notNullable()
            .unsigned()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resource_id', 500)
            .notNullable()
            .unsigned()
            .references('resources.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        }
    )
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
