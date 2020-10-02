import React from 'react';
import SkillsDetails from '../SkillsDetails/SkillsDetails';
import './PokemonInList.css';

const PokemonInList = ({onClick, items, full}) => {
    const renderedItems = items.results.map(item => {
        const id = item.url.split('/')[6];   

        return  (
            <div className={`card ${full === id ? 'full' : full === 0 ? '' : 'hide'}`} key={id}>
                {full !== id ? 
                    <div className="pokemon">
                        <img alt={item.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
                        <div>
                            <h3>{item.name} Nº{id}</h3>
                            <button onClick={() => onClick(id)} className="square_btn">Ver habilidades</button>
                        </div>
                    </div>  
                 : <SkillsDetails name={item.name} onClick={() => onClick(0)} />
                }              
            </div>
        );
    });

    return <div className={`container ${full !== 0 ? 'full' : ''}`}>{renderedItems}</div>;
}

export default PokemonInList;