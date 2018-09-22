import React from 'react';
import './play-pause.css'
import PlayIcon from './../../icons/components/play';
import PauseIcon from './../../icons/components/pause';

const PlayPause = (props) => (
  <div className="PlayPause">
    { props.pause ?
      <button
        onClick={props.handleClick}>
        <PlayIcon size={20} color="white"/>
      </button>
      :
      <button
        onClick={props.handleClick}>
        <PauseIcon size={20} color="grey"/>
      </button>
    }
  </div>
)

export default PlayPause;