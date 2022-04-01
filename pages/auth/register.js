import Head from 'next/head'
import { useState } from 'react'
import PaddedInputField from '../../components/PaddedInputField'
import { CheckCircleIcon,ExclamationCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import TermsAndConditions from "../../components/business/TermsAndConditions"

const SignupPage = () => {
    const [businessName, setBusinessName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [receiveEmail, setReceiveEmail] = useState(false)
    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        let uid = uuidv4();
        console.log(uid,firstName,lastName,businessName,email,password,rePassword,termsAndConditions,receiveEmail)
        
        if (( checkName(firstName) && checkName(lastName) && checkName(businessName) ) 
            && (checkEmail(email) && checkPassword(password) && checkRePassword(rePassword) && termsAndConditions)
        ){
            console.log("All done,Ready to post to database")
            let body = {uid,firstName,lastName,businessName,email,password,receiveEmail};
            let res = await fetch(`/api/auth/business/`,{
                method:"POST",
                body:JSON.stringify(body)
            })
            let data = await res.json();
            console.log(data)
            router.push("/auth/signin")
        }else{
            alert("Please correct your register form.")
        }
    }

    const checkName = (text) => {
        if(text.length < 2 ) return false
        return true
    }

    const checkEmail = (emailInput) => {
        if(emailInput.includes("@")){
            return true;
        }
        return false;
    }

    const checkPassword = (passwordInput) => {
        if(passwordInput.length > 8) return true
        return false
    }    

    const checkRePassword = (rePasswordInput) => {
        if(rePasswordInput === password && checkPassword(password)) return true;
        return false;
    }

    return (
        <form className="grid grid-cols-1 max-w-lg space-y-3 border-2 p-6 rounded shadow mt-4 mx-2 md:mx-auto">
            <Head>
                <title>Register</title>
            </Head>
            <h1 className='place-self-center text-xl font-bold '>Register your business account</h1>
            <p className='text-lg font-medium'>Create account for SMEs </p>
            {/*  */}
            <div className='flex flex-wrap justify-between'>
                <div className='grid grid-cols-1 place-items-start gap-y-1 my-4 w-full md:w-1/2 md:pr-1'>
                    <p className='font-medium flex space-x-2'>
                        <span>First name</span>
                        {checkName(firstName) ? 
                            <CheckCircleIcon className='h-6 text-green-500' />
                        : 
                            <ExclamationCircleIcon className='h-6 text-red-500' />
                        }
                    </p>
                    <PaddedInputField type="text" placeholder="First name" setter={setFirstName}  value={firstName} size='w-full'/>
                </div>

                <div className='grid grid-cols-1 place-items-start gap-y-1 my-4 w-full md:w-1/2'>
                    <p className='font-medium flex space-x-2'>
                        <span>Last name</span>
                        {checkName(lastName) ? 
                            <CheckCircleIcon className='h-6 text-green-500' />
                        : 
                            <ExclamationCircleIcon className='h-6 text-red-500' />
                        }
                    </p>
                    
                    <PaddedInputField type="text" placeholder="Last name" setter={setLastName}   value={lastName} size='w-full'/>    
                </div>
            </div>

            <div className='grid grid-cols-1 place-items-start gap-y-1 my-4'>
                <p className='font-medium flex space-x-2'>
                    <span>Business name</span>
                    {checkName(businessName) ? 
                        <CheckCircleIcon className='h-6 text-green-500' />
                    : 
                        <ExclamationCircleIcon className='h-6 text-red-500' />
                    }
                </p>
                <PaddedInputField type="text" placeholder="Business name" setter={setBusinessName}   value={businessName} size='w-full' />
            </div>

            <div className='grid grid-cols-1 place-items-start gap-y-1 my-4'>
                <p className='font-medium flex space-x-2'>
                    <span>Email</span>
                    {checkEmail(email) ? 
                        <CheckCircleIcon className='h-6 text-green-500' />
                    : 
                        <ExclamationCircleIcon className='h-6 text-red-500' />
                    }
                </p>
                <PaddedInputField type="text" placeholder="Email" setter={setEmail} value={email} size='w-full'/>
            </div>

            <div className='grid grid-cols-1 place-items-start gap-y-1 my-4'>
                <p className='font-medium flex space-x-2'>
                    <span>Password</span>
                    {checkPassword(password) ? 
                        <CheckCircleIcon className='h-6 text-green-500' />
                    : 
                        <ExclamationCircleIcon className='h-6 text-red-500' />
                    }
                </p>
                <p className='text-sm text-red-500'>Please type at least 8 characters that includes a-z and 0-9 </p>
                <PaddedInputField type="password" placeholder="password" setter={setPassword} value={password} size='w-full'/>
            </div>


            <div className='grid grid-cols-1 place-items-start gap-y-1 my-4'>
                <p className='font-medium flex space-x-2'>
                    <span>Re-enter Password</span>
                    {checkRePassword(rePassword) ? 
                        <CheckCircleIcon className='h-6 text-green-500' />
                    : 
                        <ExclamationCircleIcon className='h-6 text-red-500' />
                    }
                </p>
                {!checkRePassword(rePassword) && 
                    <p className='text-sm text-red-500'>Sorry, Re-enter password doesn&apos;t match password </p> 
                }
                
                <PaddedInputField type="password" placeholder="re-enter password" setter={setRePassword} value={rePassword} size='w-full'/>
            </div>
            
            <div 
                className="border-2 px-4 py-2 rounded-lg shadow transition duration-150 flex items-center justify-start space-x-6 font-medium"
                >
                <input type="checkbox" name="receive-email" value={receiveEmail} onChange={() => setReceiveEmail(!receiveEmail)}/>
                <label htmlFor="receive-email" className=''>
                    I agree to receive updated email from Neobank.
                </label>
            </div>
            
            <div 
                className="border-2 px-4 py-1 w-fit rounded-lg shadow transition duration-150 flex items-center space-x-2 w-full"
                >
                
                <input type="checkbox" name="term-condition" value={termsAndConditions} onChange={() => setTermsAndConditions(!termsAndConditions)}/>
                <label htmlFor="term-condition" className=''>
                    <TermsAndConditions />
                </label>
            </div>
            <button className='bg-amber-300 text-black max-w-sm px-4 py-2  text-lg place-self-center rounded font-medium' 
                onClick={onSubmit}>
                    Create Account
            </button>
        </form>
    )
}

export default SignupPage