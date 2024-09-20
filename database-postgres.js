import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listCarros() {
    const carros = await sql`select * from carros`;
    return carros;
  }

  async createCarro(carro) {
    const id = randomUUID();
    console.log('id', id);
    const name = carro.name;
    const plate = carro.plate;
    
    await sql`insert into carros (id, name, plate)
    values (${id}, ${name}, ${plate})`
  }

  async updateCarro(id, carro) {
    const name = carro.name;
    const plate = carro.plate;

    await sql`update carros set  
        name = ${name},
        plate = ${plate},
        where id = ${id}
    `;
  }

  async deleteCarro(id) {
    await sql`delete from carros where id = ${id}`
  }

}