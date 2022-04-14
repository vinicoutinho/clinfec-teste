import React from "react";
import { Title } from "../Components/Title";
import { SubTitle } from "./SubTitle";
import { InputPatient } from "../Components/InputPatient";
import '../Register-Patient/Css/Patient.css'
import { InputPatientAt } from "../Components/InputPatientAt";
import { Button } from "../Components/Button";
import { Link } from "react-router-dom";

export const Patient=()=>{
    return(
        <div className="background-Patient">
            <div className="effect-Patient" ></div>
            <div className="form-Patient" >
                <div className="header-Patient">
                    <SubTitle text="Cadastro de Paciente"  color='#36BACA'/>   
                    <div className = "header-btn"> 
                    <nav>
                            <Link to="Home" >
                                <Button text="Sair"  color='#F24141' size='150px' />
                            </Link>
                        </nav>
                      
                    </div>
                </div>
                <div className="Patient">
                    <div className="input-Patient">
                       <div className="Patient-A">
                            <div className="input-sup" >
                                <div className="inf-A" >
                                    <InputPatient text='Nome' size='450px' />
                                </div>
                                <div className="inf-B" >
                                    <InputPatient text='Sobrenome' size='450px' />
                                </div>
                            </div>
                            <div className="input-inf" >
                            <div className="inf-A" >
                                    <InputPatient text='Nome' size='450px' />
                                </div>
                                <div className="inf-B" >
                                    <InputPatient text='Sobrenome' size='450px' />
                                </div>
                            </div>
                            <div className="input-sup2" >
                                <div className="inf-A" >
                                    <InputPatientAt text='Atendimento Médico' size='970px' />
                                </div>
                            </div>
                            <div className="input-btn" >
                               <nav>
                                   <Link to="Medic"  style={{outline:'none', textDecoration:'none'}} >
                                        <Button text= 'Salvar'   size='200px' />
                                   </Link>
                               </nav>
                            </div>
                       </div>

                    </div>   
                </div>
            </div>
        </div>
    );

}

export default Patient;