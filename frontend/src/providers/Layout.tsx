import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import Header from '../components/Header';

type Props = {
    children: React.ReactNode
}

function Layout({children}: Props) {
    const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={`bg-white dark:bg-bg-primary ${theme}`}>
    <Header toggleTheme={toggleTheme} theme={theme} />
    {children}
</div>

  )
}

export default Layout