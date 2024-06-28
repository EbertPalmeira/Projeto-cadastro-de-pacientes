import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from './styles';


function Form1() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('');


  const handleNext = () => {
   navigate('/step2',{state:{nome}});
  };

  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Vamos começar inserindo o nome completo do paciente.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleNext}>
        <div>
            <label>
            Nome Completo :
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            </label>
        </div>
        <button type="submit">Próximo</button>
        </form>
    </C.Container>
    </Theme>
  );
}

export default Form1;
