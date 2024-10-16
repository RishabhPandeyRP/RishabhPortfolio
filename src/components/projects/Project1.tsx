import Buttons from "../Buttons";
import Skills from "../Skills";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Project1 = ({ details, theme, skill_arr }: any) => {
    //let skill_arr = ["HTML", "Javascript", "Tailwind CSS", "RegEx"];

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        theme == "light" ? <div className=" border-red-500  h-fit relative  overscroll-x-hidden mb-10">

            <div className=" w-fit mx-auto mt-[5%] mb-[5%] font-bold lg:text-6xl xl:text-6xl font-pop sm:text-5xl  border-green-500 xs:text-4xl lg:px-[5%]">
                <p>{details.title}</p>
            </div>

            <div className="lg:flex xs:flex-col  border-red-500 items-center justify-evenly w-fit mx-auto gap-32 px-[3%] mt-[4%]">
                <div className="  border-red-800 h-fit w-[45%] px-3 py-3 bg-slate-200 rounded-md sm:mb-10 sm:mx-auto sm:w-[550px] xs:mx-auto xs:w-fit ">
                    <img src={details.image} alt="" className="w-[550px] h-[300px]  border-green-400 rounded-md object-fill xs:w-[500px] xs:h-[250px]" />
                </div>

                <div className=" flex flex-col  h-fit w-[50%] gap-0 sm:mx-auto xs:mx-auto">
                    <div className="flex gap-10">
                        <a href={details.proj_link} target="_blank">
                            <div>
                                <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 lg:text-2xl text-white mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="Project Link"></Buttons>

                            </div>
                        </a>

                        {details.live_link == "" ? <div>
                                <div className=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 lg:text-2xl text-neutral-300 mt-8 py-2 font-pop mb-2 xs:text-lg xs:px-3 xs:py-1 cursor-not-allowed" >Live Link</div>

                            </div>:<a href={details.live_link} target="_blank">
                            <div>
                                <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 lg:text-2xl text-white mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="Live Link"></Buttons>

                            </div>
                        </a>}
                    </div>

                    <div onClick={() => { return navigate("/") }}>
                        <Buttons text=" rounded-md  w-fit border-[2px] border-[#7843E9] px-12 lg:text-2xl  mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="Go Back"></Buttons>
                    </div>
                </div>


            </div>

            <div className=" border-green-500 w-[75%] mx-auto pl-[15%] xs:pl-[1%] py-4 mt-7">
                <p className=" text-3xl  font-semibold font-pop mb-8 ">
                    Project Overview
                </p>
                <p className="my-6 text-lg text-neutral-600 lg:w-[75%] sm:w-[90%] xs:w-[99%] text-justify">
                    {details.overview1}
                </p>
                <p className="my-6 text-lg text-neutral-600 lg:w-[75%] sm:w-[90%] text-justify">
                    {details.overview2}
                </p>
                <p className="my-6 text-lg text-neutral-600 lg:w-[75%] sm:w-[90%] text-justify">
                    {details.overview3}
                </p>

            </div>

            <div className=" border-green-500 w-[75%] mx-auto pl-[15%] py-4 mt-7">
                <p className="text-3xl font-semibold font-pop mb-8">
                    Tools Used
                </p>

                <Skills theme={theme} skill_arr={skill_arr}></Skills>
            </div>


        </div>
            :
            <div className=" pt-2 bg-gradient-to-b from-[#141B25] to-[#161314]  border-red-500  h-fit relative  overscroll-x-hidden mb-0 text-white">

                <div className=" w-fit mx-auto mt-[5%] mb-[5%] font-bold lg:text-6xl xl:text-6xl font-pop sm:text-5xl  border-green-500 xs:text-4xl lg:px-[5%] ">
                    <p>{details.title}</p>
                </div>

                <div className="lg:flex xs:flex-col  border-red-500 items-center justify-evenly w-fit mx-auto gap-32 px-[3%] mt-[4%]">
                    <div className=" border-red-800 h-fit w-[45%] px-3 py-3 bg-slate-700 rounded-md sm:mb-10 sm:mx-auto sm:w-[550px] xs:mx-auto xs:w-fit ">
                        <img src={details.image} alt="" className="w-[550px] h-[300px]  border-green-400 rounded-md object-fill xs:w-[500px] xs:h-[250px]" />
                    </div>

                    <div className=" flex flex-col h-fit w-fit sm:mx-auto xs:mx-auto">
                    <div className="flex gap-10">
                        <a href={details.proj_link} target="_blank">
                            <div>
                                <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 lg:text-2xl text-white mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="Project Link"></Buttons>

                            </div>
                        </a>

                        {details.live_link == "" ? <div>
                                <div className=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 lg:text-2xl text-neutral-300 mt-8 py-2 font-pop mb-2 xs:text-lg xs:px-3 xs:py-1 cursor-not-allowed" >Live Link</div>

                            </div>:<a href={details.live_link} target="_blank">
                            <div>
                                <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-8 lg:text-2xl text-white mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="Live Link"></Buttons>

                            </div>
                        </a>}
                    </div>

                        <div onClick={() => { return navigate("/") }}>
                            <Buttons text=" rounded-md  w-fit border-[2px] border-[#7843E9] px-12 lg:text-2xl  mt-8 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:text-lg xs:px-3 xs:py-1" content="Go Back"></Buttons>
                        </div>
                    </div>


                </div>

                <div className=" border-green-500 w-[75%] mx-auto pl-[15%] xs:pl-[1%] py-4 mt-7 ">
                    <p className=" text-3xl  font-semibold font-pop mb-8 ">
                        Project Overview
                    </p>
                    <p className="my-6 text-lg text-white/80 lg:w-[75%] sm:w-[90%] xs:w-[99%] text-justify">
                        {details.overview1}
                    </p>
                    <p className="my-6 text-lg text-white/80 lg:w-[75%] sm:w-[90%] text-justify">
                        {details.overview2}
                    </p>
                    <p className="my-6 text-lg text-white/80 lg:w-[75%] sm:w-[90%] text-justify">
                        {details.overview3}
                    </p>

                </div>

                <div className=" border-green-500 w-[75%] mx-auto pl-[15%] py-4 mt-7">
                    <p className="text-3xl font-semibold font-pop mb-8">
                        Tools Used
                    </p>

                    <Skills theme={theme} skill_arr={skill_arr}></Skills>
                </div>


            </div>
    )
}

export default Project1;