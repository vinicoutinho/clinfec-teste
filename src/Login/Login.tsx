import React from "react";
import {Title} from '../Components/Title';
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import Patient from "../Register-Patient/Patient";
import '../Login/Css/Login.css';
import { Link } from "react-router-dom";


export const  Login =() =>{
    return(
        <div className="background-login">
            <div className="effect-login"></div>
                <div className="form-login">
                   <div className="Login">
                        <div className="header-login">
                            <Title text="Login"  fontSize='60px' color='#66BB91' /> 
                        </div>
                        <div className="form-input" >
                           <div className="input-login">
                                <Input text='Usuário' size='500px' />
                                <Input text='Senha' size='500px' />
                                <div className="form-button" >
                                    <nav  > 
                                        <Link to="Patient" style={{outline:'none', textDecoration:'none'}}>
                                            <Button text='Entrar' size='390px' /> 
                                        </Link> 
                                    </nav>
                                    <div className="form-register">
                                        <p>Cadastre-se</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                   </div>
                </div>
            </div>
    );
}


export default Login();