import Banner from './Componentes/Banner'
import Buscador from './Componentes/Buscador';
import Formulario from './Componentes/Formulario';
import { useState } from 'react';
function App() {
  const [valor, setValor] = useState('')
  const mudarValor = (novoValor) => {
    setValor(novoValor);
  };
  return (
    <div > 
      <Banner/>
      <Formulario aoMudarValor={mudarValor}/>
      <Buscador valor={valor}/>
    </div>
  );
}

export default App;