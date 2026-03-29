import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axiosconfig";
import { Loader, Center } from "@mantine/core";
import type { authContextType } from "../interfaces/userInterface";

const AuthContext = createContext<authContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['authUser'],
        queryFn: async () => {
            const response = await api.get('/auth/me');
            return response.data;
        },
        retry: false,
    });

    if (isLoading) {
        return (
            <Center style={{ height: '100vh' }}>
                <Loader color="blue" size="xl" type="dots" />
            </Center>
        );
    }

    return (
        <AuthContext.Provider value={{ user: isError ? null : user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Ha ocurrido un error con el contexto de usuario')
    }
    return context
}
