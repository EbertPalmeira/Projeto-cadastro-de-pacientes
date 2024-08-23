import * as C from './styles';
import '../Step9/styles.css';
import './styles.css';
import { useEffect, useState } from 'react';
import supabase from '../../../supa';

type DescricaoPacientes = {
    id: number;
    nome: string;
    idade: string;
    sexo: string;
    numCartaoSUS: string;
    motivoConsulta: string;
    queixas: string;
    alergia: string;
    historicoDoencas: string;
    fumante: string;
    bebidaAlcoolica: string;
};

function VerPacientes() {
    const [pacientes, setPacientes] = useState<DescricaoPacientes[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('pacientes')
                .select('*');

            if (error) {
                console.error('Erro ao buscar dados:', error);
            } else {
                setPacientes(data);
            }
        };

        fetchData();
    }, []);

    return (
        <C.Container>
            <div className='div'>
                {pacientes.map((paciente) => (
                    <div key={paciente.id} className='paciente'>
                        {[
                            { label: 'Nome do paciente', value: paciente.nome },
                            { label: 'Idade do paciente', value: `${paciente.idade} anos` },
                            { label: 'Sexo do paciente', value: paciente.sexo },
                            { label: 'N° cartão do SUS do paciente', value: paciente.numCartaoSUS },
                            { label: 'Motivo da consulta', value: paciente.motivoConsulta },
                            { label: 'Queixas', value: paciente.queixas },
                            { label: 'Alergia', value: paciente.alergia },
                            { label: 'Histórico doentio', value: paciente.historicoDoencas },
                            { label: 'Fumante?', value: paciente.fumante },
                            { label: 'Ingere bebida alcoólica?', value: paciente.bebidaAlcoolica },
                        ].map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                                <h2 style={{ color: '#000', fontSize: '1.2em' }}>{item.label}:</h2>
                                <h4 style={{ fontSize: '1.2em' }}>{item.value}</h4>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </C.Container>
    );
}

export default VerPacientes;
