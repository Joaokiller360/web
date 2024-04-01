import { React } from 'react';

export function Contact () {
  return (
  <>
    <section id='contacto' className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative ">
      <div className="container px-5 py-20 lg:py-10 mx-auto max-w-screen-xl">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extraboldfont-extrabold font-medium mb-4 text-white">Area de contacto</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Me puedes dejar tu informacion para poder comunicarme con tigo 📧</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Nombres</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="text" className="leading-7 text-sm text-gray-400">Apellidos</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Correo Electronico</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Teléfono</label>
              <input type="text" id="phone" name="phone" pattern="[0-9]*" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Mensaje</label>
              <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <a href='/#contacto' className='flex mx-auto items-center justify-center px-5 py-3 text-base transition font-medium text-center text-white hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100'>
                    Contacto
                </a>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-white text-center">
            <a className="text-white hover:underline">joaobarres2001@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  </>)
}