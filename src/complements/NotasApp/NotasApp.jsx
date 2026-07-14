import { useState } from 'react';
import NotasForm from '../NotasForm/NotasForm';
import NotasFilter from '../NotasFilter/NotasFilter';
import NotasList from '../NotasList/NotasList';
import './NotasApp.css';

//guarda el array de notas en useState, guarda el filtro seleccionado, y define las funciones que agregan, eliminan y filtran 
// (que se pasan como props a los hijos)


function NotasApp() {
  // array de notas
  const [notas, setNotas] = useState([
    { id: 1, texto: 'Terminar el informe', prioridad: 'Alto' },
    { id: 2, texto: 'Comprar café', prioridad: 'Bajo' },
    { id: 3, texto: 'Revisar correo', prioridad: 'Medio' },
  ]);

  // filtro ("Todas", "Alto", "Medio", "Bajo")
  const [filtro, setFiltro] = useState('Todas');

  // Agregar nota SIN mutar el array anterior
  const agregarNota = (texto, prioridad) => {
    const nuevaNota = {
      id: Date.now(),
      texto,
      prioridad,
    };
    setNotas((notasActuales) => [...notasActuales, nuevaNota]);
  };

  // Eliminar nota usando filter
  const eliminarNota = (id) => {
    setNotas((notasActuales) => notasActuales.filter((nota) => nota.id !== id));
  };

  // Filtrado con map/filter
  const notasFiltradas =
    filtro === 'Todas'
      ? notas
      : notas.filter((nota) => nota.prioridad === filtro);

  return (
    <div className="notas-app">
      <h1 className="notas-app__titulo">Mis Notas</h1>

      <NotasForm onAgregar={agregarNota} />

      <NotasFilter filtro={filtro} onFiltroChange={setFiltro} />

      <NotasList notas={notasFiltradas} onEliminar={eliminarNota} />
    </div>
  );
}

export default NotasApp;