import React, { Fragment, useEffect, useState } from 'react';
import PokemonInList from '../PokemonInList/PokemonInList';
import './ListPokemones.css';

const ListPokemones = () => {
    const [full, setFull] = useState(0);
    const [results, setResults] = useState();
    const [pagerNext, setPagerNext] = useState();
    const [pagerPrev, setPagerPrev] = useState();
    const [enablePager, setEnablePager] = useState(0);
    const getPage = direction => setEnablePager(direction);
    const skills = props => setFull(props);

    useEffect(() => {   
        if(enablePager === 'none') return;
        const update = () => {
            let url = 'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0';         
            if(enablePager === 'next') url = pagerNext;    
            else if(enablePager === 'prev') url = pagerPrev;            
            const api = new XMLHttpRequest();
            api.open('GET', url, true);
            api.send();

            api.onreadystatechange = function () {
                if(this.status === 200 && this.readyState === 4) {
                    let data = JSON.parse(this.responseText);
                    setResults(data);
                    setPagerNext(data.next);
                    setPagerPrev(data.previous);
                    if(enablePager === 'next' || enablePager === 'prev') setEnablePager('none');
                }
            }
        }
        update();
    }, [enablePager, pagerNext, pagerPrev]);

    return results !== undefined ? 
        <Fragment>
            <div className="container brand">
                <h1>PokeChallenge!</h1>
            </div>
            <PokemonInList items={results} onClick={skills} full={full} />
            {full === 0 &&
                <div className="button-container">
                    {pagerPrev && <button className="square_btn" onClick={() => getPage('prev')}>Anteriores</button>}
                    {pagerNext && <button className="square_btn" onClick={() => getPage('next')}>Siguientes</button>}
                </div>
            }
        </Fragment>
        : <div style={{
            'width': 200, 
            'height': 30, 
            'marginTop': -15, 
            'marginLeft': -100, 
            'left': '50%', 
            'top': '50%',
            'position': 'fixed',
            'color': 'orange'
            }}>Intenta más tarde</div>
}

export default ListPokemones;