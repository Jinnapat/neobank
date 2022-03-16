import { useState } from "react"
import Link from "next/link"
import PaddedInputField from '../components/PaddedInputField'
import { Tab } from '@headlessui/react'

const BusinessSignin = ({setEmail, setPassword}) => {
    return (
        <div className="border-t-2 flex flex-col space-y-3">
            <h2>For business</h2>
            <PaddedInputField type="email" placeholder="email" setter={setEmail}/>
            <PaddedInputField type="password" placeholder="password" setter={setPassword}/>
            <button className="bg-blue-600 text-white rounded-sm p-3">Sign in</button>
            <div className="mt-2 space-x-2 flex justify-center">
                <Link href="/signup">forget you password?</Link>
                <Link href="/signup">don&apos;t have an account?</Link>
            </div>
        </div>
    )
}

const SupplierSignin = () => {
    return (
        <div className="border-t-2 space-y-3 flex flex-col">
            <h2>For supplier</h2>
            <p>connect to your crypto wallet</p>
            <button className="bg-blue-600 text-white rounded-sm p-3">connect wallet</button>
        </div>
    )
}

const SigninPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const selectTabDisplay = (selected, text) => {
        let className = "p-2 rounded-sm text-white "

        className += selected ? "bg-blue-600" : "bg-blue-400"

        return (
            <div className={className}>{text}</div>
        )
    }
    return (
        <div className="max-w-lg mx-auto border-2 rounded-lg px-7 py-5 space-y-5">
            <h1 className="font-extrabold">Sign In</h1>
            <Tab.Group>
                <Tab.List>
                    <Tab className="w-2/4">
                        {({selected})=>selectTabDisplay(selected, "Business")}
                    </Tab>
                    <Tab className="w-2/4">
                        {({selected})=>selectTabDisplay(selected, "Supplier")}
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <BusinessSignin setEmail={setEmail} setPassword={setPassword}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <SupplierSignin />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default SigninPage