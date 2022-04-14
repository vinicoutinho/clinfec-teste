import React from "react";
import Login from "../Login/Login";

import '../Login/Css/Input.css'

type InputHomeProps={
    text: string;
    size?: any;
    type?:any;
}

export const InputHome = ({text,size,type} :InputHomeProps) => {
    return(
        <div className="Input-Home">
            <p className="label-Home" id="teste" > {text} </p>
                <input type={type} style={{
                    width: size,
                    height: '50px',
                    border:'solid 2px #66BB91',
                    borderColor:'#66BB91',
                    borderRadius:'10px',
                    outline:'none',
                    fontSize:'30px',
                    padding:'5px',
                }}
            />
        </div>
    );
}