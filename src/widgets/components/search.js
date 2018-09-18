import React from 'react';
import './search.css';

/**
 * 
 *  <input 
 *     ref={props.setRef} <----- Es la forma RECOMENDADA de recoger el valor de un input para procesarlo 
 *          (NO DEBEMOS PONER STRINGS DIRECTAMENTE NI 
 *          USAR ATRIBUTO ID Y LUEGO RECOGER CON document.getElementByID(...))
 *     type="text" 
 *     placeholder={props.placeholder}
 * className="Search-input"/>
 * @param 
 * } props 
 */

const Search = (props) => (
  <form onSubmit={props.handleSubmit} className="Search">
    <input 
      ref={props.setRef}
      type="text" 
      placeholder={props.placeholder}
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}/>
  </form>
);

export default Search;