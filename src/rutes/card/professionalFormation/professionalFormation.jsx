export const ProfessionalFormation = () => {

  const ProfessionalFormation = [
    { key: '1', texto: 'Unidad Educativa Fiscomisional “MARIA AUXILIADORA”' },
    { key: '2', texto: 'Sindicatos Obreros Del Volante De Esmeraldas' },
  ]
  return (<div className='px-5 pb-3'>
    <p className='leading-relaxed mb-3 text-white text-center'>Formación Profecional</p>
      <ul className='text-base text-white'>
        {ProfessionalFormation.map((item) => (
          <li className='hover:underline cursor-default py-1 transition delay-75 rounded-xl hover:bg-gray-700' key={item.key}>
            {item.texto}
          </li>
        ))}
      </ul>
  </div>);
}