import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropDownMenu() {
  return (
    <div className="text-right sm:text-left sm:flex justify-start sm:w-full md:w-auto sm:bg-blue-100 md:bg-transparent">
      <Menu as="div" className="relative w-full inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center hover:text-blue-800 py-5 text-sm">
            Hari B.
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 "
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute  py-2 px-3 z-40 md:right-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="py-2 px-3 hover:bg-blue-100 hover:text-blue-700 cursor-pointer rounded">
                  <i className="las la-times mr-3"></i>
                  <span>My Profile</span>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="py-2 px-3 hover:bg-blue-100 hover:text-blue-700 cursor-pointer rounded">
                  <i className="las la-times mr-3"></i>
                  <span>My Profile</span>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="py-2 px-3 hover:bg-blue-100 hover:text-blue-700 cursor-pointer rounded">
                  <i className="las la-times mr-3"></i>
                  <span>My Profile</span>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
