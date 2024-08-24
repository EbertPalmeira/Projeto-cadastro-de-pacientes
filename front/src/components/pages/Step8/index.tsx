import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from '../Step7/styles';



function Form8() {
  const navigate = useNavigate()
  const [historicoDoencas, setHistoricoDoencas] = useState('');

  const location = useLocation();

  const { nome , idade,sexo,numCartaoSUS,motivoConsulta,queixas,alergia } = 
    location.state as { nome: string ,idade: string,sexo:string,numCartaoSUS:number,
    motivoConsulta:string, queixas:string,alergia:string};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/step9',{state:{nome,idade,sexo,numCartaoSUS,motivoConsulta,queixas,alergia,historicoDoencas}})
  
    
  };
  const handleNot=()=>{
    setHistoricoDoencas('Não possui historico doentio')
    

  }



  return (
    <Theme>
        <C.Container>

        <p>Passo 8/10</p>
        <h1>Agora vamos informar o historico doentio do paciente</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Informe o historico de doenças do pacientes
            <textarea
                value={historicoDoencas}
                onChange={(e) => setHistoricoDoencas(e.target.value)}
                placeholder='Informe o historico de doenças do pacientes'
                

            />
            </label>
        </div>
        <div className='btn-pag'>
            <button type="submit">Próximo</button>
            <button  onClick={handleNot} type='button'>Não tem historico doentio</button>
        </div>
        </form>
       
    </C.Container>
    </Theme>
  );
}

export default Form8;
