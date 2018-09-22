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

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Este es nuestro video guapo!"/>
        <PlayPause 
          pause={this.state.pause}
          handleClick={this.togglePlay} />
        <Video
          autoPlay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"/>
      </VideoPlayerLayout>
    )
  }
}


export default VideoPlayer;