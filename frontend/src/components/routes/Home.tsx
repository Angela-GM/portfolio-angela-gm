function Home() {
  return (
    <div className="container h-screen mx-auto max-w-screen-xl dark:bg-bg-primary dark:text-text-primary ">
      <div className="flex flex-row w-full justify-between items-center my-6  ">
        <div className="w-1/2">
          <h1 className="font-bold text-5xl">Hola, soy Angela GM;</h1>
          <h2 className="text-teal-500 font-semibold text-2xl">FullStack Developer;</h2>
          <p>
            Tras descubrir mi pasión en la programación, busco incansablemente crear aplicaciones que fusionen la creatividad y la tecnología para resolver desafíos significativos. Mi objetivo es contribuir al mundo con soluciones innovadoras y impactantes.
          </p>
        </div>
        <div>
          <img src="./../../../public/image-dev.svg" alt="image computer programming" />
        </div>
      </div>
    </div>
  );
}

export default Home;