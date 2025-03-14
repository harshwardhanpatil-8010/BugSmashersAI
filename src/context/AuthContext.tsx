import { createContext, useState, ReactNode } from "react";
import axios from "axios";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        const res = await axios.post("https://code-reviewer-backend-production.up.railway.app/api/auth/login", { email, password });
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
