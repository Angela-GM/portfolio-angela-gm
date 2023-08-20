import { AxiosResponse } from "axios";
import { useEffect, useState } from "react"
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
  const [angela, setAngela] = useState<Angela[]>([])

useEffect(() => {
    // Definir una función asincrónica dentro del useEffect para poder usar 'await'
    const fetchAngela = async () => {
      try {
        const response: AxiosResponse = await getAllInfoAngela();
        console.log(response.data[0]);
        setAngela(response.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      } 
    };
   
    fetchAngela()
    console.log(angela)
  }, []);
  
  return (
<div className="container min-h-screen2 h-screen mx-auto max-w-screen-xl dark:bg-bg-primary dark:text-text-primary">
  About Me
    </div>
  )
}

export default AboutMe