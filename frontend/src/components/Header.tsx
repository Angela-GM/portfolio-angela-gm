import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

function Header({ toggleTheme, theme }: HeaderProps) {
  return (
      <header className="sticky top-0 z-40 w-full dark:bg-bg-primary/50 dark:text-text-primary backdrop-blur-md">
          <div className="container py-5 mx-auto" style={{ opacity: 1, transform: "none" }}>
              <div className="hidden h-20 items-center md:flex justify-between">
                  <p className="hidden text-2xl font-bold md:inline-block">Angela GM</p>
                  <div className='flex justify-end'>


                  <div className="flex gap-6 items-center cursor-pointer">
                      <Link to="/">Home</Link>
                      <Link to="/projects">Proyectos</Link>
                      <Link to="/blog">Blog</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contacto</Link>
                  </div>
                  <button
                      className="font-bold py-2 px-3 rounded dark:text-white text-2xl"
                      onClick={toggleTheme}
                      >
                      {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
                  </button>
                    </div>
              </div>
          </div>
      </header>
  );
}
export default Header;
