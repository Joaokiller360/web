import './error404.css';

export function Error404 () {
    return (
      <>
        <div id='eror'>
          <p id='error'>E<span>r</span><span className='hol'>r</span><span>o</span>r</p>
          <p id='code'>4<span>0</span>4</p>
          <a href='/' class='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg #0F172A focus:ring-4 border-white hover:border-gray-400 border-4'>
            Volver a inicio
            <svg class='w-5 h-5 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
          </a>
        </div>
      </>
    )
}