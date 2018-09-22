import React from 'react';
import VolumeIcon from './../../icons/components/volume';
import './volume.css';

const Volume = props => (
  <div className="Volume">
    <button >
      <VolumeIcon size={20} color="white"/>
      <div className="Volume-range">
        <input 
          type="range" 
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}/>
      </div>
    </button>
  </div>
)

export default Volume;