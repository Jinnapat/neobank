import PaddedInputField from "../PaddedInputField";
import { EyeIcon,EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";

const BusinessSignin = ({setEmail, setPassword,email,password,signUserIn}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
            <div className="grid grid-cols-1 border-t-2  py-4">
                <div className='grid grid-cols-1 place-items-start gap-y-1 my-4'>
                    <p className='font-medium flex space-x-2'>
                        Email                        
                    </p>
                    <PaddedInputField type="email" placeholder="Email" setter={setEmail} value={email} />
                </div>

                <div className='grid grid-cols-1 place-items-start gap-y-1 my-4'>
                    <p className='font-medium flex space-x-2'>
                        Password                       
                    </p>
                    <div className="flex items-center justify-start space-x-2">
                        <input
                            className='p-2 border-2 rounded' 
                            type={showPassword ? "text" : "password"}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            value={password}
                        />   
                        {showPassword ? 
                            <EyeIcon className="h-6 cursor-pointer " onClick={() => setShowPassword(false)} /> 
                        : <EyeOffIcon className="h-6 cursor-pointer " onClick={() => setShowPassword(true)}/>
                        }
                    </div>
                </div>

                
                <button className="bg-blue-600 text-white font-medium text-xl w-6/12 rounded p-3 place-self-center mt-4"
                    onClick={signUserIn}>
                    Sign in
                </button>
            </div>
    )
}

export default BusinessSignin