import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

function Header({ toggleTheme, theme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full dark:bg-bg-primary/50 dark:text-text-primary backdrop-blur-md">
      <div
        className="container py-5 mx-auto"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="container mx-auto max-w-screen-xl hidden h-20 items-center md:flex justify-between">
          <Link to={"/"} className="hidden text-2xl font-bold md:inline-block">
            Angela GM<span className="text-teal-500">;</span>
          </Link>
          <div className="flex justify-end">
            <div className="flex gap-6 items-center cursor-pointer ">
              <Link to="/">
                <div className="transition ease-in-out delay-120 duration-300 dark:hover:text-teal-500 hover:text-teal-500  hover:-translate-y-2">
                  Home
                </div>
              </Link>
              <Link               
                to="/projects"
              >
                <div className="transition ease-in-out delay-120 duration-300 dark:hover:text-teal-500 hover:text-teal-500  hover:-translate-y-2">Proyectos</div>
                
              </Link>

              <Link
                
                to="/about"
              >
                <div className="transition ease-in-out delay-120 duration-300 dark:hover:text-teal-500 hover:text-teal-500  hover:-translate-y-2">About</div>
                
              </Link>
              <Link
                
                to="/contact"
              ><div className="transition ease-in-out delay-120 duration-300 dark:hover:text-teal-500 hover:text-teal-500  hover:-translate-y-2">Contacto</div>
                
              </Link>
              <a
                
                href="https://medium.com/@angelagmGM"
                target="_blank"
              >
                <div className="transition ease-in-out delay-120 duration-300 dark:hover:text-teal-500 hover:text-teal-500  hover:-translate-y-2" >Blog</div>
                
              </a>
            </div>
            <button
              className="ml-1 font-bold py-2 px-3 rounded dark:text-white text-2xl transition ease-in-out delay-120 duration-300 dark:hover:text-teal-500 hover:text-teal-500 hover:-translate-y-2 "
              onClick={toggleTheme}
            >
              {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
