import { React } from 'react';

import {Accordion, AccordionItem} from '@nextui-org/react';

//Uso para las traducciones
import { useTranslation } from 'react-i18next';

export function PreguntasFrecuentes () {

  const [t] = useTranslation('global');

  //Version Escritorio
  const AcordionEscritorio1 = [
    { name: t("faq.faq1"), descrip: 'Descrip 1', key: '1', texto: t("faq.faq1r") },
    { name: t("faq.faq3"), descrip: 'Descrip 3', key: '3', texto: t("faq.faq3r") },
    { name: t("faq.faq5"), descrip: 'Descrip 5', key: '5', texto: t("faq.faq5r") },
  ]
  const AcordionEscritorio2 = [
    { name: t("faq.faq2"),  descrip: 'Descrip 2', key: '2', texto: t("faq.faq2r") },
    { name: t("faq.faq4"), descrip: 'Descrip 4', key: '4', texto: t("faq.faq4r") },
    { name: t("faq.faq6"), descrip: 'Descrip 6', key: '6', texto: t("faq.faq6r") },
  ]
  //Version Mobil
  const AcordionMobil1 = [
    { name: t("faq.faq1"), descrip: 'Descrip 1', key: '1', texto: t("faq.faq1r") },
    { name: t("faq.faq5"), descrip: 'Descrip 3', key: '2', texto: t("faq.faq5r") },
    { name: t("faq.faq6"), descrip: 'Descrip 5', key: '6', texto: t("faq.faq6r") },
  ]
  
  return (<>
    <section className='py-4 lg:py-10 mx-auto max-w-screen-xl px-4'>
      <div>
        <div className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl animate-fade-up animate-once animate-delay-1000'>
          <h3>{t("frequently-asked-questions")}</h3>
        </div>
        <div className='hidden md:block md:text-sm'>
          <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='mt-2 md:mt-0'>
              <Accordion variant='bordered' defaultExpandedKeys={['1']} className='text-white animate-fade-right animate-once animate-delay-1000'>
                {AcordionEscritorio1.map((item) => (
                  <AccordionItem key={item.key} aria-label={item.descrip} title={<span className='text-white'>{item.name}</span>}>
                    {item.texto}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className='mt-2 md:mt-0'>
              <Accordion variant='bordered' defaultExpandedKeys={['6']} className='text-white animate-fade-left animate-once animate-normal animate-delay-1000'>
                {AcordionEscritorio2.map((item) => (
                  <AccordionItem key={item.key} aria-label={item.descrip} title={<span className='text-white'>{item.name}</span>}>
                  {item.texto.includes(t("faqs")) ? (
                    <span>
                      {item.texto.split(t("faqs")).map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < item.texto.split(t("faqs")).length - 1 && (
                            <a href='/contacto#contacto' className='underline'>{t("faqs")}</a>
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
              <Accordion variant='bordered' defaultExpandedKeys={['3']} className='text-white'>
                {AcordionMobil1.map((item) => (
                  <AccordionItem key={item.key} aria-label={item.descrip} title={<span className='text-white'>{item.name}</span>}>
                  {item.texto.includes(t("faqs")) ? (
                    <span>
                      {item.texto.split(t("faqs")).map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < item.texto.split(t("faqs")).length - 1 && (
                            <a href='/contacto#contacto' className='underline'>{t("faqs")}</a>
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