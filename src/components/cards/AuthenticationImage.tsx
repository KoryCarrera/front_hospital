import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  Alert,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './CSS/AuthenticationImage.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { loginSchema } from '../../schemas/userSchema';
import type { LoginInput } from '../../schemas/userSchema';
import { api } from '../../api/axiosconfig';
import { useNavigate } from 'react-router-dom';
import { IconAlertCircle } from '@tabler/icons-react';

export function AuthenticationImage() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: LoginInput) => {
      const response = await api.post('/auth/login', data);
      return response;
    },
    onSuccess: (res: any) => {
      localStorage.setItem('userInfo', JSON.stringify(res.data.data.user));
      console.log(`Login valido, bienvenido: ${res.data.data.user.username}`);
      navigate('/dashboard')
    },
    onError: (error: any) => {
      console.error(`Ha ocurrido un error a la hora de loguearse ${error.response?.data?.message}`)
    }
  });

  const onSubmit = (data: LoginInput) => {
    mutation.mutate(data)
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form}>
        <Title order={2} className={classes.title}>
          ¡Bienvenido de vuelta al sistema!
        </Title>
        {mutation.isError && (
          <Alert variant="light" color="red" title="Error" icon={<IconAlertCircle />} mb="md">
            Credenciales inválidas, revise sus datos.
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Tu nombre de usuario"
            placeholder="elMejorSistema123"
            size="md"
            radius="md"
            {...register('username')}
            error={errors.username?.message}
          />

          <PasswordInput
            label="Contraseña"
            placeholder="Tu contraseña super secreta"
            mt="md"
            size="md"
            radius="md"
            {...register('password')}
            error={errors.password?.message}
          />

          <Button
            fullWidth
            type="submit"
            mt="xl"
            size="md"
            radius="md"
            loading={mutation.isPending}
            >
            Iniciar
          </Button>
        </form>

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