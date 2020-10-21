
import { configure, mount, ReactWrapper, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';
import * as React from 'react';

configure({adapter: new Adapter()});

describe('Probando mi componente <App>', () => {

    test('Probando renderizado de componente', () => {
        const wrapper = shallow(React.createElement(App)); //Tambien podría ser Mount (este es en profundidad, todo el arbol de componentes)
        //console.log(wrapper.html()); //Pintar el html que renderiza
        //expect(wrapper.html()).toBe('<div><h1>Introducción a Unit test</h1></div>');
        expect(wrapper.find('h1').html()).toBe('<h1>Introducción a Unit test</h1>');
        expect(wrapper.find('h1')).toHaveLength(1);

        //Con selector CSS
        //console.log(wrapper.find('.container').html());
        //console.log(wrapper.find('div > p').html());

        //A través de las propiedades o atributos HTML
        //console.log(wrapper.find('[title="MiSpan"]').html());
    })
})
