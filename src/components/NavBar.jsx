import React from 'react'

const NavBar = () => {
  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
    
        <div className="collapse-title navbar justify-between">
            <div className="navbar-start">
            <button className="btn btn-ghost text-xl">DesiGhee Scene</button>
            </div>

            <div className="navbar-center  lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><button>Item 1</button></li>
                <li><button>Item 3</button></li>
            </ul>
            </div>
        
        </div>

    </div>
  )
}

export default NavBar