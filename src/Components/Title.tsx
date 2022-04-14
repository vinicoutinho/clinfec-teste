import React from "react";
import {Login} from '../Login/Login'

type TitleProps ={
    text: string;
    fontSize:any;
    color ?: any;
}

export const Title =({text,fontSize,color} :TitleProps)=>{
    return(
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            fontSize: fontSize,
            fontWeight: 'bold',
            color: color,
            letterSpacing:'2px'
        }}> 
            <p>{text}</p>
        </div>
    );
}; 