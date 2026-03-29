import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Alert,
  Title,
} from '@mantine/core';
import classes from './CSS/AuthenticationTitle.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { registerSchema } from '../../schemas/userSchema';
import type { RegisterInput } from '../../schemas/userSchema';
import { api } from '../../api/axiosconfig';
import { useNavigate } from 'react-router-dom';
import { IconAlertCircle } from '@tabler/icons-react';

export function AuthenticationTitle() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationFn: async (payload: RegisterInput & { fecha_registro: any }) => {
      const response = await api.post('/auth/register', payload);
      return response;
    },
    onSuccess: (res: any) => {
      console.log(`Usuario registrado con exito ${res}`);
      setTimeout(() => {navigate('/login');}, 2000)
      
    },
    onError: (err: any) => {
      console.error(`Ha ocurrido un error a la hora de registrar usuario ${err.response.data}`);
    }
  });

  const onSubmit = (data: RegisterInput) => {
    const completData = {
      ...data,
      fecha_registro: new Date()
    }

    mutation.mutate(completData)
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        ¡Bienvenido a la sección de registro!
      </Title>

      <Text className={classes.subtitle}>
        ¿Ya tienes una cuenta?
        <Anchor
          href='/login'
        > Inicia sesión </Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">

        {mutation.isError && (
          <Alert variant="light" color="red" title="Error" icon={<IconAlertCircle />} mb="md">
            Tu nombre de usuario ya esta ocupado!
          </Alert>
        )}

        {mutation.isSuccess && (
          <Alert variant="light" color="green" title="¡Exito!" icon={<IconAlertCircle />} mb="md">
          ¡Te has registrado con exito! Redirigiendote al login.
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Nombre Completo"
            placeholder="Tus Hermosos Nombres Y Apellidos"
            required radius="md"
            {...register('nombre_completo')}
            error={errors.nombre_completo?.message}
          />

          <TextInput
            label="Nombre de Usuario"
            placeholder="tuNombreUsuario18"
            required
            radius="md"
            mt="md"
            {...register('username')}
            error={errors.username?.message}
          />

          <PasswordInput
            label="Password"
            placeholder="TuContrasenaSegura"
            required mt="md"
            radius="md"
            {...register('password')}
            error={errors.password?.message}
          />

          <Button
            type='submit'
            fullWidth
            mt="xl"
            radius="md"
            loading={mutation.isPending}
          >
            Enviar registro
          </Button>
        </form>
      </Paper>
    </Container>
  );
}