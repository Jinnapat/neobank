/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { connectAndDispatch } from '../controllers/connectWallet'
import userIcon from "../public/image/icons/user.png"
import Image from "next/image"
import { logOut } from '../redux/actions/userAction'
import Link from 'next/link'
import MainButton from './MainButton'

{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwolAaPkgpsAyeI8AOPK2-8fndpzEqw5JoD2S28PihkM2zCQ/viewform?embedded=true" width="640" height="1083" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
const navigation = [
  { name: 'Deposit', href: '#', current: false,},
  { name: 'Loan', href: '#', current: false,},
  { name: 'Docs', href: '#', current: false,},
  { name: 'Feedback', href: '#', current: false, },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch(); 
    const {username,publicAddress,promptpayID,image,description} = useSelector(state => state.user)

    const logout = () => {
        dispatch(logOut())
    }

    const logUserIn = () => {
        connectAndDispatch(dispatch,router);
    }
    
    const goToPage = (page) => {
        switch(page) {
            case "Deposit":
                router.push('/deposit');
                break;
            case "Loan":
                router.push('/loan');
                break;
            case "Docs":
                router.push('/docs');
                break;
            case "Feedback":
                router.push('/feedback');
                break;
            default:
              router.push('/');
              break;    
        }
  }

  const goToProfile = () => {
    router.push({
      pathname:"/profile/[publicAddress]",
      query:{
        publicAddress:publicAddress
      }
    })
  }
    

  return (
    <Disclosure as="nav" className="fixed top-0 bg-white shadow w-full">
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
                        Neobank
                    </h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
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
                    ))}
                  </div>
                </div>
              </div>
                
            {!publicAddress && <MainButton><Link href="signin">Signin</Link></MainButton>}

            {/* User profile */}
            {publicAddress && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                    type="button"
                    className=" p-1 rounded-full border-2 border-gray-500  text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    >
                    <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                    <div>
                        <Menu.Button className="flex items-center space-x-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                        transition duration-200 hover:bg-blue-500 hover:text-white p-2 font-bold border-gray-300 border-2 ">
                        <span className="sr-only">Open user menu</span>
                        
                        {image ? 
                          <img
                            className="h-8 w-8 rounded-full"
                            src={image}
                            alt={username}
                          /> : 
                          <Image src={userIcon} width={30} height={30} className="rounded-full" objectFit='cover' />
                        }

                        <span className='text-lg'>{username}</span>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                            <a href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              onClick={goToProfile}
                              >
                                <p className='grid grid-cols-1'>
                                    <span className='text-base'>{username}</span>
                                    <span className='text-gray-500 '>{publicAddress.slice(0,6)+"..."+publicAddress.slice(-4,)}</span>
                                </p>
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}>
                              Settings
                            </a>)}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                              onClick={logout}>
                                Disconnect
                            </a>
                            )}
                        </Menu.Item>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
            )}

              
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}