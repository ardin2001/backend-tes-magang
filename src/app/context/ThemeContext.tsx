'use client'
import { createContext } from 'react'
import UseStatus from '../hooks/UseStatus'

const ThemeContext = createContext({})
function ThemeContextProvider({ children }: any) {
    const [theme, setTheme] = UseStatus();
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext}
export default ThemeContextProvider