// routes/transactions.js
const express = require('express');
const router = express.Router();
const db = require('../server');

// Get all transactions
router.get('/transactions', (req, res) => {
  db.query('SELECT * FROM transactions ORDER BY date DESC', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new transaction
router.post('/transactions', (req, res) => {
  const { type, amount, description, date } = req.body;
  db.query('INSERT INTO transactions (type, amount, description, date) VALUES (?, ?, ?, ?)', [type, amount, description, date], (err, result) => {
    if (err) throw err;
    res.send('Transaction added successfully');
  });
});


module.exports = router;
