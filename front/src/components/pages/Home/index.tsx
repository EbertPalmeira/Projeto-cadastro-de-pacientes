
import * as C from './styles';
import imgCadastro from '../../../imgs/cadastro.jpg'
import imgVer from '../../../imgs/images.jpeg'
import "./style.css"
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const Cadastro=()=>{
    navigate("/step1")
  }

  const verPacientesCadastrados=()=>{
    navigate('/pacientes')
;  }

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
                    <div>
                      <button onClick={Cadastro}>Cadastrar pacientes</button>
                    </div>
                    
                  </div>
                  
                   
                    <div className='cadastro'>
                        <img src={imgVer} alt="" />
                        <p>Este campo é destinado para ver dados de pacientes já cadastrados</p>
                        <div>
                          <button onClick={verPacientesCadastrados}>Ver pacientes</button>
                        </div>

                    </div>
                </C.Div>
            
            
        </C.Container>
    </div>
  )
}

export default Home;