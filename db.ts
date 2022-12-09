import {open} from 'react-native-quick-sqlite';
const db = open({name: 'mydb', location: 'default'});

//enable foreign keys
db.execute('PRAGMA foreign_keys = ON');

// create table accounts with parent account id (foreign key)
db.execute(
  'CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, parent_id INTEGER, FOREIGN KEY(parent_id) REFERENCES accounts(id))',
);

// insert a new account
db.execute('INSERT INTO accounts (name, balance) VALUES (?, ?)', [ 'John', 100 ]);

export default db;
