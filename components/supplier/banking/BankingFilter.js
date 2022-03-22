import { Tab } from '@headlessui/react'
import {useEffect, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TransactionFilter({setTransaction,transaction}) {
  
  const [selectedIndex, setSelectedIndex] = useState(0)
    
  useEffect(() => {
        if(transaction==="deposit"){
        handleTabChange(0)
        }else{
        handleTabChange(1)
        }
    }, [transaction])
    
  const handleTabChange = (index) => {
        switch(index) {
            case 0:
              setSelectedIndex(0);
              setTransaction("deposit")
              break;
            case 1:
              setSelectedIndex(1);
              setTransaction("withdraw")
              break;
        }
    }
    
    

  return (
    <div className="w-full max-w-md p-2 sm:px-0">
      <Tab.Group onChange={handleTabChange} selectedIndex={selectedIndex}>
        <Tab.List className="flex p-1 space-x-1 bg-white border-2 rounded-xl">
            <Tab
              key="0"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-white rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-green-500 shadow text-white'
                    : 'text-black '
                )}>
              Deposit
            </Tab>
            <Tab
              key="1"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-white rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-red-500 shadow text-white'
                    : 'text-black '
                )}>
              Widthdraw
            </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
