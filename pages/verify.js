import { useState, createRef } from "react"
import PaddedInputField from '../components/PaddedInputField'
import SelectBar from "../components/SelectBar"
import MainButton from "../components/MainButton"
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { signIn } from "../redux/actions/userAction"
import Head from "next/head"
import ApproveSMEPage from '../components/admin/ApproveSMEPage'

const contry_list = [
    "Thailand",
    "China",
    "Indonesia",
    "Vietnam",
    "Malaysia"
]

const UserInfoZone = () => {
    return (
        <div className="flex flex-col p-2 space-y-3 border-2 rounded align-strech">
            <h2 className="font-bold">User Information</h2>
            <label>Full Name</label>
            <div className="flex space-x-2">
                <PaddedInputField size="w-full" type="text" placeholder="First name" />
                <PaddedInputField size="w-full" type="text" placeholder="Last name" />
            </div>
            <label>Identification document</label>
            <PaddedInputField size="w-full" type="file" />
        </div>
    )
}

const BusinessInfoZone = (props) => {

    return (
        <div className="flex flex-col p-2 space-y-3 border-2 rounded">
            <h2 className="font-bold">Business Information</h2>
            <label>Business name</label>
            <PaddedInputField type="text" placeholder="business name" setter={props.setBusinessName}/>
            <label>Location</label>
            <SelectBar selectedItem={props.selectedCountry} setSelectedItem={props.setSelectedCountry} choices={contry_list}/>
            <label>Business descriptions</label>
            <textarea className="p-2 border-2 rounded h-60 resize-none" placeholder="business descriptions" onChange={props.setBusinessDescription}/>
            <label>Finance Statement</label>
            <PaddedInputField type="file" placeholder="file" setter={props.setDocument} other={{ref: props.fileRef}}/>
        </div>
    )
}

const UserVerifyPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [selectedCountry, setSelectedCountry] = useState('Thailand')
    const [document, setDocument] = useState(null)
    const [businessName, setBusinessName] = useState("")
    const [businessDescription, setBusinessDescription] = useState("")
    const userData = useSelector(state => state.user)

    const fileRef = createRef()

    const onSubmit = (e) => {
        //console.log(fileRef.current.files[0])
        fetch("api/business/verify", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: userData.email})
        }).then((data) => {
            const temp = {...userData}
            temp.verified = true
            dispatch(signIn(temp))
            router.push("/loan")
        }, (err) => {
            alert("cant verify")
        })
    }

    return (
        <div className="border-2 flex flex-col max-w-lg mx-auto space-y-3 p-3 rounded-lg mt-3">
            <h1 className="font-bold text-2xl text-center">Verify your business</h1>
            <UserInfoZone />
            <BusinessInfoZone 
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                setBusinessName={setBusinessName}
                setBusinessDescription={setBusinessDescription}
                setDocument={setDocument}
                fileRef={fileRef}
            />
            <MainButton onClick={onSubmit}>verify</MainButton>
        </div>
    )
}

const VerifyPage = () => {
    const userData = useSelector(state => state.user)

    return (
        <div>
            <Head><title>Curlent Verify</title></Head>
            <div className="p-2">
                {userData.email == "curlent@admin.com" ? <ApproveSMEPage />: <UserVerifyPage />}
            </div>
        </div>
    )
}

export default VerifyPage