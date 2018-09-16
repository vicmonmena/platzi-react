import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends React.Component {


  state = {
    author: '@yeyodebote'
  }
  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    };

    // También podemos hacer destructuring: const { title, author, image } = this.props;
    // HTML que va a tener nuestro componente
    return (
      // <div style="border: 1px solid red"> --> Estilo en linea SIN REACT
      // <div style={styles.container}>
      // <div class="Media"> --> class ya se usa al crear un componente => usamos className
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

// Fija los tipos de las propiedades pasadas al componente
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])

}

export default Media;