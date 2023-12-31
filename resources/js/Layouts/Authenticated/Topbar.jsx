import { Link } from '@inertiajs/react';
import React from 'react'
import { useState, useRef } from 'react'


export default function Topbar({name}) {

    const [dropdownOpen, setdropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropDown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove('hidden');
        }else{
            dropdownTarget.current.classList.add('hidden');
        }

        setdropdownOpen(!dropdownOpen);
    }

  return (
    <div className="flex justify-between items-center cursor-pointer">
        <input type="text" className="top-search" placeholder="Search movie, cast, genre" style={{backgroundImage: `url('/icons/ic_search.svg')`}} />
        <div className="flex items-center gap-4">
            <span className="text-black text-sm font-medium">Welcome, {name}</span>
            <div className="collapsible-dropdown flex flex-col gap-2 relative">
                <div className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                    onClick={triggerDropDown}>
                    <img src="/images/avatar.png" className="rounded-full object-cover w-full" alt=""  />
                </div>
                <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                    ref={dropdownTarget}>

                    <Link href="#!" className="transition-all hover:bg-sky-100 p-4">Dashboard</Link>
                    <Link href="#!" className="transition-all hover:bg-sky-100 p-4">Settings</Link>
                    <Link method="post" href={route('logout')}  as='button' className="-ml-[75px] transition-all hover:bg-sky-100 p-4 ">Sign Out</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
