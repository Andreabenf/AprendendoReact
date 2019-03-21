import React from 'react';
/* Na sua forma mais simples, um componente eh uma 
    funcao que retorna um .jsx*/
// props eh um objeto que recebemos como argumento

const pessoa = (props) => {
    return( 
        <div>
            <p>{props.children}</p>
            <p>Eu sou uma pessoa muito {props.carac} e tenho {props.age} anos</p>
        </div>
    )
}

export default pessoa;