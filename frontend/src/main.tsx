import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/routes/Home.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import Header from "./components/Header.tsx";
import Layout from "./providers/Layout.tsx";
import Projects from "./components/routes/Projects.tsx";
import Blog from "./components/routes/Blog.tsx";
import AboutMe from "./components/routes/AboutMe.tsx";
import ContactMe from "./components/routes/ContactMe.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes> {/* Define tus rutas dentro de Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />}
             />
             <Route path="/about" element={<AboutMe />} />
             <Route path="/contact" element={<ContactMe />} />
            {/* Define otras rutas aquí */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
