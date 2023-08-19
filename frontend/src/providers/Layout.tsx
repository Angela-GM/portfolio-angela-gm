import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import {MdDarkMode, MdLightMode} from 'react-icons/md';

type Props = {
    children: React.ReactNode
}

function Layout({children}: Props) {
    const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={`bg-white dark:bg-bg-primary ${theme}`}>
      <div className="flex justify-end">
        <button
          className="font-bold py-2 px-3 rounded dark:text-white text-2xl"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
      {children}
    </div>

  )
}

export default Layout