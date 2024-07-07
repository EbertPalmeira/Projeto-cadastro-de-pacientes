import React from 'react'
import * as C from './styles';


const Home = () => {
  return (
    <div>
        <C.Container>
            <C.Text>
                <h1>Bem vindo ao cadastro de pacientes</h1>
            </C.Text>
                <C.Div>
                    <div>Cadastrar pacientes</div>
                    <div>Ver pacientes cadastrados</div>
                </C.Div>
            
            
        </C.Container>
    </div>
  )
}

export default Home;