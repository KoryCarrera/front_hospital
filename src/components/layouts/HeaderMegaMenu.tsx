import {
  Burger,
  Button,
  Drawer,
  Group,
  ScrollArea,
} 
from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './CSS/HeaderMegaMenu.module.css';
import { Link } from 'react-router-dom';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Inicio
            </a>
            <a href="#" className={classes.link}>
              Saber más
            </a>
            <a href="https://github.com/KoryCarrera/front_hospital" target="_blank" className={classes.link}>
              Ver el codigo
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button 
            variant="default"
            component={Link}
            to="/login"
            >Iniciar sesión
            </Button>
            <Button
            component={Link}
            to="/register"
            >
            Registrarse
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Opciones"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">

          <Group justify="center" grow pb="xl" px="md">
            <Button 
            variant="default"
            component={Link}
            to="/login"
            >Iniciar sesión
            </Button>
            <Button
            component={Link}
            to="/register"
            >Registrarse
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}