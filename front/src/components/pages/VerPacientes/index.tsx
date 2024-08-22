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
    historicoDoencas:string,
    fumante:string,
    bebidaAlcoolica:string,
    id:number

}


function VerPacientes() {

    const[pacientes, setPacientes]= useState<DescricaoPacientes[]>([]);


    
    
console.log(pacientes);

    

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
            <div className='dados' style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                <h2 style={{
                  color: '#000',
                  fontSize:'1.2em',
                }}>
                  Nome do paciente :</h2>
                <h4 style={{fontSize:'1.2em'}}> {paciente.nome}</h4>
            </div> 
            
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                <h2 style={{
                  color: '#000',
                  fontSize:'1.2em',
               
                }}
                  >
                    
                    Idade do paciente :</h2>
                <h4 style={{fontSize:'1.2em'}}> {paciente.idade} anos</h4>
            </div>

            <div style={{display:'flex',alignItems:'center',gap:'10px',justifyContent:'center'}}>
                <h2 style={{
                  color: '#000',
                  fontSize:'1.2em',
                }}
                  >
                    
                   Sexo do paciente :
                   </h2>
                <h4 style={{fontSize:'1.2em'}}> {paciente.sexo} </h4>
            </div>

            <div style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                
                  <h2 style={{
                  color: '#000',
                  fontSize:'1.2em',
                }}
                  >
                    
                   N° cartao do SUS do paciente 
                   </h2>
                <h4 style={{fontSize:'1.2em'}}> :{paciente.numCartaoSUS} </h4>
            </div>

            <div style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                
                  <h2 style={{
                  color: '#000',
                  fontSize:'1.2em',
                }}
                  >
                    
                   Motivo da consulta:
                   </h2>
                <h4 style={{fontSize:'1.2em'}}>{paciente.motivoConsulta} </h4>
            </div>

            <div style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                
                  <h2 style={{
                  color: '#000',
                  fontSize:'1.2em',
                }}
                  >
                    
                   Queixas:
                   </h2>
                <h4 style={{fontSize:'1.2em'}}>{paciente.queixas} </h4>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                
                  <h2 style={{

                  color: '#000',
                  fontSize:'1.2em',
                }}
                  >
                    
                   Alergia :
                   </h2>
                <h4 style={{fontSize:'1.2em'}}>{paciente.alergia} </h4>
            </div>

            <div style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                
                <h2 style={{
                color: '#000',
                fontSize:'1.2em',
              }}
                >
                  
                 Historico doentio:
                 </h2>
              <h4 style={{fontSize:'1.2em'}}>{paciente.historicoDoencas} </h4>
          </div>

          <div style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                
                <h2 style={{
                color: '#000',
                fontSize:'1.2em',
              }}
                >
                  
                Fumante ?
                 </h2>
              <h4 style={{fontSize:'1.2em'}}>{paciente.fumante} </h4>
          </div>
          
          <div style={{display:'flex',alignItems:'center',gap:'10px' ,justifyContent:'center'}}>
                
                <h2 style={{

                color: '#000',
                fontSize:'1.2em',
              }}
                >
                  
                Ingere bebida alcoolica?
                 </h2>                                  

              <h4 style={{fontSize:'1.2em'}}>{paciente.bebidaAlcoolica
              } </h4>
          </div>
            
            
            
        </div>
    ))}
        </div>
       
    </C.Container>
    
  );
}

export default VerPacientes;
