import React, { useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios';
import { Theme } from '../../../Theme';
import * as C from './styles';
import { SelectOption } from '../../SelectOption';
import './Step3.css'


function Form3() {
  const navigate = useNavigate()
  const [sexo, setSexo] = useState('');
  const location = useLocation();

  const { nome,idade } = location.state as { nome: string ,idade: string};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/pacientes', { nome, idade,sexo });
      
    } catch (error) {
      console.error('Erro ao enviar os dados', error);
    }
  };

  return (
    <Theme>
      <C.Container>
      <p>Passo 2/X</p>
        <h1>Agora vamos inserir o sexo do paciente.</h1>
        <p>Preecha o campo abaixo.</p>

        <form onSubmit={handleSubmit}>
          <div className='container'>
            <SelectOption
              title="Masculino"
            />
            <SelectOption
              title="Feminino"
            />
            <SelectOption
              title="Outro"
            />
          </div>
          <button type="submit">Próximo</button>
        </form>
    </C.Container>
    </Theme>
  );
}

export default Form3;
