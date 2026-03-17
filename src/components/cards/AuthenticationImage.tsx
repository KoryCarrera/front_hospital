import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './CSS/AuthenticationImage.module.css';

export function AuthenticationImage() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form}>
        <Title order={2} className={classes.title}>
          ¡Bienvenido de vuelta al sistema!
        </Title>

        <TextInput label="Tu nombre de usuario" placeholder="elMejorSistema123" size="md" radius="md" />
        <PasswordInput label="Contraseña" placeholder="Tu contraseña super secreta" mt="md" size="md" radius="md" />
        <Button fullWidth mt="xl" size="md" radius="md">
          Iniciar
        </Button>

        <Text ta="center" mt="md">
          ¿No tienes una cuenta?{' '}
          <Anchor href="/register" fw={500}>
            Registrate
          </Anchor>
        </Text>
        <Text ta="center" mt="md">
          ¿Deseas volver?{' '}
          <Anchor href="/" fw={500}>
            Vuelve al inicio
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}