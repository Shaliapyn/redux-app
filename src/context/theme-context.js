import React from 'react'

export const themes = {
    dark: {
        color: "white",
        backgroundColor:"#1a1a1a",
        fontWeight: "bold"
    },
    light: {
        color: "black",
        backgroundColor: "#d6d2d2",
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext;