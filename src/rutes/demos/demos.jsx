import Spline from '@splinetool/react-spline';

//Uso para las traducciones
import { useTranslation } from 'react-i18next';

export function Demos() {

  const [t] = useTranslation('global');

  return (
    <section className='grid text-center pt-0 md:pt-14'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 text-center animate-fade-right'>
        <div className="mr-auto place-self-center lg:col-span-7">
          <Spline scene= " https://prod.spline.design/yQ6l-pPOsaGif9Vv/scene.splinecode" />
          <a href='/' className='group relative inline-flex items-center overflow-hidden px-8 py-3 mr-3 text-base font-medium text-center text-white'>
            <span className='absolute -end-full transition-all group-hover:end-4'>
              <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
              </svg>
            </span>
            <span className='transition-all group-hover:me-4'>{t("navbar.home")}</span>
          </a>
        </div>
      </div>
    </section>
  )
}