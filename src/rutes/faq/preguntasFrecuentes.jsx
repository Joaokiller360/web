import { React } from 'react';

import {Accordion, AccordionItem} from '@nextui-org/react';

//Version Escritorio
const AcordionEscritorio1 = [
  { name: '¿Qué tipo de proyectos has realizado en el pasado?', descrip: 'Descrip 1', key: '1', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: '¿Qué procesos sigues en el desarrollo de un proyecto web?', descrip: 'Descrip 1', key: '3', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: '¿Qué ejemplos de diseño y desarrollo destacarías como tus mejores trabajos?', descrip: 'Descrip 1', key: '5', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
]
const AcordionEscritorio2 = [
  { name: '¿Cuáles son tus habilidades técnicas y áreas de especialización?',  descrip: 'Descrip 1', key: '2', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: '¿Qué tipo de colaboración buscas en tus proyectos?', descrip: 'Descrip 1', key: '4', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: '¿Cómo puedo contactarte para discutir un proyecto potencial?', descrip: 'Descrip 1', key: '6', texto: 'Pueden ingresar a este [formulario de contacto] donde yo personalmente me comunicare con ustedes para más informacion' },
]
//Version Mobil
const AcordionMobil1 = [
  { name: '¿Qué tipo de proyectos has realizado en el pasado?', descrip: 'Descrip 1', key: '1', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: 'Accordion 2', descrip: 'Descrip 1', key: '2', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: '¿Cómo puedo contactarte para discutir un proyecto potencial?', descrip: 'Descrip 1', key: '6', texto: 'Pueden ingresar a este [formulario de contacto] donde yo personalmente me comunicare con ustedes para más informacion' },
]

export function PreguntasFrecuentes () {
  return (<>
    <section className='py-4 lg:py-10 mx-auto max-w-screen-xl px-4'>
      <div>
        <div className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl animate-fade-up animate-once animate-delay-1000'>
          <h3>Preguntas Frecuentes</h3>
        </div>
        <div className='hidden md:block md:text-sm'>
          <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='mt-2 md:mt-0'>
              <Accordion variant='bordered' defaultExpandedKeys={['1']} className='text-white animate-fade-right animate-once animate-delay-1000'>
                {AcordionEscritorio1.map((item) => (
                  <AccordionItem key={item.key} aria-label={item.descrip} title={<span className='text-white'>{item.name}</span>}>
                  {item.texto.includes('[formulario de contacto]') ? (
                    <span>
                      {item.texto.split('[formulario de contacto]').map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < item.texto.split('[formulario de contacto]').length - 1 && (
                            <a href='/contacto#contacto' className='underline'>formulario de contacto</a>
                          )}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <span>{item.texto}</span>
                  )}
                </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className='mt-2 md:mt-0'>
              <Accordion variant='bordered' defaultExpandedKeys={['4']} className='text-white animate-fade-left animate-once animate-normal animate-delay-1000'>
                {AcordionEscritorio2.map((item) => (
                  <AccordionItem key={item.key} aria-label={item.descrip} title={<span className='text-white'>{item.name}</span>}>
                  {item.texto.includes('[formulario de contacto]') ? (
                    <span>
                      {item.texto.split('[formulario de contacto]').map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < item.texto.split('[formulario de contacto]').length - 1 && (
                            <a href='/contacto#contacto' className='underline'>formulario de contacto</a>
                          )}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <span>{item.texto}</span>
                  )}
                </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className='md:hidden md:text-sm'>
          <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='animate-fade-right animate-once animate-delay-1000'>
              <Accordion variant='bordered' defaultExpandedKeys={['2']} className='text-white'>
                {AcordionMobil1.map((item) => (
                  <AccordionItem key={item.key} aria-label={item.descrip} title={<span className='text-white'>{item.name}</span>}>
                  {item.texto.includes('[formulario de contacto]') ? (
                    <span>
                      {item.texto.split('[formulario de contacto]').map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < item.texto.split('[formulario de contacto]').length - 1 && (
                            <a href='/contacto#contacto' className='underline'>formulario de contacto</a>
                          )}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <span>{item.texto}</span>
                  )}
                </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}