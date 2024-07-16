// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: 'Ebert@123', 
  database: 'projeto'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota POST para receber dados do React
app.post('/api/pacientes', (req, res) => {
  const { nome, idade,sexo,numCartaoSUS,motivoConsulta } = req.body;

  const query = 'INSERT INTO pacientes (nome, idade,sexo,numCartaoSUS,motivoConsulta) VALUES (?, ?, ? , ? , ? )';
  
  db.query(query, [nome, idade,sexo ,numCartaoSUS ,motivoConsulta], (err, results) => {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, nome, idade ,sexo,numCartaoSUS ,motivoConsulta });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/api/pacientes', (req, res) => {
  const query = 'SELECT * FROM pacientes';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter dados do banco de dados:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
});


