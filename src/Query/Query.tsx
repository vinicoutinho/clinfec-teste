import React from "react";
import { Title } from "../Components/Title";
import { Input } from "../Components/Input";
import { InputPatient } from "../Components/InputPatient";
import { InputHome } from "../Components/InputHome";

import '../Query/Query.css'
import { Button } from "../Components/Button";
import { InputMedic } from "../Components/InputMedic";

export const Query=() =>{
    return(
        <div className="background-query">
            <div className="form-Query">
                <div className="header-Query">
                    <div className="title">
                        <Title text=' Consulta' fontSize='45px' color='#66BB91' />
                    </div>
                    <div className="logout"></div>
                </div>
                <div className="Query">
                    <div className="menu-Query">
                        <div className="menu-sup">
                            <div className="menu-input">
                                <InputMedic text="Médico"  size='460px' />
                            </div>
                            <div className="menu-input">
                                <InputHome  text="Dia de Consulta"  size='270px'/>
                            </div>
                        </div>
                        <div className="menu-inf">
                            <div className="menu-input">
                                <InputMedic text="Médico"  size='460px' />
                            </div>   
                            <div className="menu-buttom">
                                <Button text="Pesquisar" size='270px' />
                            </div>
                        </div>
                    </div>
                    <div className="form-table">
                        <table style={{width: '100%'}} >
                        <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr> 
                        </table>
                   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Query;