import { Navbar, Footer } from "../../../components";
import { createContext, useEffect } from "react";
import { useLocalStorage } from "./../../";
import "./RouteWrapper.css";

export const ThemeContext = createContext(null);

const EvalTheme = (theme) => {
    const colorProperties =
        theme === "light"
            ? [
                  { name: "--main-color", value: "#FBFBF2" },
                  { name: "--main-color-2", value: "#E5E6E4" },
                  { name: "--text-color", value: "#232323" },
                  { name: "--text-color-2", value: "#4A4A4A" },
                  { name: "--border-color", value: "#313438" },
                  { name: "--border-color-light", value: "#847577" },
                  { name: "--button-color", value: "#c7c7c7" },
              ]
            : [
                  { name: "--main-color", value: "#1f2126" },
                  { name: "--main-color-2", value: "#15171a" },
                  { name: "--text-color", value: "#ffffff" },
                  { name: "--text-color-2", value: "#717171" },
                  { name: "--border-color", value: "#313438" },
                  { name: "--border-color-light", value: "#4c5461" },
                  { name: "--button-color", value: "#4c5461" },
              ];

    colorProperties.forEach((p) => {
        document.documentElement.style.setProperty(p.name, p.value);
    });
};

const RouteWrapper = ({ Component }) => {
    useEffect(() => {
        EvalTheme(theme);
    }, []);

    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const toggleTheme = () => {
        setTheme((curr) => {
            const v = curr === "light" ? "dark" : "light";
            EvalTheme(v);
            return v;
        });
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div id="page-container">
                    <Navbar theme={theme} toggleTheme={toggleTheme} />
                    <div
                        className="main-component-container"
                        id="main-page-container"
                    >
                        {Component}
                        <Footer />
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    );
};

export default RouteWrapper;
