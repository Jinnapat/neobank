/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import UserNav from './utils/UserNav'
import SupplierNav from './utils/SupplierNav'

{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwolAaPkgpsAyeI8AOPK2-8fndpzEqw5JoD2S28PihkM2zCQ/viewform?embedded=true" width="640" height="1083" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
const navigation = [
  { name: 'Dashboard', href: '#', current: false,},
  { name: 'Loan', href: '#', current: false,},
  { name: 'Docs', href: '#', current: false,},
  { name: 'Feedback', href: '#', current: false, },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const router = useRouter();
    const {username,publicAddress} = useSelector(state => state.supplier)
    const {uid,firstName,lastName,businessName,email,receiveEmail,verified} = useSelector(state => state.user)
    
    const goToPage = (page) => {
        switch(page) {
            case "Dashboard":
                router.push({
                  pathname:`/supplier/${publicAddress}`
                });
                break;
            case "Loan":
                router.push(verified?'/loan':"verify");
                break;
            case "Docs":
                router.push('/docs');
                break;
            case "Feedback":
                router.push('/feedback');
                break;
            case "Signin":
              router.push('/auth/signin');
              break;
            case "Register":
                router.push('/auth/register');
                break;
            default:
              router.push('/');
              break;    
        }
  }

  return (
    <Disclosure as="nav" className="z-50 fixed top-0 bg-white shadow w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    <h1 className="hover:cursor-pointer font-bold text-xl text-blue-600" onClick={() => router.push("/")}>
                        CURLENT
                    </h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      if(item.name === "Dashboard" && uid){
                        return (
                          <div></div>
                        )
                      }
                      if(item.name === "Loan" && publicAddress){
                        return (
                          <div></div>
                        )
                      }
                      
                      return (
                          <a
                          key={item.name}
                          href={item.href}
                          onClick={() => goToPage(item.name)}
                          className={classNames(
                            item.current ? 'font-bold' : 'text-black  font-bold',
                            'px-3 py-2 rounded-md'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      )
                      
                    })}
                  </div>
                </div>
              </div>
                
            {/* Authentication */}
            {(!uid && !publicAddress ) && (
              <div className='flex space-x-4'>
                {/* Signin */}
                <button 
                  className='bg-blue-600 px-5 py-2 rounded text-white font-bold'
                  onClick={() => goToPage("Signin")}
                >
                  Sign In
                </button>
                {/* Register */}
                <button 
                  onClick={() => goToPage("Register")}
                  className='bg-amber-300 px-5 py-2 rounded font-bold'
                >
                  Register
                </button>
            </div>
            )}
            
            

            {/* User profile */}
            {uid && (
              <UserNav firstName={firstName} lastName={lastName} uid={uid} email={email} businessName={businessName} receiveEmail={receiveEmail} />
            )}

            {publicAddress && (
              <SupplierNav username={username} publicAddress={publicAddress} />
            )}

              
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}