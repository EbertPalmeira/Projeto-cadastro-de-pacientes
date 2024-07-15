import React from 'react'
import * as C from './styles';
import imgCadastro from '../../../imgs/cadastro.jpg'
import "./style.css"


const Home = () => {
  return (
    <div>
        <C.Container>
            <C.Text>
                <h1>Bem vindo ao cadastro de pacientes</h1>
            </C.Text>
                <C.Div>
                  <div className='cadastro'>
                    <img src={imgCadastro} alt=""  />
                    <p>Este campo é destinado ao cadastro de pacientes.</p>
                    <button>Cadastrar pacientes</button>
                  </div>
                  
                   
                    <div>Ver pacientes cadastrados</div>
                </C.Div>
            
            
        </C.Container>
    </div>
  )
}

export default Home;