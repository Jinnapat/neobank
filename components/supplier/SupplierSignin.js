import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { connectAndDispatch } from "../../controllers/connectWallet";
import ConnectWallet from "../utils/ConnectWallet"
const SupplierSignin = () => {
    const router = useRouter()
const dispatch = useDispatch()

    const logUserIn = () => {
        connectAndDispatch(dispatch,router);
    }

    return (
        <div className="border-t-2 space-y-3 flex flex-col text-lg py-4">
            <p className="text-xl font-medium">Please connect your crypto wallet to sign in Curlent</p>
            <ConnectWallet logUserIn={logUserIn} />
        </div>
    )
}

export default SupplierSignin