import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🔥 REAL DARK MODE FIX
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

  return (
    <AppContext.Provider value={{ dark, setDark }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);