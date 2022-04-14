import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {Login} from './Login/Login'
import Patient from './Register-Patient/Patient';
import Medic from './Register-Medic/Medic'
import Home from '../src/Home/Home'
import Query from './Query/Query';
import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
       {/* <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Patient' element={<Patient />} />
        <Route path='Patient/Medic'  element={<Medic />} />
        <Route path='Patient/Medic/Home'  element={<Home />} />
      </Routes>  */}

      <Query />
    
    </>
  );
}


export default App;
