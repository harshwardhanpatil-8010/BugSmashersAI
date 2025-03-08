import { useContext } from "react";

import { Moon, Sun } from "lucide-react"; // Install lucide-react for icons
import { DarkModeContext } from "./Dark-mode-context";

const DarkModeToggle = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) return null;
  const { isDarkMode, toggleDarkMode } = darkModeContext;

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg transition duration-300 bg-gray-200 dark:bg-gray-800"
    >
      {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
    </button>
  );
};

export default DarkModeToggle;
