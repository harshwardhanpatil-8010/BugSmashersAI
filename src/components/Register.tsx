
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.name || !form.email || !form.password) {
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
            await axios.post(`${API_BASE_URL}/api/auth/register`, form);
            toast({
                title: "Registration successful",
                description: "Your account has been created",
                duration: 3000,
            });
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
            toast({
                variant: "destructive",
                title: "Registration failed",
                description: "Something went wrong. Please try again.",
                duration: 3000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-apple-gray page-transition">
                     <div className="mb-24">
            <span>
                <h1 className="text-4xl font-bold text-cyan-500">Create your account</h1>
                <h2 className="text-center text-3xl font-semibold ">Join us today</h2>
            </span>
           </div>
            
            <div className="auth-card">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="auth-input"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />
                        
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
                        {isLoading ? "Creating account..." : "Create Account"}
                    </button>
                </form>
                
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-apple-blue hover:underline transition-all">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
            
            <div className="mt-8 text-gray-400 text-sm animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </div>
    );
};

export default Register;
