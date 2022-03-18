import PaddedInputField from "../PaddedInputField";

const BusinessSignin = ({setEmail, setPassword,email,password,signUserIn}) => {
    return (
            <div className="grid grid-cols-1 border-t-2 space-y-3 py-4">
                <PaddedInputField type="email" placeholder="Email" setter={setEmail} value={email} />
                <PaddedInputField type="password" placeholder="Password" setter={setPassword} value={password}/>
                <button className="bg-blue-600 text-white font-medium text-xl w-6/12 rounded p-3 place-self-center"
                    onClick={signUserIn}>
                    Sign in
                </button>
            </div>
    )
}

export default BusinessSignin