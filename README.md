# TechStore - Trabajando con Props

Aplicación React para almacenar y modificar una lista de notas. Cada nota tiene un texto y un nivel de prioridad (por ejemplo, “Alto”, “Medio”, “Bajo”). Los usuarios pueden agregar nuevas notas, eliminar notas y filtrar notas por nivel de prioridad.

## Objetivos del proyecto

- Crear un componente principal para mantener el estado del array de notas.
- Crear un componente de formulario para agregar nuevas notas y seleccionar el nivel de prioridad. Al enviar el formulario, se agrega la nueva nota al array de notas en el estado del componente principal.
- Crear un componente de lista para mostrar las notas.
- Crear un componente de filtro para filtrar las notas por prioridad.
- Usar `lifted state` para gestionar el array de notas en el componente principal.
- Renderiza la lista de notas usando el método map, mostrando el texto y el nivel de prioridad.
- Agregar un botón de eliminar a cada nota. Al hacer click en el botón de eliminar, se elimina la nota del estado.
- Comprender cómo se estructuran y utilizan las props, state, lifted state, jerarquía de componentes, map y filter. en una aplicación React.
- Aplicar buenas prácticas en la reutilización de componentes.


## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES6+)
- CSS3

## Características

- Gestión dinámica de notas: Permite agregar nuevas notas de forma inmediata y eliminarlas mediante un estado centralizado (Estado Elevado).
- Diseño Moderno ("Dark Mode"): Interfaz optimizada con fondo oscuro para reducir la fatiga visual y resaltar el contenido.
- Filtrado en tiempo real: Capacidad de filtrar las notas según su nivel de prioridad sin necesidad de recargar la página ni mutar la lista original.
- Arquitectura modular: Código organizado bajo estándares profesionales con separación estricta de lógica (JSX) y estilos (CSS).
- Interactividad: Efectos visuales de transición y hover en las notas para una experiencia de usuario fluida y profesional.
- Responsividad: Diseño adaptable a diferentes tamaños de pantalla gracias al uso de Flexbox y estructuras CSS bien definidas.


## Instalación y ejecución

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/tu-usuario/tarjeta-productos.git
cd tarjeta-productos
npm install
```

Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` para ver la aplicación.

## Estructura del proyecto

```
src/
└── components/
    ├── NotasApp/
    │   ├── NotasApp.jsx
    │   └── NotasApp.css
    ├── NotasForm/
    │   ├── NotasForm.jsx
    │   └── NotasForm.css
    ├── NotasList/
    │   ├── NotasList.jsx
    │   └── NotasList.css
    └── NotasFilter/
        ├── NotasFilter.jsx
        └── NotasFilter.css
    ├── App.jsx
    ├── App.css
    ├── main.jsx
├── .gitignore
├── package.json
└── README.md

```

## Autor

Karen Herrera

## Licencia

Este proyecto fue creado con fines educativos.
