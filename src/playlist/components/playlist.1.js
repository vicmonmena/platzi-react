import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data);
    return (
      <div className="Playlist">
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
}

export default Playlist;