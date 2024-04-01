import { React } from 'react';

import {TWITTER, INSTAGRAM, WHATSAPP} from '../../imgTest/socialmedia.jsx';

const Indice = [
  { name: 'Inicio', key:'1', href: '/' },
  { name: 'Sobre Mi', key:'2', href: '/sobre-mi' },
  { name: 'Proyectos', key:'3', href: '/proyectos' },
  { name: 'Contacto', key:'4', href: '/#contacto' },
]
const Recursos = [
  { name: 'GitHub', key:'1', href: 'https://github.com/Joaokiller360' },
  { name: 'LinkeDin', key:'3', href: 'https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo' },
  { name: 'Preguntas Frecuentes', key:'4', href: '/#preguntas-frecuentes' },
]
const terminosycondiciones = [
  { name: 'Contacto', key:'1', href: '/contacto#contacto' },
  { name: 'Términos y Condiciones', key:'2', href: '/terminos-y-condiciones' },
  { name: 'Privacidad', key:'3', href: '/privacidad'},
]

export function Footer () {
  return (
    <>
    <div className='bg-white left-0 w-full pt-1'/>
      <div className='text-white text-sm bg-black' id='redes-sociales'>
        <div /*footer*/ className='left-0 -bottom-3 w-full pt-6 flex'>
          <section className='w-full max-w-full sm:w-3/4 mx-auto'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
              <div className='text-center font-medium'>
                <h2 className='text-lg mb-5'>Indice</h2>
                  {Indice.map((item) => (
                    <a href={item.href} key={item.key} className='block mb-2 hover:text-gray-400 hover:underline'>
                      {item.name}
                    </a>
                  ))}
              </div>
              <div className='text-center font-medium'>
                <h2 className='text-lg mb-5'>Recursos</h2>
                  {Recursos.map((item) => (
                    <a href={item.href} key={item.key} className='block mb-2 hover:text-gray-400 hover:underline'>
                      {item.name}
                    </a>
                  ))}
              </div>
              <div id='redes-sociales' className='text-center md:text-left'>
                <h2 className='text-lg font-medium mb-5'>Social Media</h2>
                  <p className='mb-4'>Sígueme en las redes sociales para obtener los últimos vídeos y publicaciones asombrosas.</p>
                  <div className='flex justify-center md:justify-start space-x-4'>
                    <TWITTER className='fa-brands fa-instagram rounded-full w-10 h-10 flex items-center justify-center' />
                    <INSTAGRAM className='fa-brands fa-tiktok rounded-full w-10 h-10 flex items-center justify-center' />
                    <WHATSAPP className='fa-brands fa-linkedin rounded-full w-10 h-10 flex items-center justify-center' />
                  </div>
              </div>
            </div>
          </section>
        </div>
        <div className='w-full max-w-full mx-auto sm:w-3/4'>
          <section className='bottom flex flex-col-reverse lg:items-center lg:justify-between lg:flex-row lg:gap-11 py-5 text-center font-medium'>
            <p className='lg mt-3 lg:mt-0'>© 2024 Todos los derechos reservados</p>
            <div className='lg'>
              {terminosycondiciones.map((item) => (
                <a href={item.href} key={item.key} className='ml-4 hover:underline'>
                  {item.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
    )
}