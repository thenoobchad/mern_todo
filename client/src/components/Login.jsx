import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center transform -translate-y-16">
      <form action="" className="flex flex-col gap-6 max-w-sm w-full px-8">
        <div className="flex flex-col gap-2">
        <Label className="text-md">Email</Label>
          <Input type="email" name="email" placeholder="johndan@email.com" className="focus:outline-0 outline-0 h-12"/>
        </div>
        
        <div className="flex flex-col gap-2">
        <Label className="text-md">Password</Label>
          <Input type="password" name="password" placeholder="************" className="focus:outline-0 outline-0 h-12"/>
        </div>
        
        <Button className="h-11 font-semibold">Login</Button>
        <span className="text-[#63657b] text-center">Don't have an account? <Link to="/register" className="transition ease-in-out hover:cursor-pointer hover:text-primary hover:underline ">Register</Link></span>
      </form>
    </div>
  )
}
