import {Input} from "../components/Input"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  
  function handleLogin2(){
    navigate("/AccountSettings")

  }

  return (
    <div className="min-h-screen w-full max-w-sm mx-auto bg-gray-50 flex flex-col p-6 shadow-md" >
      <h1 className="text-3xl font-bold font-sans pt-4">Signin to your</h1>
      <h1 className="text-3xl font-bold font-sans">PopX account</h1>
      <h4 className="font-semibold font-sans text-gray-400 pt-3 ">Lorem ipsum dolor sit amet.</h4>
      <h4 className="font-semibold font-sans text-gray-400">Lorem Sequi, voluptatem.</h4>

      <div className="relative w-full mt-6 p-3" >
        <Input label="Email Address" type="email" placeholder="Enter email address" />
        <Input label="Password" type="password" placeholder="Enter password"  />

       


      </div>
       <button className="w-full bg-[#6b25ff] text-white py-3  rounded font-semibold cursor-pointer font-sans mt-2" onClick={handleLogin2}>Login</button>
    </div>
  )
}
