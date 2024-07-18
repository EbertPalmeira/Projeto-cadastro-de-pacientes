import * as C from './styles';
import '../Step9/styles.css'
import './styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

type DescricaoPacientes={
    nome:string,
    idade:string,
    sexo:string,
    numCartaoSUS:string,
    motivoConsulta:string,
    queixas:string,
    alergia:string,
    historicoDoentio:string,
    fumante:string,
    bebidaAcoolica:string,
    id:number

}


function VerPacientes() {

    const[pacientes, setPacientes]= useState<DescricaoPacientes[]>([]);
    const[idadeCerta,setIdadeCerta]=useState('')

    
    

    

    useEffect(() => {
        axios.get('http://localhost:5000/api/pacientes')
          .then(response => {
            setPacientes(response.data);

        
          
        
          })
          .catch(error => {
            console.error('Erro ao buscar os dados:', error);
          });
          
      },
       []);
       
      
  return (
    <C.Container>
    <div className='div'>
    {pacientes.map((paciente)=>(
        <div className='paciente'>
            <div className='dados'>
                <h2>Nome do paciente :</h2>
                <h2> {paciente.nome}</h2>
            </div> 
            
            <div>
                <h2>Idade paciente :</h2>
                <h2> {paciente.idade} anos</h2>
            </div>
            
            
        </div>
    ))}
        </div>
       
    </C.Container>
    
  );
}

export default VerPacientes;
