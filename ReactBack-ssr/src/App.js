import React from 'react';
import Titulo from './Titulo';
import Sinopse from './Sinopse';
import Abertura from './Abertura';

function App() {
      return (
            <div>
            <Titulo titulo="Os Cavaleiros do Zodíacos: A saga Hades" />
            <Sinopse/>
            <Abertura musica="Pelo Mundo"/>
            </div>
    );
}
export default App;