import { createContext, useContext, useEffect, useState } from "react";

type AppContextType = {
  dark: boolean;
  setDark: (value: boolean) => void;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // 🌙 DEFAULT DARK MODE ON
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");

    // agar saved bo‘lsa uni ishlatadi, bo‘lmasa DARK default
    if (saved) return saved === "dark";

    localStorage.setItem("theme", "dark");
    return true;
  });

  // 🔥 apply theme to html root
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // 🔁 toggle function
  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ dark, setDark, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// 🧠 custom hook
export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
};