import React, { Fragment } from 'react';
import './DetailLists.css';

const DetailItems = ({items, nameItems, title, divide}) => {  
    return (
        <Fragment>
            <h4>{title}</h4>
            <ul>
                {divide === 10 ? <li>{items}</li> : Object.keys(items).map(k => <li key={k}>{items[k][nameItems].name}</li>)}
            </ul>
        </Fragment>
    ); 
}
export default DetailItems;