import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/outline';
import Image from "next/image"
import USDT from "../../../public/icons/crypto/USDT.png"
import USDC from "../../../public/icons/crypto/USDC.png"
import DAI from "../../../public/icons/crypto/DAI.png"
import BUSD from "../../../public/icons/crypto/BUSD.png"
import UST from "../../../public/icons/crypto/UST.png"
import BankingFilter from "./BankingFilter"
import BankingInfo from './BankingInfo';
import { useSelector } from 'react-redux';
import ConfirmButton from "./ConfirmCard"

export default function BankingCard({assetInfo}) {
  let [isOpen, setIsOpen] = useState(false)
  const [transaction, setTransaction] = useState("deposit")
  const [amount, setAmount] = useState(0)
  const {username,publicAddress} = useSelector(state => state.supplier)
  let {asset,apy,deposits,interest,balance} = assetInfo

  useEffect(() => {
    setAmount(0);
  }, [transaction])
  
  
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-2 py-2 text-base bg-amber-300 font-medium border-2 rounded-md transition duration-100 transform ease-out w-fit">
          Supply {asset}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white 
                shadow-xl rounded-2xl">
                {/* Banking Card Title */}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                    <div className='flex items-center space-x-2'>
                        <Image src={imageSrc[asset]} height={50} width={50} />
                        <p className='text-xl'>{asset}</p>
                    </div>
                    <XCircleIcon className='h-8 text-red-500 cursor-pointer' onClick={closeModal}/>
                </Dialog.Title>
 
                {/* Banking Card body */}
                <div className='grid grid-cols-1 place-items-center'>
                  <BankingFilter setTransaction={setTransaction} transaction={transaction}/>
                  <BankingInfo transaction={transaction} amount={amount} setAmount={setAmount} assetInfo={assetInfo} />
                  {/* <button 
                    className={` p-4 border-2 shadow text-white bg-blue-600 text-xl font-medium rounded place-self-center `}

                  >
                      Confirm
                  </button> */}
                  <ConfirmButton assetInfo={assetInfo} closeBankingCard={closeModal} transaction={transaction} amount={amount} 
                    publicAddress={publicAddress} username={username} setAmount={setAmount} />
                </div>
                
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


let imageSrc = {
    "USDT":USDT,
    "USDC":USDC,
    "BUSD":BUSD,
    "DAI":DAI,
    "UST":UST,
}