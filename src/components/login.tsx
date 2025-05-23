import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const authContext = useContext(AuthContext);
    const { toast } = useToast();
    const navigate = useNavigate(); 

    if (!authContext) return null;

    const { login } = authContext;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.email || !form.password) {
            toast({
                variant: "destructive",
                title: "All fields are required",
                description: "Please fill in all fields",
                duration: 3000,
            });
            return;
        }
        
        setIsLoading(true);
        try {
            await login(form.email, form.password);
            navigate("/review"); 
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-apple-gray page-transition">
           <div>
            <span>
            <h1 className="text-4xl font-bold text-cyan-500">Welcome Back!</h1>
            </span>
           </div>
            <div className="mb-4">
              <span>
                <h1 className="text-3xl font-bold text-gray-900">Login </h1>
                      </span>
            </div>
            
            <div className="auth-card">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="auth-input"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                        
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="auth-input"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="auth-button group relative overflow-hidden"
                        disabled={isLoading}
                    >
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-white opacity-0 group-hover:opacity-10 group-active:opacity-20"></span>
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
                
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-apple-blue hover:underline transition-all">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
            
            <div className="mt-8 text-gray-400 text-sm animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                <p>© {new Date().getFullYear()}  All rights reserved.</p>
            </div>
        </div>
    );
};

export default Login;
