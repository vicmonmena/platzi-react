import React, {Component} from 'react';
import './media.css';

class Media extends React.Component {

  /**
   * Función que tienen todas las clases JS
   * @memberof Media
   */
  // constructor(props) {
  //   En los constructores solo se recomienda realizar los bind o el setStatus inicial
  //   super(props);
  //   // Licamos función con mi clase para poder llamar dentro a propiedads de la clase
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(event) {
  //   console.log(this.props.title);
  // }
  // Alternativa a de licar la función al contexto del padre (la clase) => utilizando Arrow Function (=>):
  
  // ecma script 6 permite hacer el biding de funciones de esta forma
  // Esto es posible por lo que hemos puesto en webpack config: 
  // presets: ['es2015', 'react', 'stage-2'],
  // es2015 es ecma script 6, y stage-2
  handleClick = (event) => {
    console.log(this.props.title);
    // Modificamos el valor del autor con el método setState heredado de Component
    this.setState({
      author: '@vandivia'
    });
  }

  // Las propiedades son INMUTABLES, no pueden cambiar, pero tienen estados que SI que pueden cambiar. 
  // Para esto usamos el constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     author: props.author
  //   }
  // }
  // Pero lo podemos hacer como ECMAScript 7
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
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.image}
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

export default Media;