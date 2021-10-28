import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(`
    create table names(
        id varchar(255) primary key,
        month varchar(50)
      
    );
    `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.raw(`drop table auth;`);
}
