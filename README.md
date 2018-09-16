# ABout React

## Sobre la estructura del proyecto

- Las carpetas `components` contienen solo componentes `PUROS` o `FUNCIONALES`
- Las carpetas `containers` contienen solo componentes `SMART` o (Con estados)

home - entry point para webpack

	Home - página / (container|smart)
		-> <!-- Layout - UI -->
			-> Related - UI
			-> Categories - UI
				-> Category - UI
					- Playlist - UI
						- Media - UI / Pure
			->	Search - (container|smart)
				-> <!-- Layout UI -->
					-> Input - UI
			-> Model - (container|smart)
				-> <!-- Layout - UI -->
					...

## Ciclo de vida

### Montado

```js
constructor(){
	 // Método llamado antes de que el componente sea montado (el componente aún no se ve)
	 // Podemos iniciar el estado
	 // Enlazar bind de eventos
	 // Es el primer método que se llama al instanciar un componente.
	}
```

```js
componentWillMount(){
	// Se ejecuta antes de montar el componente
	// Se podría usar para hacer un setState()
	// No hagas llamados a un API o suscripción de eventos
	// Método llamado inmediatamente antes de que el componente se vaya montar, (el componente aún no se ve)
	}
```

```js
  render(){
	// Contiene todos los elementos a renderizar
	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	// Contiene todos los elementso a renderizar (estructura del componente)
	}
```

```js
  componentDidMount(){
	// Solo se lanza una vez
	// Enlazar (bind) de eventos
	// Ideal para llamar a una API, hacer un setInterval, etc
	// Es el primer método que se llama al instanciar un componente.
	// Método llamado luego de montarse el componente (el compenente ya está en pantalla)
	}
```
### Actualización

```js
  componentWillReceiveProps(){
	//Es llamado cuando el componente recibe nuevas propiedades.
	// Sirve para actualizar el estado con base a las nuevas propiedades
  }
```

```js
shouldComponentUpdate(){
	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
```

```js
componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
  }
```

```js
componentDidUpdate(){
	//Método llamado luego del re-render
  }
```

### Desmontado

```js
componentWillUnmount(){
	//Método llamado antes de desmontar el componente
	}
```

### Manejo de errores

```js
componentDidCatch(){
	// Si ocurre algún error, lo capturo desde acá:
	// Si ocurre algún error al renderizar el componente este método es invocado
	// El manejo de errores solo ocurre en compoenetes hijos.
  }
```


## Tipos de componentes

### Component

```js
import React, {Component} from 'react';
import './media.css';

class Media extends React.Component {

	// Todos los métodos indicados en el apartado anteriormente

	state = {
    name: 'value'
	}
	
	render() {
    const styles = {
      ...
		};

		return (
			<div className="Media" onClick={this.handleClick}>
				...
				{this.props.myProperty}
				...
      </div>
		)
		
	}
}
```
### Pure Component

Igual que el anterior, con dos particularidades:
- Extiende de la clase PureComponent
- La función `shouldComponentUpdate` se ejecuta de forma implícita, por lo que está optimizado para cuando los componentes realizan muchas recargas de información, así no tenemos que manejarlas explícitamente en el método shouldComponentUpdate.

### Functional Component

- No tiene ciclo de vida
```js
function handleClick(props) {
	console.log('bla bla bla');
}
function MyComponent(props) {
	return (
		<div onClick={handleClick}>
			{}
		</div>
	)
}
```

#### Otro enfoque (_RECOMENDADO_)
```js
function handleClick(props) {
	console.log('bla bla bla');
}
function MyComponent(props) {
	return (
		<div onClick={handleClick}>
			{}
		</div>
	)
}
```

## Smart vs Dump (Component)

#### Otros nombres por los que se les conoce:

Smart | Dump
|---------:|----------------:|
Statefull | Pure
Fat | Skinny
Container | Presentational

#### ¿Por qué esta diferenciación?

- Separación de responsabilidades.
- Mejora la capacidad de reutilizar componentes.

#### MVC

- *Presentationals* o Dump o *de UI*: 
	- View (contienen los estilos y solo muestran info) 
	- 99% estarán contenidos en Containers
	- 99% NO tendrán estado
	- Permiten composición con {props.children}
	- No dependen del resto de la aplicación
	- 99% escritos como componentes funcionales
	- Pueden contener Smart u otros de UI
	- Reciben datos y callbacks solo como propiedades

- *Containers* o Smart:
	- Controller (Manejan la info e indican a los dump qué deben mostrar).
	- Proveedor de datos a otros Containers o componentes de UI.
	- Normalmente tienen estado.
	- Llaman a acciones (`*_REDUX_*`)
	- Generados por (`*_Higher Order Components_*`)
	- Proveeen de callbacks a la UI

## Portales

`Portales` es la manera en la que podemos renderizar componentes fuera del contenedor principal de la aplicación.

```js
<divid="App"></div>
```

El caso de uso mas común son las ventanas modal.

Para crear un portal, se debe importar el metodo createPortal de react-dom:

```js
import { createPortal} from'react-dom';
```
El metodo createPortal() recibe dos parametros, al igual que con render es Lo que se va a renderizar y donde se va a renderizar:

```js
classModalContainerextendsComponent{
  render() {
    return (
      createPortal(<Component />, document.getElementById('component-container'))
    )
  }
}
```