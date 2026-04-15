import { FC } from "react";

interface DisplayProps {
  value: string;
}

export const Display: FC<DisplayProps> = ({ value }: DisplayProps) =>{
  return (
    <div className="display-container">
      <input 
        type="text" 
        className="main-display" 
        value={value} 
        readOnly 
        placeholder="0"
      />
    </div>
  );
}