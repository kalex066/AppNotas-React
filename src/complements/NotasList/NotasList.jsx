import './NotasList.css';
//Recibe el array ya filtrado y lo recorre con map para renderizar cada tarjeta. El botón "Eliminar" llama a onEliminar(nota.id)

// Mapeo de color según prioridad
const coloresPrioridad = {
  Alto: '#8B5CF6',
  Medio: '#2DD4BF',
  Bajo: '#EC4899',
};

function NotasList({ notas, onEliminar }) {
  if (notas.length === 0) {
    return <p className="notas-list__vacio">No hay notas para mostrar.</p>;
  }

  return (
    <div className="notas-list">
      {notas.map((nota) => (
        <div className="notas-list__card" key={nota.id}>
          <div
            className="notas-list__badge"
            style={{ backgroundColor: coloresPrioridad[nota.prioridad] }}
          >
            {nota.prioridad}
          </div>

          <p className="notas-list__texto">{nota.texto}</p>

          <button
            className="notas-list__eliminar"
            onClick={() => onEliminar(nota.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default NotasList;