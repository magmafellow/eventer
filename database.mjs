import { Pool } from 'pg'

const dbSecret = 'mac7&'
let pool = new Pool()

// for local development
const configForDataBase = {
  database: 'postgres',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
}

// for local development
const configForTable = {
  database: 'eventer',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
}

if (process.env.NODE_ENV == 'production') {
  pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  })
} else {
  pool = new Pool(configForTable)
}

export { pool }
