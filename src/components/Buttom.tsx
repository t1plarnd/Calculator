import { FC } from "react";

interface ButtonProps {
    text: string;      
    param: string;     
    onClick: (val: string) => void; 
}

export const Button: FC<ButtonProps> = ({onClick, text, param}) => {
    
    return (
        <button className={param} onClick={() => onClick(text)}>{text}</button>
    );
}