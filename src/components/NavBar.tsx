import profilepic from "../assets/profile-pic (8).png"
import profilepic2 from "../assets/profile-pic (10).png"
//@ts-ignore
import { Link } from "react-scroll"
import darkTheme from "../assets/moon.png"
import lightTheme from "../assets/brightness.png"
import { useNavigate } from "react-router-dom"

//@ts-ignore
const NavBar = ({ theme, func }) => {

    const navigate = useNavigate();

    return (
        theme == "light" ? <div className="  h-[75px]  border-green-600 flex items-center justify-between sticky top-0 left-0 right-0 z-10 bg-white  overscroll-x-hidden  shadow-lg shadow-[#f3e8e8] px-10 w-[100%] xs:w-[100%]">
            {/* for name and image */}
            <div className="flex justify-center w-fit items-center gap-5 mt-2 lg:mx-7 sm:mx-auto xs:mx-auto">
                <img src={profilepic2} alt="" className="w-[60px] h-[60px] rounded-full object-contain  border-red-500" />

                <p className=" border-red-600 font-pop text-2xl sm:text-2xl xs:text-xl">
                    Rishabh Pandey
                </p>
            </div>

            {/* for various sections */}
            <div className="xl:flex lg:flex items-center gap-3 w-fit mx-4  sm:hidden xs:hidden">
                <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                        <button onClick={() => { return navigate("/") }}>
                            HOME
                        </button>

                    </Link>
                </div>
                <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                    <button onClick={() => { return navigate("/") }}>ABOUT</button></Link>
                </div>
                <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                    <button onClick={() => { return navigate("/") }}>PROJECTS</button>
                    </Link>
                </div>
                <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                    <Link to="contacts" spy={true} smooth={true} offset={-100} duration={500}>
                    <button onClick={() => { return navigate("/") }}>CONTACT</button>
                    </Link>
                </div>

                <div className=" w-fit h-fit  border border-slate-200 bg-slate-200 rounded-lg ml-7 hover:bg-slate-300 duration-75 sm:block" onClick={func}>
                    <img src={darkTheme} alt="" className="w-[35px] h-[35px]" />
                </div>
            </div>
            <div className=" w-fit h-fit  border border-slate-200 bg-slate-200 rounded-lg ml-7 hover:bg-slate-300 duration-75 lg:hidden xl:hidden" onClick={func}>
                    <img src={darkTheme} alt="" className="w-[35px] h-[35px] xs:w-[30px] xs:h-[30px]" />
            </div>
        </div>
            :
            <div className="  h-[75px]  border-green-600 flex items-center justify-between sticky top-0 left-0 right-0 z-10 bg-[#141B25]  overscroll-x-hidden  shadow-lg shadow-[#080a12] px-10 w-[100%] xs:w-[100%] text-sky-50">
                {/* for name and image */}
                <div className="flex justify-center w-fit items-center gap-5 mt-2 lg:mx-7 sm:mx-auto xs:mx-auto">
                    <img src={profilepic} alt="" className="w-[60px] h-[60px] rounded-full object-contain  border-red-500" />

                    <p className=" border-red-600 font-pop text-2xl sm:text-2xl xs:text-xl">
                        Rishabh Pandey
                    </p>
                </div>

                {/* for various sections */}
                <div className="xl:flex lg:flex items-center gap-3 w-fit mx-4  sm:hidden xs:hidden">

                    <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                            <button onClick={() => { return navigate("/") }}>
                                HOME
                            </button>

                        </Link>

                    </div>


                    <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                        <Link to="about" spy={true} smooth={true} offset={2} duration={500}>
                        <button onClick={() => { return navigate("/") }}>ABOUT</button>
                        </Link>
                    </div>
                    <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                        <Link to="projects" spy={true} smooth={true} offset={10} duration={500}>
                        <button onClick={() => { return navigate("/") }}>PROJECTS</button>
                        </Link>
                    </div>
                    <div className=" font-pop text-xl hover:text-[#7843E9] duration-100 mx-1 cursor-pointer">
                        <Link to="contacts" spy={true} smooth={true} offset={10} duration={500}>
                        <button onClick={() => { return navigate("/") }}>CONTACT</button></Link>
                    </div>

                    <div className=" w-fit h-fit  border border-slate-200 bg-slate-200 rounded-lg ml-7 hover:bg-slate-300 duration-75 p-1" onClick={func}>
                        <img src={lightTheme} alt="" className="w-[25px] h-[25px]" />
                    </div>
                </div>
                <div className=" p-1 w-fit h-fit  border border-slate-200 bg-slate-200 rounded-lg ml-7 hover:bg-slate-300 duration-75 lg:hidden xl:hidden" onClick={func}>
                    <img src={lightTheme} alt="" className="w-[25px] h-[25px] xs:w-[20px] xs:h-[20px]" />
            </div>
            </div>
    )
}

export default NavBar;