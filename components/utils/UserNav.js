import { Menu, Transition } from '@headlessui/react'
import { BellIcon,UserCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/actions/userAction'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  
const UserNav = ({uid,firstName,lastName,businessName,email,receiveEmail}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    let username = firstName+" "+lastName


    let signUserOut = () => {
        dispatch(signOut());
        router.push("/")
    }

    const goToBusinessDashboard = () => {
        router.push(`/business/dashboard`)
    }

    console.log(businessName)

    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
            type="button"
            className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
            <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                transition duration-200 ">
                <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className='h-10' />
                    {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />                     */}
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
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700')}
                      onClick={goToBusinessDashboard}
                      >
                        {businessName}
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 cursor-pointer')}>
                      Settings
                    </a>)}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 cursor-pointer')}
                      onClick={signUserOut}>
                        Sign out
                    </a>
                    )}
                </Menu.Item>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
  )
}

export default UserNav