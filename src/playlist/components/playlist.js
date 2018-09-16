import React from 'react';
import Media from './media.js';
import './playlist.css';
/**
 * Creamos Playlist como componente funcional. No tiene ciclo de vida pero REACT va a contnuar renderizandolo.
 * 
 * @param {any} props 
 * @returns 
 */
function Playlist(props) {
  
  console.log(props.data);
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          // key debe ser único
          //return <Media title={item.title} author={item.author} image ={item.image} key={item.id} />
          // Como alternativa usamos el split operator (ecma script 6) -> {...item} para pasar todo el bjeto en lugar de propiedad a propiedad
          return (
            <Media 
              {...item} 
              key={item.id} 
              handleClick={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )

}

export default Playlist;