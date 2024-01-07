import './testimonio/testimonio.css';
import { React } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image, Tooltip} from "@nextui-org/react";

/*export function Testimonio(props) {
  const imagen = `/src/imgTest/testi-${props.imagen}.jpg`;
  const onClick1 = () => {
    alert(`Hola, soy ${props.nombre} tengo ${props.años} y vengo de ${props.pais}`);
  };
  return (
    <div id={`testimonio-${props.id}`} className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={imagen} alt={props.nombre} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='años-testimonio'>Y tengo <b>{props.años} años</b></p>
        <p className='cargo-testimonio'>{props.cargo} en '<b>{props.empresa}</b>'</p>
        <p className='texto-testimonio'>'{props.testimonio}'</p>
        <b><Botonprincipal text='Leer Más' id='1' onClick={onClick1} /></b>
      </div>
    </div>
    
  );
}*/

export function Testimonio2(props) {
  //Parte de exportacion de la imagen
  const imagen = `/src/imgTest/testi-${props.imagen}.jpg`;
  //Parte de dar una alerta con nombre, años y pais
  /*const onClick1 = () => {
    alert(`Hola, soy ${props.nombre} tengo ${props.años} y vengo de ${props.pais}`);
  };*/


const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
    <div id={`testimonio-${props.id}`} className='contenedor-testimonio'>
      <Image
        isZoomed
        width='500'
        border-radius='25px'
        alt={props.nombre}
        src={imagen}
      />      
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='años-testimonio'>Y tengo <b>{props.años} años</b></p>
        <p className='cargo-testimonio'><b style={{textDecorationLine: 'underline'}}>{props.cargo}</b> en '<b>{props.empresa}</b>'</p>
        <p className='texto-testimonio'>'{props.testimonio}'</p>
        <b>
          <Tooltip
            color='danger'
            content={
              <div className='px-1 py-2'>
                <div className='text-tiny capitalize'>Puedes darle click para ver la magia</div>
              </div>
            }
          >
            <Button
              variant='flat' 
              color='foreground' 
              onPress={onOpen}
              className='capitalize'
            >
              Leer más
            </Button>
          </Tooltip>
      </b>
      </div>
    </div>
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        backdrop: "bg-gradient-to-t"
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Descripción</ModalHeader>
            <ModalBody>
              <p> 
                Soy <b>{props.nombre}</b>, tengo <b>{props.años} años</b> y soy de {props.pais} 
              </p>
              <p> 
                Donde tengo un cargo de <b style={{textDecorationLine: 'underline'}}>{props.cargo}</b> con la empresa '<b>{props.empresa}</b>'
              </p>
              <p>
              '{props.testimonio}'
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
    </>
  );
}

  /*
  const imagen = `/src/imgTest/testi-${props.imagen}.jpg`;
  const onClick1 = () => {
    alert(`Hola, soy ${props.nombre} tengo ${props.años} y vengo de ${props.pais}`);
  };
  return (
    <div id={`testimonio-${props.id}`} className='contenedor-testimonio'>
      <Image
        isZoomed
        width='500'
        border-radius='25px'
        height= '100%'
        alt={props.nombre}
        src={imagen}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='años-testimonio'>Y tengo <b>{props.años} años</b></p>
        <p className='cargo-testimonio'>{props.cargo} en '<b>{props.empresa}</b>'</p>
        <p className='texto-testimonio'>'{props.testimonio}'</p>
        <b>
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
        </b>
      </div>
    </div>
  );
}*/