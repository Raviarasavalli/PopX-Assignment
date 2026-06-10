import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

export const Welcome = () => {
  const navigate = useNavigate()
  function handleRegister(){
    navigate("/register")
  }

  function handleLogin(){
    navigate("/login")
  }
  return (

    <div className="min-h-screen w-full max-w-sm mx-auto bg-gray-50 flex flex-col justify-end p-6 shadow-md">

      <div className=" h-60  " >
        <h1 className="text-3xl font-bold font-sans">Welcome to PopX</h1>
        <h4 className="font-semibold font-sans text-gray-400 ">Lorem ipsum dolor sit amet.</h4>
        <h4 className="font-semibold font-sans text-gray-400">Lorem Sequi, voluptatem.</h4>
        <div className="flex flex-col gap-3 mt-5">
          <Button label="Create Account" onClick={handleRegister} variant="primary" />
          <Button label="Already Registered? Login" onClick={handleLogin} variant="secondary" />
        </div>

      </div>
      

    </div>
   
  )
}
