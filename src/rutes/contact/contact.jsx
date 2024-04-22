import React, { useRef, useState, useEffect } from 'react';

import emailjs from '@emailjs/browser';

//Uso para las traducciones
import { useTranslation } from 'react-i18next';

export function Contact () {

  //Uso para el select de traducion
  const [t] = useTranslation('global');
  
  const [message, setMessage] = useState(''); // Estado para almacenar el mensaje de éxito o error
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje

  const form = useRef (null);

  const sendEmail = async (evento) => {
    evento.preventDefault();
  
    try {
      const serviceId = 'service_109152n'; // Reemplaza con tu ID de servicio correcto
      const templateId = 'template_t0aqlbj'; // Reemplaza con tu ID de plantilla
  
      await emailjs.sendForm(serviceId, templateId, form.current);
  
      //console.log('Correo enviado correctamente');
      setMessage(t("contact-from.mail-sent")); // Establece el mensaje de éxito
      setShowMessage(true); // Muestra el mensaje
      form.current.reset(); // Resetea el formulario después de enviar el correo
    } catch (error) {
      //console.error('Error al enviar el correo:', error);
      setMessage(t("contact-from.error-sent")); // Establece el mensaje de error
      setShowMessage(true); // Muestra el mensaje
    }
  };

  // Efecto para ocultar el mensaje después de 4 segundos
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false); // Oculta el mensaje
      }, 4000);

      // Limpiar el temporizador al desmontar el componente
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  emailjs.init('0biM3Cjhn5bwlSsZR');
  
  return (
  <>
    <form ref={form} onSubmit={sendEmail} id='contacto' className='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative'>
      <div className='container mx-auto max-w-screen-xl'>
      <div className='flex flex-col text-center w-full mb-12'>
        <h1 className='text-3xl md:text-4xl font-extraboldfont-extrabold font-medium mb-4 text-white'>{t("contact-area")}</h1>
        <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-white'>{t("contact-meensage")}</p>
      </div>
      <div className='lg:w-1/2 md:w-2/3 mx-auto'>
        <div className='grid lg:flex flex-wrap -m-2'>
          <div className='lg:w-1/2 md:w-13 p-2'>
            <fieldset className='relative'>
              <label htmlFor='name' className='leading-7 text-sm text-white'>{t("contact-from.name")}</label>
              <input required placeholder='Ej: Joao A********' type='text' id='name' name='name' className='w-full bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </fieldset>
          </div>
          <div className='lg:w-1/2 md:w-13 p-2'>
            <fieldset className='relative'>
              <label htmlFor='lastName' className='leading-7 text-sm text-white'>{t("contact-from.last-name")}</label>
              <input required placeholder='Ej: Barres D***' type='text' id='lastName' name='lastName' className='w-full bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </fieldset>
          </div>
          <div className='lg:w-1/2 md:w-13 p-2'>
            <fieldset className='relative'>
              <label htmlFor='email' className='leading-7 text-sm text-white'>{t("contact-from.mail")}</label>
              <input required placeholder='Ej: joaobarres73@gmail.com' type='email' id='email' name='email' className='w-full bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </fieldset>
          </div>
          <div className='lg:w-1/2 md:w-13 p-2'>
            <fieldset className='relative'>
              <label htmlFor='phone' className='leading-7 text-sm text-white'>{t("contact-from.phone")}</label>
              <input required placeholder='Ej: 099-999-9999' type='text' id='phone' name='phone' pattern='[0-9]*' className='w-full bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </fieldset>
          </div>
          <div className='p-2 w-full'>
            <fieldset className='relative'>
              <label htmlFor='message' className='leading-7 text-sm text-white'>{t("contact-from.message")}</label>
              <textarea required placeholder={t("contact-from.message-area")} id='message' name='message' className='w-full bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' />
            </fieldset>
          </div>
          <div className='p-2 w-full'>
            <button className='flex mx-auto items-center justify-center px-5 py-3 text-base transition font-medium text-center text-white hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100'>
              {t("contact-from.button")}
            </button>
            {showMessage && <div className='text-center text-green-500 pt-6'>{message}</div>} {/* Muestra el mensaje de éxito o error */}
          </div>
          <div className='p-2 w-full pt-8 mt-8 border-t border-white text-center'>
            <a href='mailto:joaobarres73@gmail.com' className='text-white hover:underline'>joaobarres73@gmail.com</a>
          </div>
        </div>
      </div>
      </div>
    </form>
  </>)
}