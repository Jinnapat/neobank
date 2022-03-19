import React from 'react'

const SupplierNav = () => {
  return (
    <div>
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
  )
}

export default SupplierNav