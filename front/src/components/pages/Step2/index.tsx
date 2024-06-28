import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'
import { Theme } from '../../../Theme';
import * as C from './styles';

const Form2: React.FC = () => {
  const [idade, setIdade] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { nome } = location.state as { nome: string };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/step3',{state:{nome, idade}});

  };

  return (
    <Theme>
      <C.Container>
      <p>Passo 2/X</p>
        <h1>Agora vamos inserir a idade do paciente.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
          <div className='container'>
            <label>
              Informe a idade :
              <input
                type="date"
                min=''
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
    </C.Container>
    </Theme>
  );
};

export default Form2;
