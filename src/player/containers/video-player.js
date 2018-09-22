import React, { Component } from 'react';
import VideoPlayerLayout from './../components/video-player-layout'
import Video from './../components/video';
import Title from './../components/title';
import PlayPause from './../components/play-pause';

class VideoPlayer extends Component {

  state = {
    pause: true,
    play: false
  }

  togglePlay = (event) => (
    this.setState({
      pause: !this.state.pause,
    })
  )

  togglePause = (event) => (
    this.setState({
      pause: true,
    })
  )

  /**
   * Implementamos este método para gestionar el estado del componente Video una vez está montado
   */
  componentDidMount() {
    this.setState({
      pause: !this.props.pause // si pause = true => se reproduce el video y se visualiza el botón pause para poder pararlo
    });
  }
  
  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Este es nuestro video guapo!"/>
        <PlayPause 
          pause={this.state.pause}
          handleClick={this.togglePlay} />
        <Video
          autoPlay={this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"/>
      </VideoPlayerLayout>
    )
  }
}


export default VideoPlayer;