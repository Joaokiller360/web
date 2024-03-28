import { React } from 'react';

export function Roadmap () {
  return (<>
    <section className='py-4 lg:py-10 mx-auto max-w-screen-xl px-4 text-white'>
      <div className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl animate-fade-up animate-once animate-delay-1000'>
        <h3>Mi hoja de ruta</h3>
      </div>
      <div>
        <HoverEffect items={projects} />
      </div>
    </section>

    <section className='py-4 lg:py-10 mx-auto max-w-screen-xl px-4 '>
      
  </section>
  </>)
}

/*
Time Live

<div className="mx-auto flex flex-col md:flex-row md:my-24">
        <div className="ml-0 md:ml-12 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap">
              <div className="border-2-2 border-yellow-555 absolute h-full border"
                style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }} />
              <div className="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline animate-fade-right animate-once animate-delay-1000">
                <div className="order-1 w-5/12" />
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-2 text-base text-yellow-300">1-6 May, 2021</p>
                  <h4 className="mb-2 font-bold text-lg md:text-2xl">Registration</h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Pick your favourite event and register in that event by filling the form corresponding to that
                    event. Its that easy
                  </p>
                </div>
              </div>
              <div className="mb-2 flex justify-between items-center w-full right-timeline animate-fade-left animate-once animate-normal animate-delay-1000">
                <div className="order-2 w-5/12" />
                  <div className="order-2  w-5/12 px-1 py-4 text-left">
                    <p className="mb-2 text-base text-yellow-300">6-9 May, 2021</p>
                    <h4 className="mb-2 font-bold text-lg md:text-2xl">Participation</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Participate online. The links for your registered events will be sent to you via email and whatsapp
                      groups. Use those links and show your talent.
                    </p>
                </div>
              </div>
              <div className="border-2-2 border-yellow-555 absolute h-full border"
                style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }} />
              <div className="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline animate-fade-right animate-once animate-delay-[2000ms]">
                <div className="order-3 w-5/12" />
                <div className="order-3 w-5/12 px-1 py-4 text-right">
                  <p className="mb-2 text-base text-yellow-300"> 10 May, 2021</p>
                  <h4 className="mb-2 font-bold text-lg md:text-2xl">Result Declaration</h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                    announced on the whatsapp groups and will be mailed to you.
                  </p>
                </div>
              </div>
              <div className="mb-2 flex justify-between items-center w-full right-timeline animate-fade-left animate-once animate-normal animate-delay-[2000ms]">
                <div className="order-4 w-5/12" />
                  <div className="order-4  w-5/12 px-1 py-4 text-left">
                    <p className="mb-2 text-base text-yellow-300">6-9 May, 2021</p>
                    <h4 className="mb-2 font-bold text-lg md:text-2xl">Participation</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Participate online. The links for your registered events will be sent to you via email and whatsapp
                      groups. Use those links and show your talent.
                    </p>
                    </div>
                </div>
              </div>
              <div className="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline animate-fade-right animate-once animate-delay-[2000ms]">
                <div className="order-5 w-5/12" />
                  <div className="order-5 w-5/12 px-1 py-4 text-right">
                    <p className="mb-2 text-base text-yellow-300">1-6 May, 2021</p>
                    <h4 className="mb-2 font-bold text-lg md:text-2xl">Registration</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Pick your favourite event and register in that event by filling the form corresponding to that
                      event. Its that easy
                    </p>
                  </div>
              </div>
              <div className="mb-2 flex justify-between items-center w-full right-timeline animate-fade-left animate-once animate-normal animate-delay-[2000ms]">
                <div className="order-6 w-5/12" />
                  <div className="order-6  w-5/12 px-1 py-4 text-left">
                    <p className="mb-2 text-base text-yellow-300">6-9 May, 2021</p>
                    <h4 className="mb-2 font-bold text-lg md:text-2xl">Participation</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Participate online. The links for your registered events will be sent to you via email and whatsapp
                      groups. Use those links and show your talent.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>

*/