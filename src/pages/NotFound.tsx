
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ButtonGlow from "@/components/ui/ButtonGlow";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowLeft, Code } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-radial from-blue-50 to-white p-6">
      <GlassCard className="max-w-md w-full text-center py-12 px-6">
        <div className="flex justify-center mb-6">
          <Code className="h-16 w-16 text-primary/80" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        
        <Link to="/">
          <ButtonGlow className="flex items-center mx-auto space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </ButtonGlow>
        </Link>
      </GlassCard>
    </div>
  );
};

export default NotFound;
