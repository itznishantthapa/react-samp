import React from 'react'

function NavBar(props) {
const textColor=props.mode?"text-black":"text-white";
const bgColor=props.mode?"bg-slate-400":"bg-black";
  return (
    <div className={`flex justify-between items-center h-16 ${textColor} ${bgColor} w-full fixed z-[999] select-none`}>
      <div className='temp-div'></div>
        <ul className='flex justify-evenly items-center gap-6 cursor-pointer '>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>Contact</li>
            <li className='hover:underline'>About</li>
            <li className='hover:underline'>Features</li>
        </ul>
        <span className="material-symbols-outlined mr-10 cursor-pointer" onClick={props.toggle}>
dark_mode
</span>
    </div>
  )
}

export default NavBar