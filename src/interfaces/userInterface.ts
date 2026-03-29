export interface User {
    id: number,
    username: string,
    rol: 'administrador' | 'operativo' | 'pendiente'
};

export interface authContextType {
    user: User | null;
    isLoading: boolean
}

export interface Props {
    allowedRoles?: string[]
}