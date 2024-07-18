import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Form1 from './components/pages/Step1';
import Form2 from './components/pages/Step2';
import Form3 from './components/pages/Step3';
import { useState } from 'react';
import Form4 from './components/pages/Step4';
import Form5 from './components/pages/Step5';
import Home from './components/pages/Home';
import Form6 from './components/pages/Step6';
import Form7 from './components/pages/Step7';
import Form8 from './components/pages/Step8';

import Form9 from './components/pages/Step9';
import Form10 from './components/pages/Step10';
import VerPacientes from './components/pages/VerPacientes';



export const Router=()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/pacientes' Component={VerPacientes}/>
                <Route path='/step1' Component={Form1} />
                <Route path='/step2' Component={Form2}/>
                <Route path='/step3' Component={Form3}/>
                <Route path='/step4' Component={Form4}/>
                <Route path='/step5' Component={Form5}/>
                <Route path='/step6' Component={Form6}/>
                <Route path='/step7' Component={Form7}/>
                <Route path='/step8' Component={Form8}/>
                <Route path='/step9' Component={Form9}/>
                <Route path='/step10' Component={Form10}/>
            </Routes>
        </BrowserRouter>
    )
}
