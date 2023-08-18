

function Header() {
  return (
    <header className="stiky top-0 z-40 w-full dark:bg-bg-primary/50 dark:text-text-primary backdrop-blur-md">
      <div className="container py-5" style={{ opacity: 1, transform: "none" }}>
        <div className="hidden h-20 items-center md:flex justify-between px-3">
          
            <p className="hidden text-2xl font-bold md:inline-block">
              Angela GM
            </p>
          
          <div className="flex gap-6 items-center cursor-pointer">

            <p>Home</p>
            
          
            
              <p>Projects</p>
            
   
              <p>Blog</p>
          
           
              <p>About</p>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
