import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TransactionFilter({setTab}) {
  
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleTabChange = (index) => {
        switch(index) {
            case 0:
              setSelectedIndex(0);
              setTab("all")
              break;
            case 1:
              setSelectedIndex(1);
              setTab("deposit")
              break;
            case 2:
                setSelectedIndex(2);
                setTab("withdraw")
                break;
            default:
              setSelectedIndex(0);
              setTab("all")
              break;
        }
    }
    
    

  return (
    <div className="w-full max-w-md p-2 sm:px-0">
      <Tab.Group onChange={handleTabChange} selectedIndex={selectedIndex}>
        <Tab.List className="flex p-1 space-x-1 bg-white border-2 rounded-xl">
            {/* Buy */}
            <Tab
              key="0"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-white rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-blue-500 shadow border-blue-500 border-2'
                    : 'text-black'
                )}>
              All
            </Tab>
            {/* Sell */}
            <Tab
              key="1"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-white rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-green-500 shadow'
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
