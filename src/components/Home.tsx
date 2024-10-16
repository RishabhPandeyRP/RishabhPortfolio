import Buttons from "./Buttons";
import linkedin from "../assets/linkedin-logo.png"
import github from "../assets/github-sign.png"
import youtube from "../assets/youtube.png"
import downArrow from "../assets/down-arrow.png"
import downArrow2 from "../assets/arrow (1).png"
//@ts-ignore
import { Link } from "react-scroll"

//@ts-ignore
const Home = ({theme}) => {

    

    return (
        theme == "light" ? <div className=" bg-gradient-to-b from-[#fef4f4] to-[#FAFAFA]  border-red-500  h-fit relative  overscroll-x-hidden pt-1 pb-1 mb-0" id="home">

        <div className=" w-fit mx-auto mt-[13%] font-bold lg:text-6xl xl:text-6xl font-pop sm:text-3xl  border-green-500 xs:text-lg">
            <p>HEY, I AM RISHABH PANDEY</p>
        </div>

        <div className=" w-[700px] mx-auto text-center mt-9 lg:text-2xl xl:text-2xl font-pop sm:text-xl xs:w-fit xs:text-sm xs:px-10 xs:mt-3">
            <p>
            Craftsman of the Web, I forge digital experiences that propel products to victory. From websites to intricate applications, my code builds the launchpad for success.
            </p>
        </div>

        <div className=" w-fit mx-auto ">

            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                <Buttons text={" bg-[#7843E9] rounded-md w-fit border border-[#7843E9] px-20 text-2xl text-white mt-9 py-2 font-pop mb-2 hover:-translate-y-0.5 duration-150 hover:scale-[99%] xs:text-lg xs:px-5 xs:py-1"} content={"PROJECTS"}></Buttons>
            </Link>


        </div>

        <div className="fixed top-[30%] px-2 rounded-[5px]  border-gray-900 shadow-lg shadow-[#fdd6d6]">
            <div className=" hover:bg-[#e8d2ff] sm:w-[50px] sm:h-[50px]  border-green-500 rounded-[5px] flex justify-center items-center mt-2 xs:w-[40px] xs:h-[40px]">
                <a href="https://www.linkedin.com/in/rishabh-pandey-68683222b/" target="_blank">
                    <img src={linkedin} alt="" className="w-[30px] h-[30px]" />
                </a>
            </div>

            <div className=" hover:bg-[#e8d2ff] sm:w-[50px] sm:h-[50px]  border-green-500 rounded-[5px] flex justify-center items-center mt-1 xs:w-[40px] xs:h-[40px]">
                <a href="https://github.com/RishabhPandeyRP" target="_blank">
                    <img src={github} alt="" className="w-[30px] h-[30px]" />
                </a>
            </div>

            <div className=" hover:bg-[#e8d2ff] sm:w-[50px] sm:h-[50px]  border-green-500 rounded-[5px] flex justify-center items-center mt-1 mb-2 xs:w-[40px] xs:h-[40px]">
                <a href="https://www.youtube.com/@codeschoolrpj" target="_blank">
                    <img src={youtube} alt="" className="w-[30px] h-[30px]" />
                </a>
            </div>

        </div>

        <div className="w-[25px] h-[50px] border border-black rounded-2xl mx-auto my-10 mt-40 md:block sm:hidden xs:hidden">

            <img src={downArrow} alt="" className=" pt-3" />

        </div>

    </div>
    :
    <div className=" bg-gradient-to-b from-[#141B25] to-[#161314] border border-b-0 border-black  h-fit relative  overscroll-x-hidden text-sky-50 pb-3" id="home">

            <div className=" w-fit mx-auto mt-[13%] font-bold lg:text-6xl xl:text-6xl font-pop sm:text-3xl  border-green-500 xs:text-lg">
                <p>HEY, I AM RISHABH PANDEY</p>
            </div>

            <div className=" w-[700px] mx-auto text-center mt-9 lg:text-2xl xl:text-2xl font-pop sm:text-xl xs:w-fit xs:text-sm xs:px-10 xs:mt-3">
                <p>
                Craftsman of the Web, I forge digital experiences that propel products to victory. From websites to intricate applications, my code builds the launchpad for success.
                </p>
            </div>

            <div className=" w-fit mx-auto ">

                <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                    <Buttons text={" bg-[#7843E9] rounded-md w-fit border border-[#7843E9] px-20 text-2xl text-white mt-9 py-2 font-pop mb-2 hover:-translate-y-0.5 duration-150 hover:scale-[99%] xs:text-lg xs:px-5 xs:py-1"} content={"PROJECTS"}></Buttons>
                </Link>


            </div>

            <div className="fixed top-[40%] px-2 rounded-[5px] border border-neutral-600 bg-gray-300 shadow-lg shadow-[#0d0d0d]">
                <div className=" hover:bg-[#3d414780] sm:w-[50px] sm:h-[50px]  border-green-500 rounded-[5px] flex justify-center items-center mt-2 xs:w-[40px] xs:h-[40px]">
                    <a href="https://www.linkedin.com/in/rishabh-pandey-68683222b/" target="_blank">
                        <img src={linkedin} alt="" className="w-[30px] h-[30px]" />
                    </a>
                </div>

                <div className=" hover:bg-[#3d414780] sm:w-[50px] sm:h-[50px]  border-green-500 rounded-[5px] flex justify-center items-center mt-1 xs:w-[40px] xs:h-[40px]">
                    <a href="https://github.com/RishabhPandeyRP" target="_blank">
                        <img src={github} alt="" className="w-[30px] h-[30px]" />
                    </a>
                </div>

                <div className=" hover:bg-[#3d414780] sm:w-[50px] sm:h-[50px]  border-green-500 rounded-[5px] flex justify-center items-center mt-1 mb-2 xs:w-[40px] xs:h-[40px]">
                    <a href="https://www.youtube.com/@codeschoolrpj" target="_blank">
                        <img src={youtube} alt="" className="w-[30px] h-[30px]" />
                    </a>
                </div>

            </div>

            <div className="w-[25px] h-[50px] border border-white rounded-2xl mx-auto my-10 mt-40 md:block sm:hidden xs:hidden">

            <img src={downArrow2} alt="" className=" pt-3 scale-[120%]" />

            </div>

        </div>
    )
}

export default Home;