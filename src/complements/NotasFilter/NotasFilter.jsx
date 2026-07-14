import './NotasFilter.css';
//recibe filtro (valor actual) y onFiltroChange (función) por props, y solo notifica al padre cuando el usuario cambia la opción

const coloresFiltro = {
    Todas: '#3B82F6',
    Alto: '#8B5CF6',
    Medio: '#2DD4BF',
    Bajo: '#EC4899',
};

function NotasFilter({ filtro, onFiltroChange }) {
    const opciones = ['Todas', 'Alto', 'Medio', 'Bajo'];

    return (
        <div className="notas-filter">
        {opciones.map((opcion) => {
            const activo = filtro === opcion;
            const color = coloresFiltro[opcion];

            return (
            <button
                key={opcion}
                className={`notas-filter__boton ${
                activo ? 'notas-filter__boton--activo' : ''
                }`}
                style={{
                '--color-filtro': color,
                ...(activo && {
                    backgroundColor: color,
                    borderColor: color,
                }),
                }}
                onClick={() => onFiltroChange(opcion)}
            >
                {opcion}
            </button>
            );
        })}
        </div>
    );
}

export default NotasFilter;

