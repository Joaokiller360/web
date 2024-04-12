import { React } from 'react';
import './inicio.css';

//Uso para las traducciones
import { useTranslation } from 'react-i18next';

import { PreguntasFrecuentes } from '../faq/preguntasFrecuentes.jsx';
import { Proyectos } from '../projet/projet.jsx';
import { Contact } from '../contact/contact.jsx';

export function Inicio () {

  //Uso para el select de traducion
  const [t] = useTranslation('global');

  return(<>
    <section className='grid text-center pt-0 md:pt-14'>
        <div className=' max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 text-center'>
            <div className='mr-auto place-self-center lg:col-span-7 animate-fade-right'>
                <h1 className='max-w-2xl mb-4 md:text-5xl pt-0 md:pt-10 text-4xl font-extrabold leading-none xl:text-6xl text-white'>{t("home.welcome")}</h1>
                <p className='max-w-2xl mb-6 font-light pt-0 md:pt-10 lg:mb-6 md:text-lg lg:text-xl text-white'>{t("home.description")}</p>
                <a href='/proyectos' className='group relative inline-flex items-center overflow-hidden px-8 py-3 mr-3 text-base font-medium text-center text-white'>
                  <span className='absolute -end-full transition-all group-hover:end-4'>
                    <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                    </svg>
                  </span>
                  <span className='transition-all group-hover:me-4'>{t("home.button-p")}</span>
                </a>
                <a href='#contacto' className='transition inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100'>
                  {t("home.button-c")}
                </a>
            </div>     
        </div>
    </section>
    <section className='text-white py-4 lg:py-10 mx-auto max-w-screen-xl px-4 animate-fade-right animate-delay-1000'>
      <Proyectos />
    </section>
    <section id='preguntas-frecuentes'>
      <PreguntasFrecuentes />
    </section>
    <section>
      <Contact />
    </section>
  </>)
}