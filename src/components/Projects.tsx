import lexiImage from "../assets/Screenshot 2024-05-16 112318.png"
import inkspire from "../assets/Screenshot 2024-05-16 141539.png"
import movix from "../assets/Movix.png"
import Buttons from "./Buttons"
//import ModalProject from "./ModalProject"
import { lazy, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

//const ModalProject = lazy(()=>import("./ModalProject"))

//@ts-ignore
const Projects = ({ theme }) => {
    const navigate = useNavigate();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    // const [modalStatus, setModalStatus] = useState(false);

    // function btnHandler() {
    //     console.log("object");
    //     setModalStatus(!modalStatus);
    // }

    // function closeModalHandler(){
    //     setModalStatus(false);
    // }

    let project_arr = [{
        image: movix,
        title: "Movix",
        info: "Movix is a web application that lets users search for movies, view their ratings, and watch trailers all in one place.",
        link: "/project-3"
    },{
        image: lexiImage,
        title: "LexiToken",
        info: "It is a lexical analyzer simulator built for simulating the tokenization process for compilers of various languages.",
        link: "/project-1"
    }, {
        image: inkspire,
        title: "InkSpire",
        info: "It is a social blogging website where you can publish your ideas globally",
        link: "/project-2"
    }]
    return (
        theme == "light" ? <div id="projects" className=" border-red-700">
            <div className=" mt-36">
                <p className=" w-fit mx-auto font-sans text-5xl font-semibold mt-10 my-6 xs:text-2xl">
                    PROJECTS
                </p>

                <div className=" w-[50px] h-[7px] rounded-lg bg-[#7843E9] mx-auto -mt-2 mb-3 xs:w-[40px] xs:h-[5px] xs:-mt-5">

                </div>

                <p className=" w-[60%] mx-auto my-5 text-xl text-center xs:text-sm">
                    Dive into a selection of my personal and client projects, each presented with a detailed case study for your reference.
                </p>
            </div>

            {
                project_arr.map((item) => (
                    <div className="  border-red-800 lg:flex xl:flex mt-32 xl:w-[1200px] lg:w-fit mx-auto items-center sm:w-fit px-[5%]">

                        <div className="  border-red-800 h-fit w-[45%] px-3 py-3 bg-slate-200 rounded-md sm:mb-10 sm:mx-auto sm:w-[550px] xs:mx-auto xs:w-fit ">
                            <img src={item.image} alt="" className="w-[550px] h-[300px]  border-green-400 rounded-md object-fill xs:w-[500px] xs:h-[250px]" />
                        </div>

                        <div className=" flex-col w-[45%]  border-red-700 h-fit px-4 py-3 ml-[100px] xs:w-[90%] xs:mx-auto xs:mt-5">
                            <p className=" text-5xl text-[#7843E9] font-semibold mb-5 xs:text-3xl">
                                {item.title}
                            </p>

                            <p className=" text-lg xs:text-sm text-justify">
                                {item.info}
                            </p>

                            
                            <div onClick={()=>{return navigate(item.link?item.link:"/")}}>
                            <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 text-lg text-white mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="CASE STUDY"></Buttons>
                            </div>
                        </div>

                    </div>
                ))
            }


        </div>
            :
            <div id="projects" className="relative border  border-transparent bg-[#1A191D] text-sky-50 ">
                <div className=" mt-36">
                    <p className=" w-fit mx-auto font-sans text-5xl font-semibold mt-10 my-6 xs:text-2xl">
                        PROJECTS
                    </p>

                    <div className=" w-[50px] h-[7px] rounded-lg bg-[#7843E9] mx-auto -mt-2 mb-3 xs:w-[40px] xs:h-[5px] xs:-mt-5">

                    </div>

                    <p className=" w-[60%] mx-auto my-5 text-xl text-center xs:text-sm">
                        Here you will find some of the personal and clients projects that I created with each project containing its own case study
                    </p>
                </div>

                {
                    project_arr.map((item) => (
                        <div className="  border-red-800 lg:flex xl:flex mt-32 xl:w-[1200px] lg:w-fit mx-auto items-center sm:w-fit px-[5%]">

                            <div className="  border-red-800 h-fit w-[45%] px-3 py-3 bg-neutral-700 rounded-md sm:mb-10 sm:mx-auto sm:w-[550px] xs:mx-auto xs:w-fit ">
                                <img src={item.image} alt="" className="w-[550px] h-[300px]  border-green-400 rounded-md object-fill xs:w-[500px] xs:h-[250px]" />
                            </div>

                            <div className=" flex-col w-[45%]  border-red-700 h-fit px-4 py-3 ml-[100px] xs:w-[90%] xs:mx-auto xs:mt-5">
                                <p className=" text-5xl text-[#7843E9] font-semibold mb-5 xs:text-3xl">
                                    {item.title}
                                </p>

                                <p className=" text-lg xs:text-sm text-justify">
                                    {item.info}
                                </p>

                                <div className="w-fit h-fit" onClick={()=>{return navigate(item.link?item.link:"/")}}>
                                    <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 text-lg text-white mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="CASE STUDY"></Buttons>
                                </div>

                            </div>

                        </div>
                    ))
                }

                {/* {
                    modalStatus && <ModalProject closeModal={closeModalHandler}></ModalProject>
                } */}

            </div>
    )
}

export default Projects