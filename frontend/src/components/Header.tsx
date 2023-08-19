import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full dark:bg-bg-primary/50 dark:text-text-primary backdrop-blur-md">
      <div className="container py-5" style={{ opacity: 1, transform: "none" }}>
        <div className="hidden h-20 items-center md:flex justify-between px-3">
          <p className="hidden text-2xl font-bold md:inline-block">Angela GM</p>

          <div className="flex gap-6 items-center cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contacto</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
