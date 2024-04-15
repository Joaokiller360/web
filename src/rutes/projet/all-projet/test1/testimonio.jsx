import { React } from 'react';
import {Tooltip, Image, Button} from '@nextui-org/react';

export function Testimonio1(props) {
  const imagen = `/src/imgTest/testi-${props.imagen}.svg`;
  const onClick1 = () => {
    alert(`Hola, soy ${props.nombre} tengo ${props.años} y vengo de ${props.pais}`);
  };
  return (
    <div id={`testimonio-${props.id}`} className='container mx-auto flex md:px-10 px-2 py-6 m-10 md:flex-row flex-col items-center rounded-lg border border-gray-100 bg-gray-800 text-white'>
      <div className="md:w-1/4 w-2/4 md:mb-0 mb-10">
        <Image
          isZoomed
          height= '100%'
          alt={props.nombre}
          src={imagen}
          className='object-cover object-center bg-gray-300'
        />
      </div>
      <div className='lg:flex-grow md:w-1/2 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
        <h4 className='title-font sm:text-4xl text-3xl mb-4 font-medium'><b>{props.nombre}</b> en {props.pais}</h4>
        <p className='mb-8 leading-relaxed'>Y tengo <b>{props.años} años</b></p>
        <p className='mb-8 leading-relaxed'>{props.cargo} en '<b>{props.empresa}</b>'</p>
        <p className='mb-8 leading-relaxed'>'{props.testimonio}'</p>
        <div className='flex justify-center'>
          <Tooltip
            color='danger'
            content={
              <div className='px-1 py-2'>
                <div className='text-small font-bold capitalize'>{props.nombre}</div>
                <div className='text-tiny capitalize'>{props.cargo}</div>
              </div>
            }
          >
            <Button color='foreground' variant='flat' className='capitalize' onClick={onClick1}>
              Leer más
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}