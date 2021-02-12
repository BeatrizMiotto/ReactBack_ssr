import React from 'react';

//Estou renderizando um link que manda para youtube

export default props => {
    return <h3><a href="https://www.youtube.com/watch?v=fLm9uV08bIo&ab_channel=NeganMan%C3%ADaco">Link da abertura: {props.musica}!</a></h3>;

};