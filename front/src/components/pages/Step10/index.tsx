import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from '../Step9/styles';
import '../Step9/styles.css'
import axios from 'axios';
import Swal from 'sweetalert2';


function Form10() {
  const navigate = useNavigate()
  const [bebidaAlcoolica, setBebidaAlcoolica] = useState('');

  const location = useLocation();

  const { nome , idade,sexo,numCartaoSUS,motivoConsulta,queixas,alergia,historicoDoencas ,fumante} = 
    location.state as { nome: string ,idade: string,sexo:string,numCartaoSUS:number,
    motivoConsulta:string, queixas:string,alergia:string,historicoDoencas:string,fumante:string};

    const handleButtonClick=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const button = event.currentTarget;
        const buttonValue = button.value;
          setBebidaAlcoolica(buttonValue);
    }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/pacientes', { nome, idade ,sexo,numCartaoSUS ,motivoConsulta,queixas,alergia,historicoDoencas,fumante,bebidaAlcoolica});
      Swal.fire({
        title: 'Tudo certo',
        text: 'Paciente cadastrado',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate('/')
      
    } catch (error) {
      console.error('Erro ao enviar os dados', error);
    }
    
  };



  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Agora vamos informar se o paciente ingere bebida alcoólica</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
        
        <label>
            Informe abaixo se o paciente ingere bebida alcoólica
            <div className='container'>               
              <button type='button' className={bebidaAlcoolica ==="Sim"? 'selected':''} value="Sim" onClick={handleButtonClick}>Sim</button>
              <button type='button'  className={bebidaAlcoolica ==="Não"? 'selected':''} value="Não" onClick={handleButtonClick}>Não</button>   
              <button type='button'  className={bebidaAlcoolica ==="Socialmente"? 'selected':''} value="Socialmente" onClick={handleButtonClick}>Socialmente</button>                  
            </div>

        </label>
        <button className='btn' type="submit">Próximo</button>
        </form>
       
    </C.Container>
    </Theme>
  );
}

export default Form10;
