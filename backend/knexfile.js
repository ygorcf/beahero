// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite3'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite3'
    }
  }

};
