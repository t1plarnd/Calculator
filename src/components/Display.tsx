interface DisplayProps {
  value: string;
}

export function Display({ value }: DisplayProps) {
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