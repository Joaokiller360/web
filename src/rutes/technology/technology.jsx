import { React } from 'react';
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from '../projet/icons.jsx';

//Version Escritorio
const cardsEs = [
  { icon: 'icon1', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
  { icon: 'icon1', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
  { icon: 'icon3', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
  { icon: 'icon4', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
  { icon: 'icon5', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
  { icon: 'icon5', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
];
const iconComponentsEs = {
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  icon4: Icon4,
  icon5: Icon5,
};
//Version Mobil
const cardsMo = [
  { icon: 'icon1', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
  { icon: 'icon1', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
  { icon: 'icon3', title: 'Digital campaigns', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.' },
];
const iconComponentsMo = {
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
};

export function Technology () {
  return (<>
  <section>
    <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
      <div className='mx-auto max-w-lg text-center'>
        <h3 className='text-3xl font-bold sm:text-4xl'>Tecnologías que manejo <br />en Front End</h3>
        {/*<p className='mt-4 text-gray-300'>
          Lorem ipsum, dolor sit amet consecte
        </p>*/}
      </div>
      {/*Version Escritorio*/}
      <div className="hidden md:block">
        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {cardsEs.map((card, index) => {
            // Obtén el componente de icono correspondiente al nombre del icono
            const IconComponentEs = iconComponentsEs[card.icon];
  
            // Renderiza la tarjeta con el icono y los demás datos
            return (
              <span key={index} className='block rounded-xl border border-white p-8 shadow-2xl transition hover:border-white-800/20 hover:shadow-blue-800/80'>
                  <div className="flex justify-center">
                    <IconComponentEs /> {/* Utiliza el componente de icono correspondiente */}
                  </div>
                  <h2 className='mt-4 text-xl font-bold'>{card.title}</h2>
                  <p className='mt-1 text-sm text-gray-300'>{card.description}</p>
                  <a href={card.href} className='group relative inline-flex items-center overflow-hidden px-8 py-3 mr-3 text-base font-medium text-center text-white'>
                    <span className='absolute -end-full transition-all group-hover:end-4'>
                      <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                      </svg>
                    </span>
                    <span className='transition-all group-hover:me-4'>Ver Más</span>
                  </a>
                </span>
            );
          })}
        </div>
      </div>
      {/*Version Mobil*/}
      <div className="md:hidden">
        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {cardsMo.map((card, index) => {
            // Obtén el componente de icono correspondiente al nombre del icono
            const IconComponentMo = iconComponentsMo[card.icon];
  
            // Renderiza la tarjeta con el icono y los demás datos
            return (
              <span key={index} className='block rounded-xl border border-white p-8 shadow-2xl transition hover:border-white-800/20 hover:shadow-blue-800/80'>
              <div className="flex justify-center">
                <IconComponentMo /> {/* Utiliza el componente de icono correspondiente */}
              </div>
              <h2 className='mt-4 text-xl font-bold'>{card.title}</h2>
              <p className='mt-1 text-sm text-gray-300'>{card.description}</p>
              <a href={card.href} className='group relative inline-flex items-center overflow-hidden px-8 py-3 mr-3 text-base font-medium text-center text-white'>
                <span className='absolute -end-full transition-all group-hover:end-4'>
                  <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                  </svg>
                </span>
                <span className='transition-all group-hover:me-4'>Ver Más</span>
              </a>
              </span>
            );
          })}
        </div>
      </div>
    </div>     
  </section>
  </>)
}