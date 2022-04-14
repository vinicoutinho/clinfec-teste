import Reacts from "react";
import Patient from "./Patient";

import '../Register-Patient/Css/SubTitle.css'

type SubTitleProps={
    text : string;
    color: any;
}


export const SubTitle =({text,color} :SubTitleProps)=>{
    return(
        <div style={{
            width: '100%',
            height:'100%',
            display: 'flex',
            alignItems:'center',
            fontSize:'40px',
            color: color,
            position:'relative',
            left: '70px',
            top: '50px'
            
        }} >
            <p>{text}</p>
        </div>
    );
}