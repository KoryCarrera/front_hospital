import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres'),
  password: z.string().min(5, 'La contraseña es muy corta'),
});

export type LoginInput = z.infer<typeof loginSchema>;