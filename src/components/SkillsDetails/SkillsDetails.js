import React, { useState, useEffect } from 'react';
import DetailLists from '../DetailLists/DetailLists';
import './SkillsDetails.css';

const SkillsDetails = ({onClick, name}) => {
    const [results, setResults] = useState();
    const [enable, setEnable] = useState(1);
    
    const elementsDetails = results => {
        const array = [
            [results['abilities'], 'ability', 'Abilities', 1], 
            [results['moves'], 'move', 'Moves', 1],
            [results['height'], 'height', 'Height', 10],
            [results['weight'], 'weight', 'Weight', 10],
        ];

        return array.map(k => { return <DetailLists key={k} items={k[0]} nameItems={k[1]} title={k[2]} divide={k[3]} /> });
    }
    
    useEffect((results) => { 
        if(enable !== 1) return;  
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;                 
        const api = new XMLHttpRequest();
        api.open('GET', url, true);
        api.send();

        api.onreadystatechange = function () {
            if(this.status === 200 && this.readyState === 4) {
                let data = JSON.parse(this.responseText);
                setResults(data);
                if(results !== undefined) setEnable(0);
            }
        }
    }, [enable, name]);

    if(results) {
        return (
            <div className="details">
                <div className="details-header">
                    <h1>{name}</h1>
                    <div className="close" onClick={onClick}>X</div>
                </div>    
                <div className="details-body">
                    {Object.keys(results.sprites).map(k => { return typeof results.sprites[k] === 'string' ? 
                        <img key={k} alt={`${name} ${k}`} src={results.sprites[k]} /> : null
                    })}              
                    <div className="details-body-texts">
                        {elementsDetails(results)}
                    </div>
                </div>            
            </div>
        );
    } else return null;
}

export default SkillsDetails;