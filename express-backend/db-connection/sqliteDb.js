const path = require('path')
const dbPath = path.resolve(__dirname, '/database.sqlite')

/*
  CommentsSQLite database table connection
*/
const CommentsSQLite = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

/*
  Create a table in the database called "comments"
*/

CommentsSQLite.schema
  .hasTable('comments')
    .then((exists) => {
      if (!exists) {
        return CommentsSQLite.schema.createTable('comments', table  => {
          table.increments('id').primary()
          table.integer('name')
          table.string('message')
          table.timestamps('created')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Comments\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('db connected!!')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

/*
  Export the database
*/
module.exports = CommentsSQLite
