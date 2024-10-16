//@ts-ignore
const Skills = ({theme , skill_arr}:any)=>{
    // let skill_arr = ["HTML","CSS" ,"React" , "Nodejs" , "Javascript"  , "Tailwind CSS" , "Hono", "TypeScript"];
    return (
        theme == "light" ? <div className=" flex-wrap flex flex-row h-fit w-fit sm:px-10  border-yellow-500 ">
            
            
        {
            skill_arr.map((items:any)=>(
                <div className=" bg-slate-200 rounded-lg px-5 h-[40px] mx-2 my-4 flex justify-stretch items-center font-semibold sm:px-10 ">
                    <p>
                    {items}
                    </p>
                </div>
            ))
        }
        
    </div>
    :
    <div className=" flex-wrap flex flex-row h-fit w-fit sm:px-10  border-yellow-500">
            
            
            {
                skill_arr.map((items:any)=>(
                    <div className=" bg-slate-600 rounded-lg px-5 h-[40px] mx-2 my-4 flex justify-stretch items-center font-semibold sm:px-10 ">
                        <p>
                        {items}
                        </p>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Skills