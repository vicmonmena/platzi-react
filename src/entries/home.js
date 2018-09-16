// ESTE ES EL COMPONENTE ENCAREGADO DE RENDERIZAR LA HOME (Ver Readme), QUE ES UN COMPONENTE SMART
import React from 'react'
// import ReactDOM from 'react-do;m'
// Más resumido, solo importamos el método de ReactDOM que estamos usando en lugar de todo ReactDOM
import { render } from 'react-dom';
// Por defecto toma extensión js no es necesario poner media.js
// Usar nombre de componente en Mayus (Media) así Reacvt sabe que es un componente
import Home from './../pages/containers/home'
// import Playlist from './src/playlist/components/playlist';
// console.log("Hello react!")
const homeContainer = document.getElementById('home-container');
// const helloReact = <h1>Hello React! Wellcome!</h1>;
// ReactDOM.render(qué voy a renderizar (elemento o componente de react), dónde lo haré)
//ReactDOM.render(helloReact,app)
import data from './../api.json';

render(<Home data={data}/>, homeContainer)