import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { FaFilePdf } from 'react-icons/fa'
function Home() {
  return (
    <div className="container min-h-screen2 mx-auto max-w-screen-xl dark:bg-bg-primary dark:text-text-primary overflow-y-hidden">
      <div className="flex flex-row w-full justify-between items-center my-6">
        <div className="w-1/2">
          <h1 className="font-bold text-5xl my-4">Hola, soy Angela GM<span className="text-teal-500">;</span></h1>
          <h2 className="text-teal-500 font-semibold text-2xl my-4">
            FullStack Developer;
          </h2>
          <p className="my-4">
            Tras descubrir mi pasión en la programación, busco incansablemente
            crear aplicaciones que fusionen la creatividad y la tecnología para
            resolver desafíos significativos. Mi objetivo es contribuir al mundo
            con soluciones innovadoras y impactantes.
          </p>
          <div className="flex gap-3 text-teal-500 items-center text-2xl">
            <a className=" rounded text-teal-500 p-2 hover:bg-teal-500 hover:text-white transition duration-300" href="https://github.com/Angela-GM" target="_blank">
              <TfiGithub />
            </a>
            <a className=" rounded text-teal-500 p-2 hover:bg-teal-500 hover:text-white transition duration-300"
              href="https://www.linkedin.com/in/angela-garcia-mu/"
              target="_blank"
            >
              <TfiLinkedin />
            </a>
            <a className=" rounded text-teal-500 p-2 hover:bg-teal-500 hover:text-white transition duration-300"
              href="../../../public/cv-angela-garcia-fullstack.pdf"
              download="cv-angela-gm-dev-fullstack.pdf"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
        <div>
          <img
            src="./../../../public/image-dev.svg"
            alt="image computer programming"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
