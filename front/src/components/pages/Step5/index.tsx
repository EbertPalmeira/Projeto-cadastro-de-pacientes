import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from './styles';



function Form5() {
  const navigate = useNavigate()
  const [motivoConsulta, setMotivoConsulta] = useState('');

  const location = useLocation();

  const { nome , idade,sexo,numCartaoSUS } = location.state as { nome: string ,idade: string,sexo:string,numCartaoSUS:number};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/step6',{state:{nome,idade,sexo,numCartaoSUS,motivoConsulta}})
  };


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
            <textarea
                value={motivoConsulta}
                onChange={(e) => setMotivoConsulta(e.target.value)}
                placeholder='Informe o motivo da consulta'
                required 

            />
            </label>
        </div>
        <div className='btn-pag'>
            <button type="submit">Próximo</button>
            <button >Voltar</button>
        </div>
        </form>
       
    </C.Container>
    </Theme>
  );
}

export default Form5;
