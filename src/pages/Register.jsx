import { Input } from "../components/Input"
import { useNavigate } from "react-router-dom"


export const Register = () => {
  const navigate = useNavigate()
  function handleClick(){
    navigate("/AccountSettings")

  }
  return (
    <div className="min-h-screen w-full max-w-sm mx-auto bg-gray-50 p-6 shadow-md">
      <h1 className="text-3xl font-bold font-sans">Create your</h1>
      <h1 className="text-3xl font-bold font-sans">PopX Account</h1>
      <div>
        <form className="flex flex-col gap-3 mt-5" >
          
          <Input label="Full Name *"  value="Marry Doe" placeholder="Enter your full name" type="text" />
          <Input label="Phone Number *" required={true} placeholder="Enter your phone number" type="tel" />
          <Input label="Email *" required={true} placeholder="Enter your email" type="email" />
          <Input label="Password *" required={true} placeholder="Enter your password" type="password" />
          <Input label="Company name *" placeholder="Enter your company name" type="text" />

          <p className="mb-2 font-medium">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>

          <div className="flex gap-3">
            <label className="flex items-center gap-2">
              <input
              className="h-5 w-5 accent-violet-600"
                type="radio"
                name="agency"
                value="yes"
              />
              Yes
            </label>

            <label className="flex items-center gap-2 accent-violet-600">
              <input
              className="h-5 w-5"
                type="radio"
                name="agency"
                value="no"
              />
              No
            </label>
          </div>

        </form>
      </div>
      <button className="w-full bg-[#6b25ff] text-white py-3  rounded font-semibold cursor-pointer font-sans mt-12" onClick={handleClick}>Create Account</button>

    </div>
    
  )
}
