import './buscador.css'
import React, { useState, useEffect} from 'react';

const Buscador = (props) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.valor}`);
          if (!response.ok) {
            throw new Error('Pokemon não encontrado 😓');
          }
          const result = await response.json();
          setData(result);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [props.valor]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    if (!data || !data.types) {
      return <p></p>;
    }
  
    const tipo1 = data.types.map(tipos => tipos.type.name)
    const tipo2 = tipo1.join(', ')
    

    return (
      <section className='buscador'>
        <h1>Pokemon da busca</h1>
          <div className='cabecalho'>
            <div>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt='Foto do dito foda'/>
              <h4 className='texto'>Name: {data.name}</h4>
              <div className='texto'>Height: {data.height}</div>
              <div className='texto'>Weight: {data.weight}</div>
              <div className='texto'>Base Experience: {data.base_experience}</div>
              <div className='texto'>Tipo: {tipo2}</div>
            </div>
          </div>
      </section>
    );
  };

export default Buscador;

