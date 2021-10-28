import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw(`
  create table segundoTeste(
    id varchar (255) primary key,
    name varchar (50)
  );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.raw(`drop table segundoTeste`);
}
