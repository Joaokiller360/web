import { Testimonio1 } from './testimonio.jsx'; //Ruta al archivo testimonio.jsx
import './testimonio/compotestimonio1.css'; //Ruta al archivo compotestimonio.css
import testimoniosData from '../../json/testimonio.json';  // Ruta al archivo testimonio.json
import { React } from "react";

export function CampoTestimonio1() {
  return (
    <div className='App'>
      <h1 className='h1T'>Testimonios</h1>
      <div className='contenedor-principal'>
        {testimoniosData.testimonios.map((testimonio, index) => (
          <Testimonio1
            key={index}
            id={testimonio.id}
            nombre={testimonio.nombre}
            años={testimonio.años}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            imagen={testimonio.imagen}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}
