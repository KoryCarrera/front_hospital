import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres'),
  password: z.string().min(5, 'La contraseña es muy corta'),
});

export const registerSchema = z.object({
  nombre_completo: z.string().min(6, '¡Nombre debe ser completo y tener minimo 6 caracteres!'),
  username: z.string().min(5, '¡El nombre de usuario debe tener mas de 5 caracteres!'),
  password: z.string().min(5, '¡Contraseña demasiado corta! Esfuerzate un poco más')
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>