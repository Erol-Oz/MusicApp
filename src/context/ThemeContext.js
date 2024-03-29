// Dark Mode & Light Mode

import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const values = {
        theme,
        setTheme,
    }
    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);
