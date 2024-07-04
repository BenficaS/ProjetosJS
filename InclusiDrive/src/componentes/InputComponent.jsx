import React, { useState, forwardRef } from 'react'
import '../styles/Input.css'

const InputComponent = forwardRef(({ placeHolderText }, ref) => {
  const [inputText, setInputText] = useState('');

  const altera = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        className="style-input"
        type="text"
        placeholder={placeHolderText}
        value={inputText}
        onChange={altera}
        ref={ref} // Adicione esta linha
      />
    </div>
  );
});

export default InputComponent;
