import React, { Component } from 'react';
import Search from './../components/search';

class SearchContainer extends Component {

  state = {
    value: 'Mi valor por defecto'
  }
  handleSubmit = event => {
    event.preventDefault(); // Como se hacía con JQUery, evita que al página recargue
    console.log('submited value = ' + this.input.value);
  }

  setInputRef = element => {
    this.input = element;
  }

  handleChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-') // o bien this.input.value
    })
  }

  render() {
    return(
      <Search 
        setRef={this.setInputRef}
        placeholder={this.props.placeholder} 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}/>
    )
  }
}

export default SearchContainer;