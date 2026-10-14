// src/App.jsx
import Navbar from './assets/components/Navbar/Navbar';
import AlumnoCard from './assets/components/AlumnoCard/AlumnoCard';
import Contador from './assets/components/Contador/Contador';

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
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Ana Torres"
            carrera="Contabilidad"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Luis Ramírez"
            carrera="Electricidad Industrial"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Sofía Gómez"
            carrera="Marketing Digital"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Javier López"
            carrera="Mecánica Automotriz"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Camila Ruiz"
            carrera="Hotelería"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Diego Sánchez"
            carrera="Seguridad Industrial"
            estadoInicial="Matriculado"
          />

          <Contador 
          
          />

        </div>
      </div>
    </>
  );
}

export default App;
