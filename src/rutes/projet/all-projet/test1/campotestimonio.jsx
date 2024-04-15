import { Testimonio1 } from './testimonio.jsx'; //Ruta al archivo testimonio.jsx
import testimoniosData from '../../../../json/testimonio.json';  // Ruta al archivo testimonio.json
import { React } from "react";

export function CampoTestimonio1() {
  return (
    <section className='pt-0 md:pt-6'>
      <div>
        <h1 className='font-extrabold text-center text-white text-3xl'>Testimonios</h1>
        <div className='md:m-10 m-6'>
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
    </section>
  );
}
