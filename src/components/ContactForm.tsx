import { useState } from "react";
import Buttons from "./Buttons";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

//@ts-ignore
const ContactForm = ({theme}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitStatus , setSubmitStatus] = useState(false);

    const submitHandler = () => {
        setSubmitStatus(true);

        if(name == "" || email == "" || message == ""){
            toast.error("Fields can't be remained empty");
            setSubmitStatus(false);
            return;
        }
        console.log("name ", name);
        console.log("email ", email);
        console.log("message ", message);
        console.log("this is submit function");



        const serviceId = "service_n6uc4kk";
        const templateId = "template_cyxsyui";
        const publicKey = "w6et-QXfaoOGXm6fy";

        const templateParams = {
            from_name : name,
            from_email : email,
            to_name : "Rishabh Pandey",
            message : message
        }

        emailjs.send(serviceId , templateId , templateParams , publicKey)
        .then(()=>{
            toast.success("Message sent successfully")
            setName("");
            setEmail("");
            setMessage("")
            setSubmitStatus(false)
        })
        .catch(()=>{
            toast.error("Error occured while sending the message")
            setSubmitStatus(false)
        })
    }
    return (
        theme == "light" ? <div className=" flex-col gap-5  border-green-500 w-fit mx-auto my-24 px-9 py-9 rounded-md shadow-lg shadow-slate-400 xs:w-[90%]">
        <div className="flex-col gap-3 xs:w-[100%]  border-green-500">
            <p className="  font-semibold mb-3">
                Name
            </p>

            <input type="text" name="" id="" className="border border-neutral-300 w-[600px]  px-8 py-3 text-xl rounded-md xs:w-[100%] xs:py-1" placeholder="enter your name" value={name} onChange={(event) => { setName(event.target.value) }} />
        </div>

        <div className="flex-col gap-3 mt-7">
            <p className="  font-semibold mb-3">
                email
            </p>
            <input type="text" name="" id="" className="border border-neutral-300 w-[600px]  px-8 py-3 text-xl rounded-md xs:w-[100%] xs:py-1" placeholder="enter your email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
        </div>

        <div className="flex-col gap-3 mt-7">
            <p className="  font-semibold mb-3">
                message
            </p>
            <textarea name="" id="" className=" w-[600px] h-[300px] px-5 py-5 border border-neutral-300 rounded-md xs:w-[100%] xs:py-1" placeholder="Enter your message" value={message} onChange={(event) => { setMessage(event.target.value) }}></textarea>
        </div>

        

        {
            submitStatus ? <div className="w-fit h-fit" >
            <Buttons text="bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-10 text-lg text-white mt-3 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:px-3 xs:py-1" content="SUBMIT"></Buttons>
        </div> : <div className="w-fit h-fit" onClick={submitHandler}>
            <Buttons text="bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-10 text-lg text-white mt-3 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:px-3 xs:py-1" content="SUBMIT"></Buttons>
        </div>
        }

    </div>
    :
    <div className=" flex-col gap-5  border-green-500 w-fit mx-auto my-24 px-9 py-9 rounded-md shadow-lg shadow-black xs:w-[90%] bg-neutral-700">
            <div className="flex-col gap-3 xs:w-[100%]  border-green-500">
                <p className="  font-semibold mb-3">
                    Name
                </p>

                <input type="text" name="" id="" className="border border-neutral-300 w-[600px]  px-8 py-3 text-xl rounded-md xs:w-[100%] xs:py-1 text-black" placeholder="enter your name" value={name} onChange={(event) => { setName(event.target.value) }} />
            </div>

            <div className="flex-col gap-3 mt-7">
                <p className="  font-semibold mb-3">
                    email
                </p>
                <input type="text" name="" id="" className="border border-neutral-300 w-[600px]  px-8 py-3 text-xl rounded-md xs:w-[100%] xs:py-1 text-black" placeholder="enter your email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
            </div>

            <div className="flex-col gap-3 mt-7">
                <p className="  font-semibold mb-3">
                    message
                </p>
                <textarea name="" id="" className=" w-[600px] h-[300px] px-5 py-5 border border-neutral-300 rounded-md xs:w-[100%] xs:py-1 text-black" placeholder="Enter your message" value={message} onChange={(event) => { setMessage(event.target.value) }}></textarea>
            </div>

            

            {
                submitStatus ? <div className="w-fit h-fit" >
                <Buttons text="bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-10 text-lg text-white mt-3 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:px-3 xs:py-1" content="SUBMIT"></Buttons>
            </div> : <div className="w-fit h-fit" onClick={submitHandler}>
                <Buttons text="bg-[#7843E9] rounded-md  w-fit border border-[#7843E9] px-10 text-lg text-white mt-3 py-2 font-pop mb-2 duration-150 hover:scale-[99%] xs:px-3 xs:py-1" content="SUBMITTING"></Buttons>
            </div>
            }

        </div>
    )
}

export default ContactForm;