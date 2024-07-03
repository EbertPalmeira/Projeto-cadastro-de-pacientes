import React, { useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios';
import { Theme } from '../../../Theme';
import * as C from './styles';
import './Step3.css'
import Swal from 'sweetalert2';


function Form3() {
  const navigate = useNavigate()

  const [sexo, setSexo] = useState('');
  const location = useLocation();

  const { nome , idade } = location.state as { nome: string ,idade: string};


  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.currentTarget;
    const buttonValue = button.value;
      setSexo(buttonValue);
  };
  
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if(sexo ===""){
      Swal.fire({
        title: 'Alerta!',
        text: 'Informe o sexo do paciente',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return
    }
    // try {
    //   await axios.post('http://localhost:5000/api/pacientes', { nome, idade,sexo});
      
    // } catch (error) {
    //   console.error('Erro ao enviar os dados', error);
    // }

    navigate('/step4',{state:{nome, idade,sexo}})
    console.log(sexo);
    
  
  };

  return (
    <Theme>
      <C.Container>
      <p>Passo 2/X</p>
        <h1>Agora vamos informar o sexo do paciente.</h1>
        <p>Preecha o campo abaixo.</p>


          <div className='container'>
            <button className={sexo ==="Masculino"? 'selected':''} value="Masculino" onClick={handleButtonClick}>
              Masculino
            </button>
            <button className={sexo ==="Feminino"? 'selected':''} value="Feminino" onClick={handleButtonClick}>
              Feminino
            </button>
            <button className={sexo === "transgenero" ? 'selected' : ''} value="transgenero" onClick={handleButtonClick}>
              Transgênero
            </button>
            <button className={sexo === "nao-binario" ? 'selected' : ''} value="nao-binario" onClick={handleButtonClick}>
              Não-binário
            </button>
            <button className={sexo === "Prefere-não-informar" ? 'selected' : ''} value="Prefere-não-informar" onClick={handleButtonClick}>
              Prefere não informar
            </button>
            
          </div>
          <button className='btn' onClick={handleSubmit}>Próximo</button>
        
    </C.Container>
    </Theme>
  );
}

export default Form3;
