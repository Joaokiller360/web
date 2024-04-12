import { React } from 'react';

import {TWITTER, INSTAGRAM, LINKEDIN} from '../../imgTest/socialmedia.jsx';

//Uso para las traducciones
import { useTranslation } from 'react-i18next';

export function Footer () {

  //Uso para el select de traducion
  const [t, i18n] = useTranslation('global');

  const Indice = [
    { name: t("indexgrup.home"), key:'1', href: '/' },
    { name: t("indexgrup.about-me"), key:'2', href: '/sobre-mi' },
    { name: t("indexgrup.projects"), key:'3', href: '/proyectos' },
    { name: t("indexgrup.contact"), key:'4', href: '/#contacto' },
  ]
  const Explore = [
    { name: 'FAQs', key:'4', href: '/#preguntas-frecuentes' },
    { name: 'GitHub', key:'1', href: 'https://github.com/Joaokiller360' },
    { name: 'LinkeDin', key:'3', href: 'https://www.linkedin.com/in/joao-alexander-barres-diaz' },
  ]

  const terminosycondiciones = [
    { name: t("footer.terms-and-conditions"), key:'1', href: '/terminos-y-condiciones' },
    { name: t("footer.privacy-policy"), key:'2', href: '/politicas-de-privacidad'},
  ]

  return (
    <>
    <div className='bg-white left-0 w-full pt-1'/>
      <div className='text-white text-sm bg-black' id='redes-sociales'>
        <div /*footer*/ className='left-0 -bottom-3 w-full pt-6 flex'>
          <section className='w-full max-w-full sm:w-3/4 mx-auto'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-2 md:gap-8'>
              <div className='text-center font-medium'>
                <h2 className='text-lg mb-5'>{t("index")}</h2>
                  {Indice.map((item) => (
                    <a href={item.href} key={item.key} className='block mb-2 hover:text-gray-400 hover:underline'>
                      {item.name}
                    </a>
                  ))}
              </div>
              <div className='text-center font-medium'>
                <h2 className='text-lg mb-5'>{t("explore")}</h2>
                  {Explore.map((item) => (
                    <a href={item.href} key={item.key} className='block mb-2 hover:text-gray-400 hover:underline'>
                      {item.name}
                    </a>
                  ))}
              </div>
              <div id='redes-sociales' className='text-center md:text-left'>
                <h2 className='text-lg font-medium mb-5'>{t("social.social-networking")}</h2>
                  <p className='mb-4'>{t("social.description")}</p>
                  <div className='flex justify-center md:justify-start space-x-6 pt-0 md:pt-5'>
                    <TWITTER className='fa-brands fa-instagram rounded-full w-10 h-10 flex items-center justify-center' />
                    <INSTAGRAM className='fa-brands fa-tiktok rounded-full w-10 h-10 flex items-center justify-center' />
                    <LINKEDIN className='fa-brands fa-linkedin rounded-full w-10 h-10 flex items-center justify-center' />
                  </div>
              </div>
            </div>
          </section>
        </div>
        <div className='w-full max-w-full mx-auto sm:w-3/4'>
          <section className='bottom flex flex-col-reverse lg:items-center lg:justify-between lg:flex-row lg:gap-11 py-5 text-center font-medium'>
            <p className='lg mt-3 lg:mt-0'>{t("footer.reserved")}</p>
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