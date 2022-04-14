import React from "react";
import { Button } from "../Components/Button";
import { Title } from "../Components/Title";
import '../Home/Css/Home.css'

export const Home=()=>{
    return(
        <div className="backgorund-home">
            <div className="form-home">
                <div className="header-home">
                    <div className="effect-1" >
                        <div className="effect-2">
                            <div className="effect-3">
                                <div className="effect-4">
                                    <div className="" >
                                        <Title  text='Home' fontSize='70px'  color='#FFF'/>
                                    </div>
                                </div> 
                            </div> 
                        </div>   
                    </div>
                </div>
                <div className="Home" >
                    <div className="input-home" >
                        <div className="btn-sup" > 
                            <div className="btn-left">
                                <Button text='Paciente' size='390px' />
                            </div>
                            <div className="btn-rigth">
                            <Button text='Médico' size='390px' />
                            </div>
                        </div>  
                        <div className="btn-inf" > 
                            <Button text='Cadastrar' size='390px' />
                        </div>  
                    </div>

                    <div className="header-logo" >
                         <div className="logo" >
                              
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Home;