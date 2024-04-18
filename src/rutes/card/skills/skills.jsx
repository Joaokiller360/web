export const Skills = () => {

    const HobbiesArea = [
      { key: '1', texto: 'Archivador' },
      { key: '2', texto: 'Aprendizaje y adaptación rápido'},
      { key: '3', texto: 'Digitador' },
      { key: '4', texto: 'Modelado de páginas web' },
      { key: '5', texto: 'Servicio al cliente' },
      { key: '6', texto: 'Servicio de Chofer Profecional' },
      { key: '7', texto: 'Programador Aficionado' },
    ]
  
    return (<div className='pb-3'>
     <p className='leading-relaxed mb-3 text-white text-center'>Habilidades:</p>
        <ul className='text-base text-white'>
          {HobbiesArea.map((item) => (
            <li className='cursor-default transition delay-75 rounded-xl px-5 hover:underline hover:bg-gray-700' key={item.key}>
              {item.texto}
            </li>
          ))}
        </ul>
    </div>);
  }