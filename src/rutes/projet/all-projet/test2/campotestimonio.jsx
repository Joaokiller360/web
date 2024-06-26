import { Testimonio2 } from './testimonio.jsx'; //Ruta al archivo testimonio.jsx
import testimoniosData from '../../../../json/testimonio.json';  // Ruta al archivo testimonio.json
import { React } from 'react';
import {Slider} from '@nextui-org/react';
import { useState } from 'react';

export function CampoTestimonio2() {
  const [sliderValue, setSliderValue] = useState(1); // Estado para almacenar el valor del slider
  const totalTestimonios = testimoniosData.testimonios.length; // Obtén la cantidad total de testimonios

  const handleSliderChange = (value) => {
    setSliderValue(value); // Actualiza el estado con el nuevo valor del slider
  };
  return (<>
    <section className='pt-0 md:pt-6'>
      <div>
        <div className='font-extrabold text-center text-white text-3xl'>
          <h1>Testimonios</h1>
          <div className='flex flex-col items-center gap-5 w-full'>
            <p className='text-default-100'>Selecciona cuantos testimonios deseas ver</p>
            <Slider   
              size='md'
              step={1} 
              maxValue={totalTestimonios} 
              minValue={0} 
              aria-label='Temperature'
              defaultValue={1}
              className='max-w-md md:w-1/8 text-default-100 md:p-0 p-10'
              color='foreground'
              showSteps={true}
              label='Testimonios'
              getValue={(testeo) => `${testeo} a ${totalTestimonios} Testimonios`}
              onChange={handleSliderChange} // Agrega el manejador de cambio para actualizar el estado
            />
          </div>
        </div>
        <div className='md:m-10 m-6'>
          {testimoniosData.testimonios.slice(0, sliderValue).map((testimonio, index) => (
            <Testimonio2
              key={index}
              id={testimonio.id}
              nombre={testimonio.nombre}
              años={testimonio.años}
              pais={testimonio.pais}
              cargo={testimonio.cargo}
              imagen={testimonio.imagen}
              empresa={testimonio.empresa}
              cualidades={testimonio.cualidades}
              empresasT={testimonio.empresasT}
              testimonio={testimonio.testimonio}
            />
          ))}
        </div>
      </div>
    </section>
  </>);
}
