import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getAllInfoAngela } from "../services/lib/angela";

interface Contact {
  _id: string;
  type: string;
  value: string;
}

interface Study {
  _id: string;
  name: string;
  date: string;
  place: string;
  description: string;
}

interface Skills {
  programmingLang: string[];
  frameworks: string[];
  libraries: string[];
  backend: string[];
  databases: string[];
  testing: string[];
  tools: string[];
  others: string[];
}

interface Languages {
  spanish: string;
  english: string;
  catalan: string;
}

interface Angela {
  _id: string;
  name: string;
  surname: string;
  contact: Contact[];
  aboutme: string;
  photo: string;
  skills: Skills;
  languages: Languages;
  studies: Study[];
}

function AboutMe() {
  const [angela, setAngela] = useState<Angela | null>(null);

  useEffect(() => {
    // Definir una función asincrónica dentro del useEffect para poder usar 'await'
    const fetchAngela = async () => {
      try {
        const response: AxiosResponse = await getAllInfoAngela();
        console.log(response.data[0]);
        setAngela(response.data[0]);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchAngela();
  }, []);

  // Borrar este useEffect cuando haya imprimito el objeto 'angela'
  // useEffect(() => {
  //   console.log(angela);
  // }, [angela]);

  return (
    <div className="container mx-auto max-w-screen-xl dark:bg-bg-primary dark:text-text-primary m-auto flex flex-col ">
      <div>
        <div className="flex flex-row items-center justify-around">
          <div>
            <img
              className="h-64 w-64 object-cover grayscale rounded-full"
              src={angela?.photo}
              alt="Angela GM"
            />
          </div>
          <div className="w-1/2 mt-10">
            <h1 className="font-bold text-5xl mb-8">About me<span className="text-teal-500"> ;</span></h1>
            <p>{angela?.aboutme}</p>
          </div>
        </div>
        <div></div>
        <h2 className="font-semibold text-2xl my-16">Estudios</h2>
        {angela?.studies.map((study) => (
          <ul>
            <li key={study._id}>
              <small>{study.date}</small>
              <h3>
                {study.name} en {study.place}
              </h3>
              <p>{study.description}</p>
            </li>
          </ul>
        ))}
      </div>

      <div>
        <h2 className="font-semibold text-2xl my-16">Mi Stack</h2>
        <h3>Lenguajes de programación</h3>
        {angela?.skills.programmingLang.map((lang) => (
          <ul>
            <li>{lang}</li>
          </ul>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg my-8">Frameworks Front</h3>
        {angela?.skills.frameworks.map((framework) => (
          <ul>
            <li>{framework}</li>
          </ul>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg my-8">Librerías</h3>
        {angela?.skills.libraries.map((library) => (
          <ul>
            <li>{library}</li>
          </ul>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg my-8">Backend</h3>
        {angela?.skills.backend.map((backend) => (
          <ul>
            <li>{backend}</li>
          </ul>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg my-8">Bases de datos</h3>
        {angela?.skills.databases.map((database) => (
          <ul>
            <li>{database}</li>
          </ul>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg my-8">Testing</h3>
        {angela?.skills.testing.map((test) => (
          <ul>
            <li>{test}</li>
          </ul>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg my-8">Herramientas</h3>
        {angela?.skills.tools.map((tool) => (
          <ul>
            <li>{tool}</li>
          </ul>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg my-8">Otras</h3>
        {angela?.skills.others.map((other) => (
          <ul>
            <li>{other}</li>
          </ul>
        ))}
      </div>

      <div>
        <h2 className="font-semibold text-2xl my-16">Idiomas</h2>
        <ul>
          <li>Español: {angela?.languages.spanish}</li>
          <li>Inglés: {angela?.languages.english}</li>
          <li>Catalán: {angela?.languages.catalan}</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
