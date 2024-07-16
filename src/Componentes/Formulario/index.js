import './formulario.css'
import Texto from '../Texto'
import Botao from '../Botao'
import { useState } from 'react';
const Formulario = ({aoMudarValor}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      const novoValor = event.target.value;
      setInputValue(novoValor);
     // aoMudarValor(novoValor);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário enviado:', inputValue);
        aoMudarValor(inputValue);
      };

    return (
        <div className='formulario' > 
            <form onSubmit={handleSubmit}>
                <Texto
                    label="Código do Pokemon"
                    placeholder="[1-255]" 
                    value={inputValue} 
                    onChange={handleChange}
                    
                />

                <Botao placeholder="Buscar!"/>
            </form>
            
        </div>
    )
}

export default Formulario

