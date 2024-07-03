import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../../Theme';
import * as C from './styles';
import Swal from 'sweetalert2';

function Form1() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('');


  const handleNext = () => {
    if( nome === ""){
      Swal.fire({
        title: 'Alerta!',
        text: 'Informe o nome completo do paciente',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return
    }
   navigate('/step2',{state:{nome}});
  };

  return (
    <Theme>
        <C.Container>

        <p>Passo 1/X</p>
        <h1>Vamos começar inserindo o nome completo do paciente.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleNext}>
        <div>
            <label>
            Nome Completo :
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                placeholder='Informe o nome completo do paciente'
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
