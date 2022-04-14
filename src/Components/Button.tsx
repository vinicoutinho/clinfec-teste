import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import Login from "../Login/Login";

import '../Login/Css/Button.css'

type ButtonProps ={
    text: string;
    size: any;
    color?: any;
}

export const Button =({text,size, color} :ButtonProps)=>{
    return(
        <div className="btn" style={{
            width: size,
            backgroundColor: color
        }} >
           {text}
        </div>
    );
}