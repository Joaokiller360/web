import { Testimonio2 } from './testimonio.jsx'; //Ruta al archivo testimonio.jsx
import './testimonio/compotestimonio.css'; //Ruta al archivo compotestimonio.css
import testimoniosData from '../../json/testimonio.json';  // Ruta al archivo testimonio.json
import { React } from 'react';
import {Slider} from '@nextui-org/react';

export function CampoTestimonio2() {
  return (
    <div className='App'>
      <h1 className='h1T'>Testimonios</h1>
      <div className='flex flex-col gap-6 w-full max-w-md'>
        <p className='text-default-100'>Selecciona cuantos testimonios deseas ver</p>
        <Slider   
          size='md'
          step={1} 
          maxValue={10} 
          minValue={0} 
          aria-label='Temperature'
          defaultValue={1}
          className='max-w-md text-default-100'
          color='foreground'
          showSteps={true}
          label='Testimonios'
          getValue={(testeo) => `${testeo} a 10 Testimonios`}
        />
      </div> 
      <div className='contenedor-principal'>
        {testimoniosData.testimonios.map((testimonio, index) => (
          <Testimonio2
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
