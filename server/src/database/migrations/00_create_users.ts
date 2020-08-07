import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// quando der algo de errado, essa função que irá atuar!
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}