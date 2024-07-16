import React, { useState,KeyboardEvent  } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from './styles';
import axios from 'axios';

function Form1() {
  const navigate = useNavigate()
  const [numCartaoSUS, setCartaoSUS] = useState('');
  const location = useLocation();

  const { nome , idade,sexo } = location.state as { nome: string ,idade: string,sexo:string};


  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const handleNext  = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/step5',{state:{nome,idade,sexo,numCartaoSUS}})
    // try {
    //   await axios.post('http://localhost:5000/api/pacientes', { nome, idade ,sexo,numCartaoSUS });
      
    // } catch (error) {
    //   console.error('Erro ao enviar os dados', error);
    // }
  
  };

  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Vamos inserir o numero do cartão do SUS.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleNext}>
        <div>
            <label>
              Digite o numero do cartão do SUS do paciente.
            <input
                type="text"
                value={numCartaoSUS}
                onChange={(e) => setCartaoSUS(e.target.value)}
                required
                maxLength={15}
                placeholder='Informe o numero do cartão do SUS'
                onKeyPress={handleKeyPress}
                
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
