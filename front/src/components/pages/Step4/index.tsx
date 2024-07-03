import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from './styles';
import  axios  from "axios";



function Form4() {
  const navigate = useNavigate()
  const [numCartaoSUS, setSus] = useState('');

  const location = useLocation();

  const { nome , idade,sexo } = location.state as { nome: string ,idade: string,sexo:string};


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(numCartaoSUS.length < 15  ){
        alert('Informe no minimo 15 numeros')
    }
    try {
      await axios.post('http://localhost:5000/api/pacientes', { nome, idade,sexo,numCartaoSUS });
      
    } catch (error) {
      console.error('Erro ao enviar os dados', error);
    }
    // console.log(sexo);
    // navigate('/step4')
    

  };

  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Informe o numero do cartão so SUS do paciente.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Cartão do SUS
            <input
                type="text"
                value={numCartaoSUS}
                onChange={(e) => setSus(e.target.value)}
                required
                maxLength={15}
                placeholder='Informe o numero do cartão do SUS'
            />
            </label>
        </div>
        <button type="submit">Próximo</button>
        </form>
    </C.Container>
    </Theme>
  );
}

export default Form4;
