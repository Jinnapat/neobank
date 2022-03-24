import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { XCircleIcon,ClockIcon,CheckCircleIcon } from '@heroicons/react/outline';
import Image from "next/image"
import USDT from "../../../public/icons/crypto/USDT.png"
import USDC from "../../../public/icons/crypto/USDC.png"
import DAI from "../../../public/icons/crypto/DAI.png"
import BUSD from "../../../public/icons/crypto/BUSD.png"
import UST from "../../../public/icons/crypto/UST.png"
import {signBanking} from "../../../controllers/signBanking"
import { useDispatch } from 'react-redux';
import { updateAssets, updateTransactions } from '../../../redux/actions/supplierAction';

export default function ConfirmCard({assetInfo,closeBankingCard,transaction,amount,publicAddress,username,setAmount}) {
  let [isOpen, setIsOpen] = useState(false)
  let {asset,apy,deposits,interest,balance} = assetInfo
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showAddress, setShowAddress] = useState(false)
  const dispatch = useDispatch()

  
  const requestPermission = async () => {
    await signBanking(username,publicAddress,amount,transaction,asset).then((permission) => {
      if (permission) {
        openModal();
        operateTransaction();
      }else{
        closeModal();
      }
    })
    
  }

  function closeModal() {
    setIsOpen(false);
    closeBankingCard();
    setPending(false);
    setSuccess(false);
    setAmount(0);
}

  const openModal = () => {
    setIsOpen(true);
    setPending(true);
  }
  
  const operateTransaction = async () => {
    let transactionNumber = Date.now()
    let fetchBody = {apy,deposits,asset,interest,transaction,amount,publicAddress,username,date:new Date(transactionNumber).toString()}
    let res = await fetch(`/api/supplier/transaction/${transactionNumber}`,{
      method:"POST",
      body:JSON.stringify(fetchBody)
    })
    let data = await res.json();
    console.log(data);
    transactionComplete(data);
  }

  const transactionComplete = (data) => {
    let {accountData,transactionData} = data;
    let assetsBalance = accountData.assetsBalance
    let transactions = transactionData.transactionsHistory
    console.log(assetsBalance,transactions)
    dispatch(updateAssets(assetsBalance));
    dispatch(updateTransactions(transactions))
    setSuccess(true);
    setPending(false);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={requestPermission}
          className="px-2 py-2 text-lg bg-blue-600 bg-opacity-70 hover:bg-opacity-100 text-white font-medium border-2 rounded-md transition duration-100 transform ease-out w-fit">
          Confirm
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
                    {success && <XCircleIcon className='h-8 text-red-500 cursor-pointer' onClick={closeModal}/> }
                </Dialog.Title>

                  <div className='grid grid-cols-1 place-items-start py-4'>
                    
                    <p className='text-lg font-medium'>Account</p>

                    {/* Username */}
                    <div className='grid grid-cols-12 place-items-start space-x-6'>
                        <p className='col-span-3 place-self-center text-gray-500 font-medium'>Username</p>
                        <p className='col-span-9 font-medium rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-200 hover:border-blue-500 hover:shadow-lg transform ease-out'>
                            {username}
                        </p>
                    </div>

                    {/* Public address */}
                    <div className='grid grid-cols-12 place-items-start'>
                        <p className='col-span-3 place-self-center text-gray-500 font-medium'>Public address</p>
                        <p className="col-span-9 font-medium text border-2 rounded-full px-4 py-2 mt-2 cursor-pointer transition duration-200 w-fit hover:border-blue-500 hover:shadow-lg transform ease-out"
                            onClick={() => setShowAddress(!showAddress)}>
                            {showAddress ? (
                                publicAddress
                            ) : (
                                publicAddress.slice(0,4)+"..."+publicAddress.slice(-4,)
                            )}
                        </p>  
                    </div>    
                  </div>
                
                  {pending && (
                    <div className='grid grid-cols-1 place-items-center py-4 gap-y-4'>
                      <p className='place-self-start text-2xl font-bold'>Transaction</p>
                      <ClockIcon className='h-12 text-blue-600' />
                      <p className='text-amber-500 text-2xl font-bold'>Pending</p>
                      <p className='text-xl font-bold '>
                        for your {transaction} {amount} {asset}
                      </p>
                    </div>
                  )}
                
                  {success && (
                    <div className='grid grid-cols-1 place-items-center py-4 gap-y-4'>
                      <p className='place-self-start text-2xl font-bold'>Transaction</p>
                      <CheckCircleIcon className='h-12 text-green-500' />
                      <p className='text-green-500 text-2xl font-bold'>Success</p>
                      <p className='text-xl font-bold '>
                        your {transaction} {amount} {asset} completed.
                      </p>
                      
                      <button 
                        className='text-xl bg-blue-600 text-white rounded p-4 font-medium'
                        onClick={closeModal}>
                        Completed
                      </button>
                    </div>  
                  )}
                
                  
                
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