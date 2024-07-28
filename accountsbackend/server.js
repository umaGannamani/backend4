// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'office_transactions'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected...');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const transactions = require('./routes/transactions');

app.use('/api', transactions);


module.exports = db;
