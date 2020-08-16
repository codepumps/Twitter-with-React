import React, { useState, useEffect } from 'react'

export const ColorsContext = React.createContext();

function Colors({ children }) {
    const [theme, setTheme] = useState(null);
    const [textColor, setTextColor] = useState(null);

    useEffect(() => {
        const theme = localStorage.getItem('THEME') || 'light';
        const textColor = localStorage.getItem('COLOR') || 'blue';
        setTheme(theme);
        setTextColor(textColor);
    }, [])

    const handleChangeTheme = (theme) => {
        localStorage.setItem('THEME', theme);
        setTheme(theme);
    }
    const handleChangeColor = (color) => {
        localStorage.setItem('COLOR', color);
        setTextColor(color);
    }

    useEffect(() => {
        if (!theme || !textColor) return;
        const $html = document.querySelector('html');
        $html.className = "";
        $html.classList.add(theme);
        $html.classList.add(textColor)
    }, [theme, textColor])

    return (
        <ColorsContext.Provider value={{ theme, textColor, handleChangeTheme, handleChangeColor }}>
            {children}
        </ColorsContext.Provider>
    )
}

export default Colors
