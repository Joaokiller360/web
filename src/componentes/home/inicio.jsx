import { React } from 'react';
import './inicio.css';
import { Image } from '@nextui-org/react';
import { AIRBNB, GOOGLE, MICROSOFT, SPOTIFY, MAILCHIMP, MASHABLE } from './svgs/icons.jsx';

export function Inicio () {
  return(<>
    <section>
        <div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12'>
            <div class='mr-auto place-self-center lg:col-span-7 animate-fade-right'>
                <h1 class='max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl bg-gradient-to-bl from-indigo-500 to-red-600 bg-clip-text text-transparent'>Bienvenio a esta pagina de pruebas</h1>
                <p class='max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                <a href='/proyectos' class='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
                    Ver Proyectos
                    <svg class='w-5 h-5 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
                </a>
                <a href='#contacto' class='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
                    Contacto
                </a> 
            </div>
            <div class='hidden lg:mt-0 lg:col-span-5 lg:flex animate-fade'>
              <Image
                alt='mockup'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
              />
            </div>                
        </div>
    </section>
    <section>
        <div class="py-4 lg:py-10 mx-auto max-w-screen-xl px-4">
            <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">Estarás en buena compañía</h2>
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <a href="#" class="flex justify-center items-center animate-pulse">
                  <AIRBNB />                       
                </a>
                <a href="#" class="flex justify-center items-center animate-pulse">
                  <GOOGLE />                                              
                </a>
                <a href="#" class="flex justify-center items-center animate-pulse">
                  <MICROSOFT />                                                                
                </a>
    
                <a href="#" class="flex justify-center items-center animate-pulse">
                  <SPOTIFY />                                                                                  
                </a>
                <a href="#" class="flex justify-center items-center animate-pulse">
                  <MAILCHIMP />                                                                                  
                </a>
                <a href="#" class="flex justify-center items-center animate-pulse">
                  <MASHABLE />                                                                                   
                </a>
            </div>
        </div>
    </section>
  </>)
}