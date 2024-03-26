import { React } from 'react';

export function Footer () {
  return (
    <>
      <div className='text-white text-sm bg-gray-900'>
        <div /*footer*/ class='left-0 -bottom-3 w-full pt-6 flex'>
          <section class="w-full max-w-full sm:w-3/4 mx-auto">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              <div class="text-center">
                <h2 class="text-lg font-medium mb-5">Portfolio</h2>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">About</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">Skills</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">Attributes</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">Projects</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">Testimonials</a>
              </div>
              <div class="text-center">
                <h2 class="text-lg font-medium mb-5">Resources</h2>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">GitHub</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">npm</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">Codepen</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">Codesandbox</a>
                  <a href="#" class="block mb-2 hover:text-gray-400 font-medium hover:font-normal">Dribbble</a>
              </div>
              <div class="text-center md:text-left">
                <h2 class="text-lg font-medium mb-5">Social Media</h2>
                  <p class="mb-4">Follow me on social media to get the latest awesome reels and posts.</p>
                  <div class="flex justify-center md:justify-start space-x-4">
                    <a href="#" class="fa-brands fa-instagram rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center">I</a>
                    <a href="#" class="fa-brands fa-tiktok rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center">T</a>
                    <a href="#" class="fa-brands fa-linkedin rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center">L</a>
                  </div>
              </div>
            </div>
          </section>
        </div>
        <div class='w-full max-w-full sm:w-3/4 mx-auto'>
          <section class='bottom flex flex-col-reverse lg:items-center lg:justify-between lg:flex-row lg:gap-11 py-5 text-center'>
            <p class='copyright lg mt-3 lg:mt-0'>© 2024 Todos los derechos reservados</p>
            <div class='legal lg'>
              <a class='ml-4' href='#'>Contacto</a>
              <a class='ml-4' href='#'>Términos</a>
              <a class='ml-4' href='#'>Privacidad</a>
            </div>
          </section>
        </div>
      </div>
    </>
    )
}