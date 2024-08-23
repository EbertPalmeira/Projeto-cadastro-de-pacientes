const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do Supabase
const SUPABASE_URL = 'https://dntgigntcmtylolgrrfb.supabase.co/rest/v1/pacientes'; // Substitua com a URL do seu projeto Supabase
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRudGdpZ250Y210eWxvbGdycmZiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDQzNDA2MCwiZXhwIjoyMDQwMDEwMDYwfQ.13DEtE7jiEGt2cg4eyvEmIYqxUfdtznrfdg1ln6aUPs'; // Substitua com a chave de anonimato do seu projeto Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Rota POST para receber dados do React
app.post('/api/pacientes', async (req, res) => {
  const { nome, idade, sexo, numCartaoSUS, motivoConsulta, queixas, alergia, historicoDoencas, fumante, bebidaAlcoolica } = req.body;

  try {
    const { data, error } = await supabase
      .from('pacientes')
      .insert([{ nome, idade, sexo, numCartaoSUS, motivoConsulta, queixas, alergia, historicoDoencas, fumante, bebidaAlcoolica }]);

    if (error) {
      throw error; // Lance o erro para ser capturado pelo bloco catch
    }

    res.status(201).json({ id: data[0].id, nome, idade, sexo, numCartaoSUS, motivoConsulta, queixas, alergia, historicoDoencas, fumante, bebidaAlcoolica });
  } catch (error) {
    console.error('Erro ao inserir no banco de dados:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Rota GET para obter dados do banco de dados
app.get('/api/pacientes', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('pacientes')
      .select('*');

    if (error) {
      throw error; // Lance o erro para ser capturado pelo bloco catch
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
