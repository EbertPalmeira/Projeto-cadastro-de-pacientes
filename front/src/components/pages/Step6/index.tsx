import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from './styles';



function Form6() {
  const navigate = useNavigate()
  const [queixas, setQueixas] = useState('');

  const location = useLocation();

  const { nome , idade,sexo,numCartaoSUS,motivoConsulta } = location.state as { nome: string ,idade: string,sexo:string,numCartaoSUS:number,motivoConsulta:string};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/step7',{state:{nome,idade,sexo,numCartaoSUS,motivoConsulta,queixas}})
    
  };

  const handleNot=()=>{
    setQueixas('Não ha queixas');
    

  }



  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Informe alguma queixa.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Escreva abaixo a queixa.
            <textarea
                value={queixas}
                onChange={(e) => setQueixas(e.target.value)}
                placeholder='Informe a queixa'
                required

            />
            </label>
        </div>
        <div className='btn-pag'>
            <button type="submit">Próximo</button>
            <button  onClick={handleNot} type='button' >Não há queixas</button>
        </div>
        </form>
       
    </C.Container>
    </Theme>
  );
}

export default Form6;
