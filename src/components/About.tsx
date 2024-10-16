import Buttons from "./Buttons";
import Skills from "./Skills";
//@ts-ignore
import { Link } from "react-scroll"

//@ts-ignore
const About = ({ theme }) => {

    let skill_arr = ["HTML","CSS" ,"React" , "Nodejs" , "Javascript"  , "Tailwind CSS" , "Hono", "TypeScript", "Express", "Prisma", "Zod"];

    return (
        theme == "light" ? <div className=" border-red-900 overscroll-x-hidden" id="about">
            <div className=" mt-32 xs:mt-5">
                <p className=" w-fit mx-auto font-sans lg:text-5xl xl:text-5xl sm:text-3xl font-semibold mt-10 my-6 xs:text-2xl">
                    About Me
                </p>

                <div className=" w-[50px] h-[7px] rounded-lg bg-[#7843E9] mx-auto sm:-mt-2 mb-3 xs:-mt-5 xs:w-[30px] xs:h-[5px] sm:w-[50px] sm:h-[7px]">

                </div>

                <p className=" w-[60%] mx-auto lg:my-5 xl:my-5 lg:text-xl xl:text-xl sm:text-lg text-center sm:mb-0 xs:text-sm xs:mt-4">
                    Learn more about me, my work, and the programming and tech skills I bring to the table.

                    

                </p>
            </div>

            <div className=" lg:w-fit xl:w-[1200px] lg:mx-auto  px-[5%] border-green-600 h-fit py-6 lg:flex xl:flex lg:mt-32 xl:mt-32 sm:mt-10 sm:w-fit sm:mx-auto ">

                <div className=" lg:w-[45%] xl:w-[600px]    border-red-700 h-fit px-2  sm:w-fit sm:mx-auto mob:mt-10">
                    <p className=" lg:text-3xl font-pop font-semibold my-4 sm:text-center xs:text-center xs:text-2xl ">
                        Get to know me!
                    </p>

                    <p className=" text-lg  my-3 text-neutral-800  sm:text-center sm:mt-5 lg:text-left xl:text-justify xs:text-center xs:text-sm text-justify">
                    I'm a passionate frontend developer who specializes in building and managing the user interfaces of websites and web applications. My focus is on creating intuitive and engaging experiences that drive the overall success of the product. Want to see my work in action? Head over to the Projects section to explore my creations!
                    </p>
                    <p className=" text-lg  my-3 text-neutral-700  sm:text-center sm:mt-5 lg:text-left xl:text-justify xs:text-center xs:text-sm text-justify">

                    Beyond coding, I'm dedicated to giving back to the developer community. Over the years, I've gained valuable knowledge in web development, and I love sharing it with others.  Follow me on LinkedIn and Instagram for insightful content related to web development and programming. You'll find helpful tips, tricks, and industry updates to keep you ahead of the curve.
                    </p>
                    <p className=" text-lg  my-3 text-neutral-700  sm:text-center sm:mt-5 lg:text-left xl:text-justify xs:text-center xs:text-sm text-justify">

                    I'm always eager to learn, grow, and contribute my skills to exciting new projects. Are you looking for a talented frontend developer? If you have an opportunity that aligns with my expertise and passion for web development, don't hesitate to reach out!
                    </p>

                    <div className="w-fit h-fit sm:mx-auto xs:mx-auto sm:mt-3 ">
                        <Link to="contacts" spy={true} smooth={true} offset={-100} duration={500}>
                            <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-10 text-lg text-white mt-3 py-2 font-pop mb-2 duration-150 hover:scale-[99%] lg:-ml-20 xs:px-3 xs:py-1 " content="CONTACT"></Buttons>
                        </Link>
                    </div>


                </div>

                <div className="flex-col px-2  border-red-700 lg:w-[45%] xl:w-[600px] lg:ml-2 xl:ml-2  sm:mt-20 sm:w-fit sm:mx-auto lg:mt-0 xs:mt-5">
                    <div className=" text-3xl font-pop font-semibold my-4 xs:text-center sm:text-center xs:mt-10 xs:text-2xl">
                        My Skills
                    </div>
                    <Skills theme={theme} skill_arr={skill_arr}></Skills>
                </div>
            </div>
        </div>
            :
            <div className="border  border-transparent bg-gradient-to-b from-[#161314] to-[#1A191D] overscroll-x-hidden text-sky-50 border-t-0 border-b-0 pt-1" id="about">
                <div className=" mt-32 xs:mt-5">
                    <p className=" w-fit mx-auto font-sans lg:text-5xl xl:text-5xl sm:text-3xl font-semibold mt-10 my-6 xs:text-2xl">
                        About Me
                    </p>

                    <div className=" w-[50px] h-[7px] rounded-lg bg-[#7843E9] mx-auto sm:-mt-2 mb-3 xs:-mt-5 xs:w-[30px] xs:h-[5px] sm:w-[50px] sm:h-[7px]">

                    </div>

                    <p className=" w-[60%] mx-auto lg:my-5 xl:my-5 lg:text-xl xl:text-xl sm:text-lg text-center sm:mb-0 xs:text-sm xs:mt-4">
                        Learn more about me, my work, and the programming and tech skills I bring to the table.

                        

                    </p>
                </div>

                <div className=" lg:w-fit xl:w-[1200px] lg:mx-auto  px-[5%] border-green-600 h-fit py-6 lg:flex xl:flex lg:mt-32 xl:mt-32 sm:mt-10 sm:w-fit sm:mx-auto ">

                    <div className=" lg:w-[45%] xl:w-[600px]    border-red-700 h-fit px-2  sm:w-fit sm:mx-auto mob:mt-10">
                        <p className=" lg:text-3xl font-pop font-semibold my-4 sm:text-center xs:text-center xs:text-2xl ">
                            Get to know me!
                        </p>

                        <p className=" text-lg  my-3  sm:text-center sm:mt-5 lg:text-left xl:text-justify xs:text-center xs:text-sm text-neutral-300 text-justify">
                        I'm a passionate frontend developer who specializes in building and managing the user interfaces of websites and web applications. My focus is on creating intuitive and engaging experiences that drive the overall success of the product. Want to see my work in action? Head over to the Projects section to explore my creations!
                        </p>
                        <p className=" text-lg  my-3   sm:text-center sm:mt-5 lg:text-left xl:text-justify xs:text-center xs:text-sm text-neutral-300 text-justify">

                        Beyond coding, I'm dedicated to giving back to the developer community. Over the years, I've gained valuable knowledge in web development, and I love sharing it with others.  Follow me on LinkedIn and Instagram for insightful content related to web development and programming. You'll find helpful tips, tricks, and industry updates to keep you ahead of the curve.
                        </p>
                        <p className=" text-lg  my-3   sm:text-justify sm:mt-5 lg:text-justify xl:text-justify xs:text-center xs:text-sm text-neutral-300 ">

                        I'm always eager to learn, grow, and contribute my skills to exciting new projects. Are you looking for a talented frontend developer? If you have an opportunity that aligns with my expertise and passion for web development, don't hesitate to reach out!
                        </p>

                        <div className="w-fit h-fit sm:mx-auto xs:mx-auto sm:mt-3 ">
                            <Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>
                                <Buttons text=" bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-10 text-lg text-white mt-3 py-2 font-pop mb-2 duration-150 hover:scale-[99%] lg:-ml-20 xs:px-3 xs:py-1 " content="CONTACT"></Buttons>
                            </Link>
                        </div>


                    </div>

                    <div className="flex-col px-2  border-red-700 lg:w-[45%] xl:w-[600px] lg:ml-2 xl:ml-2  sm:mt-20 sm:w-fit sm:mx-auto lg:mt-0 xs:mt-5">
                        <div className=" text-3xl font-pop font-semibold my-4 xs:text-center sm:text-center xs:mt-10 xs:text-2xl">
                            My Skills
                        </div>
                        <Skills theme={theme} skill_arr={skill_arr}></Skills>
                    </div>
                </div>
            </div>
    )
}

export default About;