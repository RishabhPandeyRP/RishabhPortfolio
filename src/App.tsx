import { Toaster } from "react-hot-toast"

//import Footer from "./components/Footer"
//import NavBar from "./components/NavBar"

import { lazy, Suspense, useEffect, useState } from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
//@ts-ignore
import { project_arr } from "../src/project_arr"  
//@ts-ignore
import { project_arr } from "../src/project_arr"


//import UltimateHome from "./components/UltimateHome"
//import Project1 from "./components/projects/Project1"

// import lexiImage from "./assets/Screenshot 2024-05-16 112318.png"
// import inkspire from "./assets/Screenshot 2024-05-16 141539.png"
import { Navigate } from "react-router-dom"

const Project1 = lazy(() => import("./components/projects/Project1"))
const UltimateHome = lazy(() => import("./components/UltimateHome"))
const NavBar = lazy(() => import("./components/NavBar"))
const Footer = lazy(() => import("./components/Footer"))


function App() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    window.scrollTo(0,0);
    if (localStorage.getItem("theme") != null) {
      //@ts-ignore
      setTheme(localStorage.getItem("theme"));
    }
  }, [])



  function changeTheme() {
    if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark")
    }
    else {
      setTheme("light");
      localStorage.setItem("theme", "light")
    }
  }

  // project details
  // let project_arr = [{
  //   image: lexiImage,
  //   title: "LexiToken",
  //   overview1: `Lexitoken is a software application designed to analyze the structure of computer programs. It separates the program into individual words, characters, and punctuation marks, and then labels them based on their function (like reserved words or operators). This process, called tokenization, is a foundational step for many program analysis tasks.`,

  //   overview2: `Lexitoken works for code written in C, C++, Python, and Java. Users can paste or upload their code, and Lexitoken will break it down into its basic components. This can help programmers understand the code better, identify errors, or even modify the code in some way. The application itself is web-based, so it can be accessed from any standard web browser.`,

  //   overview3: `Overall, Lexitoken is a valuable tool for developers and programmers. It can simplify code analysis, improve comprehension, and even assist with debugging. By providing a clear view of the program's structure, Lexitoken empowers developers to work more effectively with their code.`,

  //   skill_arr: ["HTML", "Javascript", "Tailwind CSS", "RegEx"],
  //   proj_link: "https://github.com/RishabhPandeyRP/Lexitokens"


  // }, {
  //   image: inkspire,
  //   title: "InkSpire",
  //   overview1: `This project is a social blogging web application designed to connect writers and readers worldwide. Users can sign up for free to create an account and explore a vast collection of articles on diverse topics. Whether you're passionate about sharing your knowledge or simply enjoy discovering new perspectives, this platform caters to everyone.`,

  //   overview2: `The application offers a user-friendly experience with separate sections for writers and readers. Writers can create and publish articles, while their dashboard allows them to manage their existing content. Readers can delve into a continuous stream of articles using the innovative infinite scrolling feature. This ensures a smooth browsing experience by loading only a few articles at a time, preventing the page from becoming overwhelmed.`,

  //   overview3: `Security and performance are paramount for this application. Zod, a powerful validation tool, is implemented during login and signup to safeguard against potential attacks. This ensures a safe and reliable experience for all users.`,

  //   skill_arr: ["React", "Javascript", "Tailwind CSS", "Typescript", "postgresQL", "Hono", "Prisma", "Zod"],

  //   proj_link: "https://github.com/RishabhPandeyRP/InkSpire"


  // }]


  return (
    <div className=" overscroll-x-hidden">
      <Toaster></Toaster>
      <Suspense>
        <NavBar func={changeTheme} theme={theme}></NavBar>

        <Routes>
          <Route path="/" element={<UltimateHome theme={theme}></UltimateHome>}></Route>
          <Route path="/project-1" element={<Project1 details={project_arr[0]} theme={theme} skill_arr={project_arr[0].skill_arr}></Project1>}></Route>
          <Route path="/project-2" element={<Project1 details={project_arr[1]} theme={theme} skill_arr={project_arr[1].skill_arr}></Project1>}></Route>
          <Route path="/project-3" element={<Project1 details={project_arr[2]} theme={theme} skill_arr={project_arr[2].skill_arr}></Project1>}></Route>
          <Route path="/project-4" element={<Project1 details={project_arr[3]} theme={theme} skill_arr={project_arr[3].skill_arr}></Project1>}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer></Footer>
      </Suspense>
    </div>
  )
}

export default App
