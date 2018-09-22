import React from 'react';
import './timer.css';

/**
 * Función para formatears un número para que siempre tenga 2 cifras
 * @param {*} number 
 */
const leftPad = number => (
  number < 10 ? `0${number}` : number
)
/**
 * Función para formatear los tiempos a segundos : minutos
 * @param {*} srcTime - tiempo en milisegundos
 */
const formatTime = srcTime => {
  const minutes = parseInt(srcTime / 60, 10)
  const seconds = parseInt(srcTime % 60, 10)
  return `${leftPad(minutes)}:${leftPad(seconds)}`
}

const Timer = (props) => (
  <div className="Timer">
    <p>
      <span>{(props.currentTime) ? formatTime(props.currentTime): '00:00'} / {formatTime(props.duration)}</span>
    </p>
  </div>
)

export default Timer;