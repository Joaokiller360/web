export const HobbiesArea = () => {

  const HobbiesArea = [
    { key: '1', texto: 'Música' },
    { key: '2', texto: 'Tecnologia' },
    { key: '3', texto: 'Fotografia' },
    { key: '4', texto: 'Programación' },
  ]

  return (<div className='pb-3'>
   <p className='leading-relaxed mb-3 text-white text-center'>Hobbies:</p>
      <ul className='text-base text-white'>
        {HobbiesArea.map((item) => (
          <li className='cursor-default px-5 transition delay-75 rounded-xl hover:bg-gray-700' key={item.key}>
            {item.texto}
          </li>
        ))}
      </ul>
  </div>);
}