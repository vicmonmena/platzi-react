import React, { Component } from 'react';
import VideoPlayerLayout from './../components/video-player-layout'
import Video from './../components/video';
import Title from './../components/title';
import PlayPause from './../components/play-pause';
import Timer from './../components/timer';
import Controls from '../components/video-player-controls';
import { formatTime } from './../../utils/commons';
import ProgressBar from './../components/progressbar';

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: formatTime(0),
    currentTime: formatTime(0)
  }

  togglePlay = event => (
    this.setState({
      pause: !this.state.pause,
    })
  )

  togglePause = event => (
    this.setState({
      pause: true,
    })
  )

  handleLoadedMetadada = event => {
    this.video = event.target;
    // Esto nos permite mostrar la duración en la UI
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.video = event.target;
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  
  /**
   * Implementamos este método para gestionar el estado del componente Video una vez está montado
   */
  componentDidMount() {
    this.setState({
      pause: !this.props.pause // si pause = true => se reproduce el video y se visualiza el botón pause para poder pararlo
    });
  }
  
  handleProgressBarChange = event => {
    this.video.currentTime = event.target.value;
  }
  
  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Este es nuestro video guapo!"/>
        <Controls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.togglePlay} 
          />
          <Timer 
            duration = {formatTime(this.state.duration)} 
            currentTime = {(this.state.currentTime) ? formatTime(this.state.currentTime): '00:00'}
          />
          <ProgressBar 
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressBarChange={this.handleProgressBarChange}
          />
        </Controls>
        <Video
          autoPlay={this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadada={this.handleLoadedMetadada}
          handleTimeUpdate={this.handleTimeUpdate}
          />
      </VideoPlayerLayout>
    )
  }
}


export default VideoPlayer;