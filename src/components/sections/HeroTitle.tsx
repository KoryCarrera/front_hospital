import { Button, Container, Group, Text } from '@mantine/core';
import classes from './CSS/HeroTitle.module.css';
import { Link } from 'react-router-dom';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Un gran{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'violet', to: 'purple' }} inherit>
            Sistema
          </Text>{' '}
          para la gestión de tus medicamentos
        </h1>

        <Text className={classes.description} color="dimmed">
            Un sistema seguro ideal para la gestion de medicamentos a gran escala -
            Automatiza inventarios, orden de medicamentos y su reflejo en stock
        </Text>

        <Group className={classes.controls}>
          <Button
            component={Link}
            to="/register"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'violet', to: 'purple' }}
          >
            Registrarte
          </Button>

          <Button
            component={Link}
            to="/login"
            size="xl"
            variant="default"
            className={classes.control}
          >
            Iniciar
          </Button>
        </Group>
      </Container>
    </div>
  );
}