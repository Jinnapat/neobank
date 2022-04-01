import PaddedInputField from "../PaddedInputField";
import { EyeIcon,EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useRouter } from "next/router"

const BusinessSignin = ({setEmail, setPassword,email,password,signUserIn}) => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const goToRegister = () => {
        router.push("/auth/register")
    }

    return (
            <div className="border-t-2 py-4 flex flex-col">
                <div className='my-4'>
                    <p className='font-medium flex space-x-2'>
                        Email                        
                    </p>
                    <PaddedInputField type="email" placeholder="Email" setter={setEmail} value={email} size="w-full" />
                </div>

                <div className='my-4'>
                    <p className='font-medium flex space-x-2'>
                        Password                       
                    </p>
                    <div className="flex items-center justify-start space-x-2 p-2 w-full border-2 rounded focus-within:border-black">
                        <input
                            type={showPassword ? "text" : "password"}
                            onChange={e=>setPassword(e.target.value)}
                            placeholder="Password"
                            value={password}
                            className='w-full outline-0'
                        />   
                        {showPassword ? 
                            <EyeIcon className="h-6 cursor-pointer relative" onClick={() => setShowPassword(false)} /> 
                        : <EyeOffIcon className="h-6 cursor-pointer relative" onClick={() => setShowPassword(true)}/>
                        }
                    </div>
                </div>

                
                <button className="bg-blue-600 text-white font-medium text-xl w-6/12 rounded p-3 place-self-center mt-4"
                    onClick={signUserIn}>
                    Sign in
                </button>

                <div className="mt-2 flex flex-col items-center mt-5">
                    <p className="transition duration-150 transform ease-out hover:text-blue-500 cursor-pointer text-sm"
                        onClick={goToRegister}>
                        forget you password?
                    </p>
                    <p className="transition duration-150 transform ease-out hover:text-blue-500 cursor-pointer text-sm"
                        onClick={goToRegister}>
                        don&apos;t have an account?
                    </p>
                </div>
            </div>
    )
}

export default BusinessSignin