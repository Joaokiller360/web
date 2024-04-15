import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";

import './index.css'

import App from './App.jsx'

//Funcionamiento del select de traduccion
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

//Metricas
import { SpeedInsights } from "@vercel/speed-insights/react"

//Archivos json para los idiomas
import global_es from './componentes/translate/es-latam/global.json';
import global_en from './componentes/translate/en-usa/global.json';
import global_fr from './componentes/translate/fr-frances/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <I18nextProvider i18n={i18next}>
        <App />
        <SpeedInsights />
      </I18nextProvider>
    </NextUIProvider>
  </React.StrictMode>
)