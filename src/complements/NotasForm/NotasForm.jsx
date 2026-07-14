import { useState } from 'react';
import './NotasForm.css';
//Fusa state local para los inputs, no para la lista de notas. Al enviar, llama a la función onAgregar recibida por props.

function NotasForm({ onAgregar }) {
  const [texto, setTexto] = useState('');
  const [prioridad, setPrioridad] = useState('Medio');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return; // para evitar notas vacías

    onAgregar(texto, prioridad); // sube el dato al padre (NotasApp)

    // limpiar el formulario
    setTexto('');
    setPrioridad('Medio');
  };

  return (
    <form className="notas-form" onSubmit={manejarSubmit}>
      <input
        type="text"
        className="notas-form__input"
        placeholder="Escribe una nueva nota..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <select
        className="notas-form__select"
        value={prioridad}
        onChange={(e) => setPrioridad(e.target.value)}
      >
        <option value="Alto">Alto</option>
        <option value="Medio">Medio</option>
        <option value="Bajo">Bajo</option>
      </select>

      <button type="submit" className="notas-form__boton">
        Agregar
      </button>
    </form>
  );
}

export default NotasForm;