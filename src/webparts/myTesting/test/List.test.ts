
import { configure, mount, ReactWrapper, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import List, { IData } from '../components/List';
import * as React from 'react';

configure({ adapter: new Adapter() });

describe('Probando mi componente <List>', () => {


    const fruits: IData[] = [
        { name: 'fresa', id: 1 },
        { name: 'naranja', id: 2 },
        { name: 'manzana', id: 3 }
    ]
    let wrapper;

    //BeforeEach(): Cada vez que se vaya a ejecutar un test se ejecuta esta función
    beforeEach(() => {
        //Creamos una instancia nueva del componente cada vez que se ejecuta un test()
        wrapper = shallow(React.createElement(
            List,
            {
                titulo: 'Mis frutas',
                list: fruits
            }
        ));
        //Tambien podría ser Mount (este es en profundidad, todo el arbol de componentes)
    })

    test('Validar nodos', () => {
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
        expect(wrapper.find('li').length).toBe(3);
        //Actualizar las props
        wrapper.setProps({
            list: [{ name: 'kiwi', id: 5 }]
        })
        expect(wrapper.find('li').length).toBe(1);

        wrapper.setProps({
            titulo: 'Super Frutas'
        })
        expect(wrapper.find('.big').text()).toBe('Super Frutas');
    })

})