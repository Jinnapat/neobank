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
              setTab("dashboard")
              break;
            case 1:
              setSelectedIndex(1);
              setTab("account info")
              break;
            default:
              setSelectedIndex(0);
              setTab("dashboard")
              break;
        }
    }
    
    

  return (
    <div className="w-full max-w-md px-2 py-8 sm:px-0">
      <Tab.Group onChange={handleTabChange} selectedIndex={selectedIndex}>
        <Tab.List className="flex p-1 space-x-1 bg-white border-2 rounded-xl">
            {/* Buy */}
            <Tab
              key="0"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-black rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-blue-600 shadow border-blue-600 border-2 text-white'
                    : 'text-black'
                )}>
              Dashboard
            </Tab>
            {/* Sell */}
            <Tab
              key="1"
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-xl leading-5 font-bold text-black rounded-lg',
                  'focus:outline-none',
                  selected
                    ? 'bg-amber-400 shadow text-black'
                    : 'text-black '
                )}>
              Account
            </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
