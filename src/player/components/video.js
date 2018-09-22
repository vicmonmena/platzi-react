import React, { Component } from 'react';
import './video.css';

class Video extends Component {

  // Implementamos este método para cuando se reciben nuevas propiedades poder gestionar el estado del video
  togglePlay = () => (
    // Qué pausar o poner a play¿? => creamos ref a component video.
    // play y pause son métodos nativos de video
    this.props.pause ? this.video.play() : this.video.pause()
  )

  setRef = element => (
    this.video = element
  )
  componentWillReceiveProps(nextProps) {
    if(nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  render() {
    return (
      <div className="Video">
        <video 
          controls
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}/>
      </div>
    )
  }
}

export default Video;
