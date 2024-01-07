import './stylesheets/App.css';
import { CampoTestimonio1 } from './componentes/test1/campotestimonio.jsx';
import { CampoTestimonio2 } from './componentes/test2/campotestimonio.jsx';
import { BrowserRouter, Routes, Route, Navigate } from  'react-router-dom';
import { Error404 } from './componentes/error404/error404.jsx';
import { Inicio } from './componentes/home/inicio.jsx' ;
import React from 'react';
import { Link,Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from '@nextui-org/react';
import {Logo} from './imgTest/Logo.jsx';
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from './imgTest/Icons.jsx';
import { Rating } from './componentes/pruebaSlider/pruebaSlider.jsx';

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
    <Navbar
      shouldHideOnScroll
      className='bg-default-999'
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <Logo />
          <p className='font-bold text-primary-50'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        
        <NavbarBrand>
          <Logo />
          <p className='font-bold text-primary-50'>ACME</p>
        </NavbarBrand>

        <NavbarItem>
          <Link key='home' href='/' className='text-default-100'>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='*' className='text-default-100'>
            Sobre mi
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='text-default-100 p-0 bg-transparent data-[hover=true]:bg-transparent'
                endContent={icons.chevron}
                radius='sm'
                variant='light'
              >
                Proyectos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='ACME Proyectos'
            className='w-[340px]'
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key='Pagina de error 404'
              description='Pagina donde se entrena un poco de enrutamientos y manejo de css'
              href='*'
            >
              <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de error 404
              </Link>
            </DropdownItem>
            <DropdownItem
              key='Primera Edicion'
              description='Pagina de testimonio de primera edicion, donde se maneja props llamadas del json y manejo de css'
              href='/testimonio1'
            >
              <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de testimonio
              </Link>
            </DropdownItem>
            <DropdownItem
              key='Primera Segunda'
              description='Pagina de testimonio de segunda edicion, donde se maneja props llamadas del json y manejo de css'
              href='/testimonio2'
            >
              <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de testimonio
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='text-default-100 p-0 bg-transparent data-[hover=true]:bg-transparent'
                endContent={icons.chevron}
                radius='sm'
                variant='light'
              >
                Sona de Pruebas
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='ACME Proyectos'
            className='w-[340px]'
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
                key='Primera Segunda'
                description='Pagina de pruebas'
                href='/pruebaslider'
              >
                <Link class='flex-1 text-small font-normal truncate'>
                  Prueba Slider
                </Link>
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href='/contacto' className='text-success-500'>
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem justify='center'>

          <Link size='lg' key='home' href='/' className='text-default-0 w-full'>
            Inicio
          </Link>

          <Link size='lg' href='*' className='text-default-0 w-full'>
            Sobre mi
          </Link>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className='text-default-0 p-0 bg-transparent data-[hover=true]:bg-transparent'
                  endContent={icons.chevron}
                  radius='sm'
                  variant='light'
                  size='lg'
                >
                  Proyectos
                </Button>
              </DropdownTrigger>
            </NavbarItem>

            <DropdownMenu
              aria-label='ACME features'
              className='w-[260px]'
              itemClasses={{
              base: 'gap-4',
              }}
            >
              <DropdownItem
                key='Pagina de error 404'
                description='Pagina donde se entrena un poco de enrutamientos y manejo de css'
                href='*'
              >
                <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de error 404
                </Link>
              </DropdownItem>
              <DropdownItem
                key='Primera Edicion'
                description='Pagina de testimonio de primera edicion, donde se maneja props llamadas del json y manejo de css'
                href='/testimonio1'
              >
                <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de testimonio
                </Link>
              </DropdownItem>
              <DropdownItem
                key='Primera Segunda'
                description='Pagina de testimonio de segunda edicion, donde se maneja props llamadas del json y manejo de css'
                href='/testimonio2'
              >
                <Link class='flex-1 text-small font-normal truncate'>
                  Pagina de testimonio
                </Link>
              </DropdownItem>
              <DropdownItem
                key='Primera Segunda'
                description='Pagina de pruebas'
                href='/pruebaslider'
              >
                <Link class='flex-1 text-small font-normal truncate'>
                  Prueba Slider
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
      </NavbarMenu>
      
    </Navbar>
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={<Inicio /> }/>
            <Route path='/testimonio1' element={<CampoTestimonio1 />} />
            <Route path='/testimonio2' element={<CampoTestimonio2 />} />
            <Route path='/pruebaslider' element={<Rating />} />
            <Route path='/cards' element={<Navigate to='/' />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
      </BrowserRouter>
  </header>
  );
}