import React, { useState } from 'react';
import '../../Assets/CSS/index.css';


const NavBar = () => {
    const [ auth, setAuth ] = useState(false)
    return (
        <>
          <header className='navbar'>
              <div>
                  Home
              </div>
              <div>
                  Dashboard
              </div>
              <div className='button-group'>
                  <button>Login</button>
                  <button>Signup</button>
              </div>
          </header>  
        </>
    )
}

export default NavBar;