import { TfiGithub, TfiLinkedin} from 'react-icons/tfi'
function Home() {
  return (
    <div className="container min-h-screen2 mx-auto max-w-screen-xl dark:bg-bg-primary dark:text-text-primary overflow-y-hidden">
      <div className="flex flex-row w-full justify-between items-center my-6">
        <div className="w-1/2">
          <h1 className="font-bold text-5xl">Hola, soy Angela GM;</h1>
          <h2 className="text-teal-500 font-semibold text-2xl">FullStack Developer;</h2>
          <p>
            Tras descubrir mi pasión en la programación, busco incansablemente crear aplicaciones que fusionen la creatividad y la tecnología para resolver desafíos significativos. Mi objetivo es contribuir al mundo con soluciones innovadoras y impactantes.
          </p>
          <a href='https://github.com/Angela-GM' target='_blank'><TfiGithub /></a>
          <a href='https://www.linkedin.com/in/angela-garcia-mu/' target='_blank'><TfiLinkedin /></a>
          <a href="../../../public/cv-angela-garcia-fullstack.pdf" download="cv-angela-gm-dev-fullstack.pdf">
  <button>CV</button>
</a>
        </div>
        <div>
          <img src="./../../../public/image-dev.svg" alt="image computer programming" />
        </div>
      </div>
    </div>
  );
}

export default Home;
