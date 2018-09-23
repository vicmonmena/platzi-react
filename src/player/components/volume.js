import React from 'react';
import VolumeIcon from './../../icons/components/volume';
import './volume.css';

const Volume = props => (
  <div className="Volume">
    <button onClick={props.handleVolumeClick}>
      <VolumeIcon size={20} color="white"/>
    </button>
    <div className="Volume-range">
      <input 
        type="range" 
        min={0}
        max={1}
        step={.05}
        onChange={props.handleVolumeChange}
        value={props.value}
      />
    </div>
  </div>
)

export default Volume;