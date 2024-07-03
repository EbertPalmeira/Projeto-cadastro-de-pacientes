import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from '../Step4/styles';
import  axios  from "axios";
import Swal from 'sweetalert2';


function Form5() {
  const navigate = useNavigate()
  const [motivoConsulta, setMotivoConsulta] = useState('');

  const location = useLocation();

  const { nome , idade,sexo,numCartaoSUS } = location.state as { nome: string ,idade: string,sexo:string,numCartaoSUS:number};


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/pacientes', { nome, idade,sexo,numCartaoSUS });
      
    } catch (error) {
      console.error('Erro ao enviar os dados', error);
    }
    

  };

  const handleBack=()=>{
    navigate('/step4')
  }

  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Informe o motivo da consulta.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Motivo da consulta.
            <input
                type="text"
                value={motivoConsulta}
                onChange={(e) => setMotivoConsulta(e.target.value)}
                placeholder='Informe o motivo da consulta'
            />
            </label>
        </div>
        <div className='btn-pag'>
            <button type="submit">Próximo</button>
            <button onClick={handleBack}>Voltar</button>
        </div>
        </form>
       
    </C.Container>
    </Theme>
  );
}

export default Form5;
