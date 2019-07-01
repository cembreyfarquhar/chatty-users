require('dotenv').config()

module.exports = {
    development: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './data/db.sqlite3'
        },
        migrations: {
            directory: './data/migrations'
        }
    },

    production: {
        client: 'pg',
        debug: true,
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './data/migrations'
        },
        ssl: true
    }
}

// // Update with your config settings.

// module.exports = {
//   development: {
//       client: 'sqlite3',
//       useNullAsDefault: true,
//       connection: {
//           filename: './data/db.sqlite3'
//       }
//   },

//   staging: {
//       client: 'postgresql',
//       connection: {
//           database: 'my_db',
//           user: 'username',
//           password: 'password'
//       },
//       pool: {
//           min: 2,
//           max: 10
//       },
//       migrations: {
//           tableName: 'knex_migrations'
//       }
//   },

//   production: {
//       client: 'postgresql',
//       connection: {
//           database: 'my_db',
//           user: 'username',
//           password: 'password'
//       },
//       pool: {
//           min: 2,
//           max: 10
//       },
//       migrations: {
//           tableName: 'knex_migrations'
//       }
//   }
// }
