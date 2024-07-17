import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from './styles';
import axios from 'axios';


function Form7() {
  const navigate = useNavigate()
  const [alergia, setAlergia] = useState('');

  const location = useLocation();

  const { nome , idade,sexo,numCartaoSUS,motivoConsulta,queixas } = 
    location.state as { nome: string ,idade: string,sexo:string,
    numCartaoSUS:number,motivoConsulta:string,queixas:string};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement >) => {
    event.preventDefault();
    navigate('/step8',{state:{nome,idade,sexo,numCartaoSUS,motivoConsulta,queixas,alergia}})
    
    
  };

const NaoPossuiAlergia=()=>{
    setAlergia('Não possui alergia')
}

  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Informe alguma alergia.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Informe abaixo se o paciente tem alguma alergia.
            <textarea
                value={alergia}
                onChange={(e) => setAlergia(e.target.value)}
                placeholder='Informe a alergia'
                required 

            />
            </label>
        </div>
        <div className='btn-pag'>
            <button type="submit">Próximo</button>
            <button type='button' onClick={NaoPossuiAlergia}>Não possui alergia</button>
        </div>
        </form>
        
       
    </C.Container>
    </Theme>
  );
}

export default Form7;
