import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

  // CICLO DE VIDA

  /*
   # Monado del componente
   1. constructor -> solo se recomienda realizar los bind o el setStatus inicial
   2. componentWillMount -> solo se recomienta hacer setState, no hacer llamads a APIs
   3. render -> Contiene jsx en el return, puedes calcular propiedades nCompleto = name + lastName
   4. componentDidMount -> El componente ya está en pantalla (solo se lanza una vez), Podemos usar las propiedades del navegador (document.get...)
   5. componentWillReceiveProps -> Sirve para actualizar el componente con nueva información
   6. shouldComponentUpdate -> (usado para optimización rendimiento)  ¿Qué pasa si las props que ya tenía van a ser las mismas que voy a tener? => return false
   7. componentWillUpdate -> (usado para optimización rendimiento) llama a re-render
   8. render -> re-render
   9. componetDidUpdate -> 
   # Desmontado del componente
   10. componenWillUnmount
   # Manejo de errores (disponible desde React 16)
   11. componentDidCatch -> No previene errores, solo maneja los que han ocurrido. El manejo de errores solo ocurre en componentes hijo
  */
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