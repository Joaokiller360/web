import { Timeline } from 'keep-react';

export const TimelineComponent = () => {

  const timelineComponent = [
    { time: '2016 – 2017', title: 'Cyber “Chiriboga”', texto: 'Atención Al Cliente - Cajero - Digitador', key: '1' },
    { time: '2021 - 2022', title: 'Cargoport Cia ltda', texto: 'Servicio de Chofer Profesional en Agencia Naviera', key: '3' },
    { time: '2021 - 2022', title: 'Zanders', texto: 'Servicio de Chofer Profesional en Agencia Naviera', key: '4' },
    { time: '2019 – 2024', title: 'Ab. Ricardo Barre Palacio Ramon', texto: 'Secretario Legal', key: '5' },
    { time: '2022 - 2024', title: 'Tramites En Linea', texto: 'Atención al cliente – Tramites en línea - Municipio En Linea - Registro Civil "En Linea" - Certificados de Agencia Nacional De Tránsito.', key: '6' },
    { time: '2021 - 2024', title: 'Ab. Gertrudys Belarmina Francis Orejuela - Notaria #1', texto: 'Atención al Cliente – Archivador - Digitalizador', key: '7' },
  ]

  return (
    <Timeline timelineBarType='dashed'>
      {timelineComponent.map((item) => (
        <Timeline.Item key={item.key} className='my-2'>
          <Timeline.Point />
          <Timeline.Content className='cursor-default p-2 transition delay-75 rounded-xl hover:bg-gray-700'>
            <Timeline.Time className='text-white'>{item.time}</Timeline.Time>
            <Timeline.Title className='text-white mb-1'>{item.title}</Timeline.Title>
            <Timeline.Body className='text-white !mb-0 text-justify md:pr-10'>
              {item.texto} <br />
              {item.cell}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
