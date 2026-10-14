// src/App.jsx
import Navbar from './assets/components/Navbar/Navbar';
import AlumnoCard from './assets/components/AlumnoCard/AlumnoCard';

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container mt-4">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole Props diferentes */}
          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Ana Torres"
            carrera="Contabilidad"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Luis Ramírez"
            carrera="Electricidad Industrial"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Sofía Gómez"
            carrera="Marketing Digital"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Javier López"
            carrera="Mecánica Automotriz"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Camila Ruiz"
            carrera="Hotelería"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Diego Sánchez"
            carrera="Seguridad Industrial"
            estado="Matriculado"
          />
        </div>
      </div>
    </>
  );
}

export default App;
