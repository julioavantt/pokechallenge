import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import ListPokemones from '../../ListPokemones/ListPokemones';

/* Acá no pude, aprendo rápido pero no lo logré en esta ocasión. Entendí bastante de los 
testeos pero no logro obtener el segundo render que es el que trae los datos. Se que debe ser una pavada. En fin...*/

describe('ListPokemones', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ListPokemones />);
    });

    it('renders after', () => {
        expect(wrapper.find('h1').text()).toEqual('PokeChallenge!');
    });
});


