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
  const minutes = (srcTime) ? parseInt(srcTime / 60, 10) : '00'
  const seconds = (srcTime) ? parseInt(srcTime % 60, 10) : '00'
  return `${leftPad(minutes)}:${leftPad(seconds)}`
}

export {
  formatTime
}