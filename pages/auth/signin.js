import { useState } from "react"
import { Tab } from '@headlessui/react'
import BusinessSignin from "../../components/business/BusinessSignin"
import SupplierSignin from "../../components/supplier/SupplierSignin"
import Head from "next/head"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import {signIn} from "../../redux/actions/userAction"

const SigninPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();
    const dispatch = useDispatch();
    
    const goToRegister = () => {
        router.push("/auth/register")
    }

    const signUserIn = async () => {
        if (email!=="" && password!==""){
            let data = await fetch(`/api/auth/business/signin/${email}/${password}`,)
            .then(res => res.json())
            console.log(data)
            dispatch(signIn(data));
            router.push("/business/dashboard")
        }
    }

    const selectTabDisplay = (selected, text) => {
        if (text === "Business") {
            return (
                <div className={`${selected ? "bg-blue-600 text-white p-2 rounded-sm font-medium" 
                        : "bg-blue-600 opacity-50 text-white p-2 rounded-sm font-medium" } `}>
                    <span>Business</span>
                    <span className="text-base"> ( SMEs )</span>
                </div>)
        }else if (text === "Supplier"){
            return (
                <div className={`${selected ? "bg-amber-300 text-balck p-2 rounded-sm font-medium" 
                        : "bg-amber-300 opacity-50 text-balck p-2 rounded-sm font-medium" } `}>
                    <span>Supplier</span>
                    <span className="text-base"> ( Crypto )</span>
                </div>)
        }        
    }
    
    return (
        <div className="grid grid-cols-1 place-items-center">
            <div className="max-w-lg mx-auto border-2 rounded-lg px-7 py-5 space-y-5 mt-4 w-6/12">
                <Head><title>Sign In</title></Head>
                <h1 className="font-extrabold text-xl text-center">Sign In to 
                    <span className="text-blue-600"> Neobank</span>
                </h1>
                <Tab.Group>
                    <Tab.List>
                        <Tab className="w-2/4 text-xl">
                            {({selected})=>selectTabDisplay(selected, "Business")}
                        </Tab>
                        <Tab className="w-2/4 text-xl">
                            {({selected})=>selectTabDisplay(selected, "Supplier")}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <BusinessSignin setEmail={setEmail} setPassword={setPassword} email={email} password={password} signUserIn={signUserIn} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <SupplierSignin />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <div className="mt-2 flex space-x-4 place-item">
                <p className="transition duration-150 transform ease-out hover:text-blue-500 cursor-pointer"
                    onClick={goToRegister}>
                    forget you password?
                </p>
                <p className="transition duration-150 transform ease-out hover:text-blue-500 cursor-pointer"
                    onClick={goToRegister}>
                    don&apos;t have an account?
                </p>
            </div>
        </div>
    )
}

export default SigninPage