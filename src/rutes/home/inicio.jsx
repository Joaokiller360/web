import { React } from 'react';
import './inicio.css';
import { Image } from '@nextui-org/react';
import { AIRBNB, GOOGLE, MICROSOFT, SPOTIFY, MAILCHIMP, MASHABLE } from './svgs/icons.jsx';

import { PreguntasFrecuentes } from '../faq/preguntasFrecuentes.jsx';
import { About } from '../about/about.jsx';

export function Inicio () {
  return(<>
    <section>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12'>
            <div className='mr-auto place-self-center lg:col-span-7 animate-fade-right'>
                <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white'>¡Bienvenido a mi portafolio digital!</h1>
                <p className='max-w-2xl mb-6 font-light lg:mb-6 md:text-lg lg:text-xl text-white'>Aquí encontrarás una muestra de mi trabajo y pasión por el desarrollo web.<br/>Explore y descubra cómo puedo agregar valor a su proyecto.</p>
                <a href='/proyectos' className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg #0F172A focus:ring-4'>
                    Ver Proyectos
                    <svg className='w-5 h-5 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
                </a>
                <a href='/#contacto' className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
                    Contacto
                </a> 
            </div>
            <div className='hidden lg:mt-0 lg:col-span-5 lg:flex animate-fade'>
              <Image
                alt='mockup'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
              />
            </div>                
        </div>
    </section>
    <section className='py-4 lg:py-10 mx-auto max-w-screen-xl px-4 bg-gray-900 rounded-3xl xs:mt-0 xs:mr-5 xs:mb-0 xs:ml-5'>
        <div className='animate-fade-up animate-once  md:mt-5 md:mr-10 md:mb-5 md:ml-10'>
            <h2 className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl'>Colaboradores del Gobierno</h2>
            <div className='grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 '>
                <a href='#' className='flex justify-center items-center animate-pulse'>
                  <AIRBNB />                       
                </a>
                <a href='#' className='flex justify-center items-center animate-pulse'>
                  <GOOGLE />                                              
                </a>
                <a href='#' className='flex justify-center items-center animate-pulse'>
                  <MICROSOFT />                                                                
                </a>
    
                <a href='#' className='flex justify-center items-center animate-pulse'>
                  <SPOTIFY />                                                                                  
                </a>
                <a href='#' className='flex justify-center items-center animate-pulse'>
                  <MAILCHIMP />                                                                                  
                </a>
                <a href='#' className='flex justify-center items-center animate-pulse'>
                  <MASHABLE />                                                                                   
                </a>
            </div>
        </div>
    </section>
    <section className='py-4 lg:py-10 mx-auto max-w-screen-xl'>
      <About />
    </section>
    <section id='preguntas-frecuentes'>
      <PreguntasFrecuentes />
    </section>
  </>)
}