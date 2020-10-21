
import { configure, mount, ReactWrapper, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import List, { IData } from '../components/List';
import * as React from 'react';

configure({ adapter: new Adapter() });

describe('Probando mi componente <List>', () => {

    test('Validar nodos', () => {

        const fruits: IData[] = [
            {
                name: 'fresa',
                id: 1
            },
            {
                name: 'naranja',
                id: 2
            },
            {
                name: 'manzana',
                id: 3
            }
        ]
        const wrapper = shallow(React.createElement(
            List,
            {
                titulo: 'Mis frutas',
                list: fruits
            }
        ));

        //Tambien podría ser Mount (este es en profundidad, todo el arbol de componentes)

        //Validar si existe un nodo
        expect(wrapper.find('h1').exists()).toBe(true);

        //Validar si tiene clase css
        expect(wrapper.find('h1').hasClass('big')).toBe(true);

        //Validar cantidad de elementos hijos
        expect(wrapper.find('ul').children().length).toBe(3);

        //Validar contenido de nodo
        expect(wrapper.find('li').first().text()).toBe('fresa'); //text, que no html
    })


    test('Validar actualización de props', () => {

        const fruits: IData[] = [
            {
                name: 'fresa',
                id: 1
            },
            {
                name: 'naranja',
                id: 2
            },
            {
                name: 'manzana',
                id: 3
            }
        ]
        const wrapper = shallow(React.createElement(
            List,
            {
                titulo: 'Mis frutas',
                list: fruits
            }
        ));

        expect(wrapper.find('li').length).toBe(3);      
        //Actualizar las props
        wrapper.setProps({
            list: [{name: 'kiwi', id: 5}]
        })
        expect(wrapper.find('li').length).toBe(1);

        wrapper.setProps({
            titulo: 'Super Frutas'
        })
        expect(wrapper.find('.big').text()).toBe('Super Frutas');

    })

})