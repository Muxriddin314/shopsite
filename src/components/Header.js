import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header style={{backgroundColor: "#6C63FF"}} className='w-full fixed top-0 z-10 py-6'>
            <nav className=''>
                <ul className='flex gap-14  text-white'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header