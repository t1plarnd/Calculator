interface ButtonProps {
    text: string;      
    param: string;     
    onClick: (val: string) => void; 
}

export function Button({ text, param, onClick }: ButtonProps) {
    
    return (
        <button className={param} onClick={() => onClick(text)}>{text}</button>
    );
}