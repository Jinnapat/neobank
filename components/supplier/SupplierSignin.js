import ConnectWallet from "../utils/ConnectWallet"
const SupplierSignin = () => {
    return (
        <div className="border-t-2 space-y-3 flex flex-col text-lg py-4">
            <p className="text-xl font-medium">Please connect your crypto wallet to sign in Neobank</p>
            <ConnectWallet />
        </div>
    )
}

export default SupplierSignin