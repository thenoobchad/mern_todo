import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from "react-router-dom"
import { useActionState, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "@/actions/userAction"

export const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  
  const [state, formAction, isPending] = useActionState(register, { success: null, error: null })
  
  useEffect(() => {
    if (state.success) {
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
  },[state.success])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    
    
    console.log(formData)
}
  return (
    <div className="h-screen flex justify-center items-center transform -translate-y-16">
      <form action={formAction} className="flex flex-col gap-6 max-w-sm w-full px-8">
        <div className="flex flex-col gap-2">
        <Label className="text-md">Email</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndan@email.com" className="focus:outline-0 outline-0 h-12"/>
        </div>
        
        <div className="flex flex-col gap-2">
        <Label className="text-md">Password</Label>
          <Input type="password" name="password"
          value={formData.password} onChange={handleChange} 
            placeholder="************" className="focus:outline-0 outline-0 h-12" />
        </div>
        {
          state.success && (<span className="message successMsg">{state.success} {"Redirecting..."}</span>)
        }

        {   
          state.error && (<span className="message ">{state.error} </span>)
        }
        <Button disabled={isPending} className="h-11 font-semibold">{
        isPending ? "Registering": "Register"
        }</Button>
        <span className="text-[#63657b] text-center">Already have an account? <Link to="/login" className="transition ease-in-out hover:cursor-pointer hover:text-primary hover:underline ">Login</Link></span>
      </form>
    </div>
  )
}
