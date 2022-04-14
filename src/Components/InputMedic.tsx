import React from "react";
import Login from "../Login/Login";

import '../Login/Css/Input.css'

type InputMedicProps={
    text: string;
    size?: any;
    type?:any;
}

export const InputMedic = ({text,size,type} :InputMedicProps) => {
    return(
        <div className="Medici">
            <p className="label-Medic"  > {text} </p>
                <input type={type} style={{
                    width: size,
                    height: '50px',
                    border:'solid 2px #66BB91',
                    borderColor:'#66BB91',
                    borderRadius:'10px',
                    outline:'none',
                    fontSize:'30px',
                    padding:'5px',
                    display:'flex',
                  
                    
                }}
            />
        </div>
    );
}