import { useState } from 'react'

const PaddedInputFeild = ({type, placeholder, setter}) => {
    const updateState = (e) => {
        setter(e.target.value)
    }

    return (
        <input
            className='p-1 border-2 ' 
            type={type}
            onChange={updateState}
            placeholder={placeholder}
        />
    )
}

const SignupPage = () => {
    const [businessName, setBusinessName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="flex flex-col max-w-lg mx-auto space-y-3">
            <h1 className='mx-auto'>Sign up for your business!</h1>
            <PaddedInputFeild type="text" placeholder="business name" setter={setBusinessName}/>
            <div>
                <PaddedInputFeild type="text" placeholder="first name" setter={setFirstName}/>
                <PaddedInputFeild type="text" placeholder="last name" setter={setLastName}/>
            </div>
            <PaddedInputFeild type="password" placeholder="password" setter={setPassword}/>
            <PaddedInputFeild type="password" placeholder="re-enter password" setter={setRePassword}/>
            <div className="space-x-1">
                <input type="checkbox" name="term-condition"/>
                <label htmlFor="term-condition">agree with our terms & conditions</label>
            </div>
            <button className='bg-blue-600 color-white max-w-sm' onClick={onSubmit}>Sign up</button>
        </form>
    )
}

export default SignupPage