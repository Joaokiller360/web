import React from 'react'
//Logo
import {Logo} from './imgTest/Logo.jsx';

//Next Ui
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from './imgTest/Icons.jsx';
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from '@nextui-org/react';

//Rutas
import { CampoTestimonio1 } from './rutes/test1/campotestimonio.jsx';
import { CampoTestimonio2 } from './rutes/test2/campotestimonio.jsx';
import { Inicio } from './rutes/home/inicio.jsx';

//Componente
import { Error404 } from './componentes/error404/error404.jsx';
import { Footer } from './componentes/footer/footer.jsx';

//React Dom
import { BrowserRouter, Routes, Route, Navigate } from  'react-router-dom';

//Importacion de menu tailwindUi
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

const proyectos = [
  { name: 'Testimonio 1', description: 'Get a better understanding of your traffic', href: '/testimonio1' },
  { name: 'Testimonio 2', description: 'Speak directly to your customers', href: '/testimonio2' },
]
const callsToAction = [
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'Contactanos', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function App() {
  /*const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill='currentColor' size={16} />,
    scale: <Scale className='text-warning' fill='currentColor' size={30} />,
    lock: <Lock className='text-success' fill='currentColor' size={30} />,
    activity: <Activity className='text-secondary' fill='currentColor' size={30} />,
    flash: <Flash className='text-primary' fill='currentColor' size={30} />,
    server: <Server className='text-success' fill='currentColor' size={30} />,
    user: <TagUser className='text-danger' fill='currentColor' size={30} />,
  };*/

  /*const router = createBrowserRouter([
    {
      path: '/',
      element: <Inicio />,
    },
    {
      path: path='/login',
      element: <Login />,
    },
    {
      path: path='/testimonio1',
      element: <CampoTestimonio1 />,
    },
    {
      path: path='/testimonio2',
      element: <CampoTestimonio2 />,
    },
    {
      path: path='*',
      element: <Error404 />,
    },
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
      ],
    },
  ]);*/
  
  //Menu TailwindUi
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (<>
    <header className='bg-gray-800'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">JB Multiservicios</span>
            <Logo className="h-8 w-auto"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-white">
            Inicio
          </a>
          <a href="/sobre-mi" className="text-sm font-semibold leading-6 text-white">
            Sobre Mi
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Proyectos
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-28 top-full z-10 mt-3 w-80 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {proyectos.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-800" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#contacto" className="text-sm font-semibold leading-6 text-white">
            Contacto
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">JB Multiservicios</span>
              <Logo className="h-8 w-auto"/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar Menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-800 hover:bg-white">
                  Inicio
                </a>
                <a href="/sobre-mi" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-800 hover:bg-white">
                  Sobre Mi
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:text-gray-800 hover:bg-gray-50">
                        Proyectos
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...proyectos, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:text-gray-800 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#contacto"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-800 hover:bg-gray-50"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={<Inicio /> }/>
            <Route path='/sobre-mi' element={<Inicio /> }/>
            <Route path='/testimonio1' element={<CampoTestimonio1 />} />
            <Route path='/testimonio2' element={<CampoTestimonio2 />} />
            <Route path='/contacto' element={<Navigate to='/#contacto' />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  </header>

  <body className="bg-gray-800">
    <Footer />
  </body>
  </>
  );
}