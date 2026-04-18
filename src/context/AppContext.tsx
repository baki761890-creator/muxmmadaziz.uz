import { createContext, useContext, useEffect, useState } from "react";

type Lang = "uz" | "ru" | "en" | "de";

type AppContextType = {
  // 🌙 THEME
  dark: boolean;
  setDark: (value: boolean) => void;
  toggleTheme: () => void;

  // 🌐 LANGUAGE
  lang: Lang;
  setLang: (lang: Lang) => void;
  changeLang: (lang: Lang) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  
  // 🌙 DARK MODE
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    localStorage.setItem("theme", "dark");
    return true;
  });

  // 🌐 LANGUAGE
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "uz";
  });

  // 🌙 APPLY DARK MODE
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

  // 🌐 SAVE LANGUAGE
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // 🔁 TOGGLE THEME
  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  // 🔁 CHANGE LANGUAGE
  const changeLang = (newLang: Lang) => {
    setLang(newLang);
  };

  return (
    <AppContext.Provider
      value={{
        dark,
        setDark,
        toggleTheme,
        lang,
        setLang,
        changeLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 🧠 CUSTOM HOOK
export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
};