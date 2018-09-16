import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from './../../icons/components/play';
import Volume from './../../icons/components/volume';
import Pause from './../../icons/components/pause';
import FullScreen from './../../icons/components/full-screen';
/**
 * Creamos Playlist como componente funcional. No tiene ciclo de vida pero REACT va a contnuar renderizandolo.
 * 
 * @param {any} props 
 * @returns 
 */
function Playlist(props) {
  
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
    <div>
      <Play color="red" width="50" heigt="50"/>
      <Pause color="yellow" width="50" heigt="50"/>
      <Volume color="blue" width="20" heigt="20"/>
      <FullScreen color="green" width="100" heigt="100"/>
    </div>
      {
        playlist.map((item) => {
          // key debe ser único
          //return <Media title={item.title} author={item.author} image ={item.image} key={item.id} />
          // Como alternativa usamos el split operator (ecma script 6) -> {...item} para pasar todo el bjeto en lugar de propiedad a propiedad
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )

}

export default Playlist;