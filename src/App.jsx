import './stylesheets/App.css';
import { CampoTestimonio } from './componentes/testimonio/campotestimonio';
import { BrowserRouter, Routes, Route, Navigate } from  'react-router-dom';
import { Error404 } from './componentes/error404/error404.jsx';
import { Inicio } from './componentes/home/inicio.jsx' ;

import React from 'react';
import {
  Link,
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu
} from '@nextui-org/react';
import {Logo} from './imgTest/Logo.jsx';
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from './imgTest/Icons.jsx';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  const icons = {
    chevron: <ChevronDown fill='currentColor' size={16} />,
    scale: <Scale className='text-warning' fill='currentColor' size={30} />,
    lock: <Lock className='text-success' fill='currentColor' size={30} />,
    activity: <Activity className='text-secondary' fill='currentColor' size={30} />,
    flash: <Flash className='text-primary' fill='currentColor' size={30} />,
    server: <Server className='text-success' fill='currentColor' size={30} />,
    user: <TagUser className='text-danger' fill='currentColor' size={30} />,
  };
  

  return (
    <header>
    <Navbar className='bg-default-999' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Logo />
          <p className='font-bold text-primary-50'>ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-10' justify='center'>
        <NavbarItem>
          <Link href='/' className='text-primary-50'>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='*' className='text-primary-50'>
            Sobre Mi
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='text-primary-50 p-0 bg-transparent data-[hover=true]:bg-transparent'
                endContent={icons.chevron}
                radius='sm'
                variant='light'
              >
                Proyectos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='ACME features'
            className='w-[340px]'
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key='Pagina de error 404'
              description='Pagina donde se entrena un poco de enrutamientos y manejo de css'
              startContent={icons.scale}
              href='*'
            >
              <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de error 404
              </Link>
            </DropdownItem>
            <DropdownItem
              key='Pagina de testimonio'
              description='Pagina donde se maneja props llamadas del json y manejo de css'
              startContent={icons.activity}
              href='/testimonio'
            >
              <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de testimonio
              </Link>
            </DropdownItem>
            <DropdownItem
              key='production_ready'
              description='ACME runs on ACME, join us and others serving requests at web scale.'
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key='99_uptime'
              description='Applications stay on the grid with high availability and high uptime guarantees.'
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key='supreme_support'
              description='Overcome any challenge with a supporting team ready to respond.'
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
            <DropdownItem
              key='supreme_support'
              description='Overcome any challenge with a supporting team ready to respond.'
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
            <DropdownItem
              key='supreme_support'
              description='Overcome any challenge with a supporting team ready to respond.'
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href='' className='text-success-500'>
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={<Inicio /> }/>
            <Route path='/testimonio' element={<CampoTestimonio />} />
            <Route path='/cards' element={<Navigate to='/' />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
      </BrowserRouter>
  </header>
  );
}