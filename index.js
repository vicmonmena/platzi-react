// FICHERO DEPRECADO, AHORA USAMOS src/entries/home.js
import React from 'react'
// import ReactDOM from 'react-do;m'
// Más resumido, solo importamos el método de ReactDOM que estamos usando en lugar de todo ReactDOM
import {render} from 'react-dom';
// Por defecto toma extensión js no es necesario poner media.js
// Usar nombre de componente en Mayus (Media) así Reacvt sabe que es un componente
import data from './src/playlist/components/api.json'
import Playlist from './src/playlist/components/playlist';
// console.log("Hello react!")
const app = document.getElementById('app');
// const helloReact = <h1>Hello React! Wellcome!</h1>;
// ReactDOM.render(qué voy a renderizar (elemento o componente de react), dónde lo haré)
//ReactDOM.render(helloReact,app)

render(<Playlist data={data}/>,app)