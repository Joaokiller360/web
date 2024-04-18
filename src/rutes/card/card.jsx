import {Image} from '@nextui-org/react';

//Uso para las traducciones
import { useTranslation } from 'react-i18next';

import { TimelineComponent } from './timeLine/timeline.jsx';

import { ContactArea } from './contactArea/contactArea.jsx';

import { HobbiesArea } from './hobbiesArea/hobbiesArea.jsx';

import { ProfessionalFormation } from './professionalFormation/professionalFormation.jsx';

import { Skills } from './skills/skills.jsx';

export function Card () {

  const [t] = useTranslation('global');
  
  return (<>
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-0 mx-auto flex flex-col'>
        <div className='lg:w-4/6 mx-auto'>
          <div className='rounded-lg overflow-hidden hidden md:block'>
            <Image
              alt='content'
              className='object-cover object-center h-full w-full z-1'
              src='/imgTest/card/mar.jpeg'
            />
          </div>
          {/*Version Escritorio*/}
          <div className='hidden md:block pb-5'>
            <div className='flex flex-col sm:flex-row pl-4 mt-10 md:p-0'>
              <div className='sm:w-1/3 text-center pb-3 md:pt-1 sm:pr-0 sm:py-8 rounded-l-3xl bg-gray-900'>
                <div className='w-28 h-28 rounded-full inline-flex items-center justify-center'>
                  <Image
                    alt='content'
                    className='object-cover object-center h-full w-full border-3 border-white'
                    src='/imgTest/card/joaoBarres.jpeg'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='font-medium title-font mt-4 text-white text-lg'>Joao Barres Diaz</h2>
                  <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <ProfessionalFormation />
                  <div className='w-28 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <HobbiesArea />
                  <div className='w-28 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <Skills />
                  <div className='w-28 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <ContactArea />
                </div>
              </div>
                <div className='sm:w-2/3 sm:pl-4 sm:py-8 mt-4 pt-4 sm:mt-0 sm:text-left rounded-r-3xl bg-gray-900'>
                  <div className='pr-10 text-justify'>
                    <p className='leading-relaxed mb-4 text-white text-medium'>Soy un chico <strong>Esmeraldeño</strong>, que le gusta aprender cosas nuevas sobre el mundo de la Programación.</p>
                    <p className='leading-relaxed mb-4 text-white text-medium'>He trabajado en varios campos tantos tecnicos, como operar practicas de descargar de vehiculos, asistente legal, archivador, etc</p>
                  </div>
                  <h2 className='leading-relaxed mb-4 text-white text-2xl text-center'>Mi Experencia Laboral</h2>
                    <div>
                      <TimelineComponent/>
                    </div>
                  </div>
              </div>
            </div>
          {/*Version Movil*/}
          <div className='md:hidden block'>
            <div className='flex flex-col sm:flex-row mt-10 md:p-0 pb-5'>
              <div className='sm:w-1/3 text-center md:pb-2 pb-2.5 md:pt-1 sm:pr-0 sm:py-8 rounded-3xl md:rounded-l-3xl bg-gray-900'>
                <div className='w-28 h-28 rounded-full inline-flex items-center justify-center'>
                  <Image
                    alt='content'
                    className='object-cover object-center h-full w-full border-3 border-white'
                    src='/imgTest/card/joaoBarres.jpeg'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='font-medium title-font mt-4 text-white text-lg'>Joao Barres Diaz</h2>
                  <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <ProfessionalFormation />
                  <div className='w-28 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <HobbiesArea />
                  <div className='w-28 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <Skills />
                  <div className='w-28 h-1 bg-indigo-500 rounded mt-2 mb-4' />
                  <ContactArea />
                </div>
              </div>
              <div className='sm:w-2/3 sm:pl-4 sm:py-8 mt-4 sm:mt-0 text-center sm:text-left rounded-3xl md:rounded-r-3xl bg-gray-900'>
                <div className='px-5 pt-6 text-justify'>
                  <p className='leading-relaxed mb-4 text-white text-medium'>Soy un chico <strong>Esmeraldeño</strong>, que le gusta aprender cosas nuevas sobre el mundo de la Programación.</p>
                  <p className='leading-relaxed mb-4 text-white text-medium'>He trabajado en varios campos tantos tecnicos, como operar practicas de descargar de vehiculos, asistente legal, archivador, etc</p>
                </div>
                <h2 className='leading-relaxed mb-4 text-white text-xl text-center'>Mi Experencia Laboral</h2>
                <div className='px-10'>
                  <TimelineComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </>)
}