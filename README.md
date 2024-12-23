# Pokeapp

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

El desarrollo de esta aplicación se organizó en tres vistas principales:

- **Home**: La vista principal donde el usuario tiene la opción de "Comenzar esta aventura".
- **ListView**: Una lista de pokémones principales, con un buscador y un navbar en la parte inferior para facilitar la navegación entre las diferentes pantallas.
- **FavoritesView**: En esta sección, los usuarios pueden guardar y consultar sus pokemones favoritos.

### Gestión de Estado

Para gestionar la información de la aplicación a nivel global, utilizamos Pinia. Se creó un store principal, `pokemonStore`, donde vamos a almacenar, acceder y modificar los datos requeridos a lo largo de las distintas secciones.

Además, se implementó un store para las alertas y avisos, con una única instancia que se ubica en la raíz de la aplicación (`App.vue`), y permite mostrar notificaciones, mensajes de éxito o de error de manera simple.

Luego de una investigación se concluye que la API utilizada (PokeAPI) no cuenta con un endpoint específico de búsqueda.
Issues:

- https://github.com/PokeAPI/pokeapi/issues/383
- https://github.com/PokeAPI/pokeapi/issues/474

Debido a esto, se deben traer todos los pokemones de una sola vez para que el usuario los tenga disponibles para la búsqueda, funcionalidad que se implementa en el store.
Para optimizar la experiencia de usuario y evitar renderizar una larga lista, el componente encargado de mostrar los pokemones (`PokemonList`), utiliza una carga progresiva:

- Inicialmente, se muestran 20 pokemones.
- A medida que el usuario hace scroll, se van renderizando más dinamicamente.

La lista completa de pokémones se carga solo una vez al inicio y se mantiene en el store hasta que el usuario recargue la página.

Los favoritos se almacenan en el LocalStorage, asegurando que estos persistan incluso después de cerrar la aplicación. Los usuarios solo perderán sus favoritos si deciden borrarlos manualmente.

Para gestionar el texto de la aplicación utilizamos i18n con la disponibilidad de la aplicación en, a primera instancia, inglés y español. Si bien esta primera versión no permite cambiar entre idiomas, esta funcionalidad estará disponible en futuras actualizaciones.

Los llamados a los endpoints se introducen desde `/services` los cuales son consumidos desde el store.
