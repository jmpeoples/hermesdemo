import { useId, useRef, useState, Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'My Subscriptions', href: '/', icon: HomeIcon, current: true },
  { name: 'Browse', href: '/Browse', icon: UsersIcon, current: false },
  { name: 'Teams', href: '#', icon: FolderIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Settings', href: '#', icon: CalendarIcon, current: false },
]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

function Browse() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
    
                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                          <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex flex-shrink-0 items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                          alt="Workflow"
                        />
                      </div>
                      <div className="mt-5 h-0 flex-1 overflow-y-auto">
                        <nav className="space-y-1 px-2">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                  'mr-4 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
    
            {/* Static sidebar for desktop */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                  <h2 class="text-gray-300">Hermes</h2>
                </div>
                <div className="flex flex-1 flex-col overflow-y-auto">
                  <nav className="flex-1 space-y-1 px-2 py-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:pl-64">
              <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                <button
                  type="button"
                  className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex flex-1 justify-between px-4">
                  <div className="flex flex-1">
                    <form className="flex w-full md:ml-0" action="#" method="GET">
                      <label htmlFor="search-field" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="search-field"
                          className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                          placeholder="Search"
                          type="search"
                          name="search"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
    
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
    
              <main className="flex-1">
                <div className="py-6">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 className="mb-8 text-2xl font-semibold text-gray-900">Browse</h1>
                  </div>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    {/* Replace with your content */}
                    <BrowseCards />
                    {/* /End replace */}
                  </div>
                </div>
              </main>
            </div>
          </div>
      )
  }


const people =[{
  "name": "Y-Solowarm",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Solarbreeze",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Job",
  "channel": "Slack",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Transcof",
  "channel": "Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Bamity",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Stringtough",
  "channel": "Slack, Email",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Stringtough",
  "channel": "Email",
  "type": "Keyword",
  "role": "member"
}, {
  "name": "Biodex",
  "channel": "Slack",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Tin",
  "channel": "Slack",
  "type": "Dataset",
  "role": ""
}, {
  "name": "Cookley",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "",
  "name": "Y-Solowarm",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Solarbreeze",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Job",
  "channel": "Slack",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Transcof",
  "channel": "Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Bamity",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Stringtough",
  "channel": "Slack, Email",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Stringtough",
  "channel": "Email",
  "type": "Keyword",
  "role": "member"
}, {
  "name": "Biodex",
  "channel": "Slack",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Tin",
  "channel": "Slack",
  "type": "Dataset",
  "role": ""
}, {
  "name": "Cookley",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "",
  "name": "Y-Solowarm",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Solarbreeze",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Job",
  "channel": "Slack",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Transcof",
  "channel": "Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Bamity",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": "member"
}, {
  "name": "Stringtough",
  "channel": "Slack, Email",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Stringtough",
  "channel": "Email",
  "type": "Keyword",
  "role": "member"
}, {
  "name": "Biodex",
  "channel": "Slack",
  "type": "Keyword",
  "role": ""
}, {
  "name": "Tin",
  "channel": "Slack",
  "type": "Dataset",
  "role": ""
}, {
  "name": "Cookley",
  "channel": "Slack, Email",
  "type": "Dataset",
  "role": ""
}]

export function BrowseCards() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p>
            </div>
            <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
           subscribe
          </button>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Slack</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
  

  
  export default Browse