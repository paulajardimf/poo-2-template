import { knex } from "knex"

export abstract class BaseDatabase {
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })
}
// abstract deixa não instanciável
// vai dar erro => const baseDatabase = new BaseDatabase()

// static faz o dado não ser acessado via instância