import * as React from 'react';

export interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {

    return(
        <section>
            <h1>
                Introducción a Unit test
            </h1>
            <div className='container'>
                <span title='MiSpan'></span>
                <span hidden={false}></span>
            </div>
            <input type='text'></input>
            <p>Párrafo afuera</p>
            <div>
                <p>Primer párrafo</p>
            </div>
        </section>
    )
}

export default App;