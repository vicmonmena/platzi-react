import React from 'react';

function Icon(props) {
  const {color, width, height, children} = props;
  return(
    <div>
      <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        fill={color}
        width={width} 
        height={height} 
        viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

export default Icon;