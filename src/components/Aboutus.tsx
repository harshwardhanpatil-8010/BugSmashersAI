import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          About Us
        </h1>
        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          Welcome to our AI-powered code reviewer platform, designed to enhance code quality, 
          identify potential bugs, and maintain coding standards. Our intelligent system 
          analyzes your code with precision, offering insightful suggestions and 
          optimizations to streamline development.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
      >
        <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur">
          <CardContent>
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
            >
              Code Quality Analysis
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Our AI reviews code for best practices, ensuring efficiency, readability, 
              and adherence to industry standards.
            </p>
          </CardContent>
        </Card>
        <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur">
          <CardContent>
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent"
            >
              Bug Detection & Optimization
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Identify potential issues before they impact your project, with AI-driven 
              suggestions for improved performance and security.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutUs;
