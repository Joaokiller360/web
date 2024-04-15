import { React } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image, Tooltip, Accordion, AccordionItem} from '@nextui-org/react';

export function Testimonio2(props) {
  //Parte de exportacion de la imagen
  const imagen = `/src/rutes/projet/testImg/testi-${props.imagen}.svg`;

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
    <div id={`testimonio-${props.id}`} className='container mx-auto flex md:px-10 px-2 py-6 m-10 md:flex-row flex-col items-center rounded-lg border border-gray-100 bg-gray-800 text-white'>
      <div className="md:w-1/4 w-2/4 md:mb-0 mb-10">
        <Image
          isZoomed
          alt={props.nombre}
          src={imagen}
          className='object-cover object-center bg-gray-300'
        />
      </div>      
      <div className='lg:flex-grow md:w-1/2 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
        <h4 className='title-font sm:text-4xl text-3xl mb-4 font-medium'><b>{props.nombre}</b> en {props.pais}</h4>
        <p className='mb-8 leading-relaxed'>Y tengo <b>{props.años} años</b></p>
        <p className='mb-8 leading-relaxed'><b style={{textDecorationLine: 'underline'}}>{props.cargo}</b> en '<b>{props.empresa}</b>'</p>
        <p className='mb-8 leading-relaxed'>'{props.testimonio}'</p>
        <div className='flex justify-center'>
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
        </div>
      </div>
    </div>
    <Modal
      backdrop='blur'
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        backdrop: 'bg-gradient-to-t'
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
              <Accordion variant='splitted'>
                <AccordionItem key='1' aria-label='Descripcion de Mi' title='Descripcion de Mi'>
                  '{props.testimonio}'
                </AccordionItem>
                <AccordionItem key='2' aria-label='Cualidades' title='Cualidades'>
                  {props.cualidades.map((cualidad, index) => (
                    <li key={index}>{cualidad}</li>
                  ))}
                </AccordionItem>
                <AccordionItem key='3' aria-label='Empresas donde he trabajado' title='Empresas donde he trabajado'>
                  {props.empresasT.map((empresasT, index) => (
                    <li key={index}>{empresasT}</li>
                  ))}
                </AccordionItem>
              </Accordion>
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