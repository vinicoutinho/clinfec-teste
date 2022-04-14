import React from "react";
import { SubTitle } from "../Register-Patient/SubTitle";
import { InputMedic } from "../Components/InputMedic";
import { Button } from "../Components/Button";

import '../Register-Medic/Css/Medic.css'

export const Medic=()=>{
    return(
        <div className="background-Medic">
            <div className="effect-Medic" ></div>
            <div className="form-Medic" >
                <div className="header-Medic" >
                    <SubTitle text='Cadastro de Médico' color='#66BB91' />    
                </div>
                <div className="Medic" >
                    <div className="input-Medic" >
                        <div className="Medic-A">
                            <div className="information" >
                                <InputMedic text='Nome' size='90%' />
                            </div>
                            <div className="information" >
                                <InputMedic text='Especialidade' size='90%' />
                            </div>
                            <div className="information-button" >
                                <div className="info" >
                                <InputMedic text='CRM' size='90%' />
                                </div>
                                <div className="btn-Medic" >
                                    <Button text='Salvar' size='200px' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Medic;