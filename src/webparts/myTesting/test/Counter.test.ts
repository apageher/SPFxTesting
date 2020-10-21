
import { configure, mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Counter from '../components/Counter';
import * as React from 'react';

configure({ adapter: new Adapter() });

describe('Probando mi componente <Counter>', () => {

    let wrapper: ShallowWrapper = shallow(React.createElement(Counter));
    
    //BeforeEach(): Cada vez que se vaya a ejecutar un test se ejecuta esta función
    beforeEach(() => {
        //Creamos una instancia nueva del componente cada vez que se ejecuta un test()
        wrapper = shallow(React.createElement(Counter));
        //Tambien podría ser Mount (este es en profundidad, todo el arbol de componentes)
        //Shallow renderizado superficial
    })


    test('Validar funcionamiento de botones', () => {
        //Simular el click de un boton
        wrapper.find('button').first().simulate('click');
        expect(wrapper.find('h1').text()).toBe('1');
        wrapper.find('button').last().simulate('click');
        wrapper.find('button').last().simulate('click');
        wrapper.find('button').last().simulate('click');
        expect(wrapper.find('h1').text()).toBe('-2');
    })

})