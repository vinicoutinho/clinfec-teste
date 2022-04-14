import React from "react";
import Login from "../Login/Login";

import '../Login/Css/Input.css'

type InputPatientProps={
    text: string;
    size?: any;
    type?:any;
}

export const InputPatient = ({text,size,type} :InputPatientProps) => {
    return(
        <div className="Input-Patient">
            <p className="label-login-input" id="teste" > {text} </p>
                <input type={type} style={{
                    width: size,
                    height: '50px',
                    border:'solid 2px #66BB91',
                    borderColor:'#36BACA',
                    borderRadius:'10px',
                    outline:'none',
                    fontSize:'30px',
                    padding:'5px',
                  
                    
                }}
            />
        </div>
    );
}