import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from '../Step9/styles';
import '../Step9/styles.css'
import Swal from 'sweetalert2';


function Form9() {
  const navigate = useNavigate()
  const [fumante, setFumante] = useState('');

  const location = useLocation();

  const { nome , idade,sexo,numCartaoSUS,motivoConsulta,queixas,alergia,historicoDoencas } = 
    location.state as { nome: string ,idade: string,sexo:string,numCartaoSUS:number,
    motivoConsulta:string, queixas:string,alergia:string,historicoDoencas:string};

    const handleButtonClick=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const button = event.currentTarget;
        const buttonValue = button.value;
        setFumante(buttonValue);
    }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(fumante ===""){
      Swal.fire({
        title: 'Alerta!',
        text: 'Informe paciente se o paciente e fumante ou não.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    return
  };
    navigate('/step10',{state:{nome,idade,sexo,numCartaoSUS,motivoConsulta,queixas,alergia,historicoDoencas,fumante}})
    
  };



  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Agora vamos informar se o paciente fuma</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
        
        <label>
            Informe abaixo se o paciente fuma
            <div className='container'>               
              <button type='button' className={fumante ==="Sim"? 'selected':''} value="Sim" onClick={handleButtonClick}>Sim</button>
              <button type='button'  className={fumante ==="Não"? 'selected':''} value="Não" onClick={handleButtonClick}>Não</button>   
            </div>

        </label>
        <button className='btn' type="submit">Próximo</button>
        </form>
       
    </C.Container>
    </Theme>
  );
}

export default Form9;
