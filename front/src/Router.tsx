import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Form1 from './components/pages/Step1';
import Form2 from './components/pages/Step2';
import Form3 from './components/pages/Step3';
import { useState } from 'react';
import Form4 from './components/pages/Step4';




export const Router=()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Form1} />
                <Route path='/step2' Component={Form2}/>
                <Route path='/step3' Component={Form3}/>
                <Route path='/step4' Component={Form4}/>
            </Routes>
        </BrowserRouter>
    )
}
