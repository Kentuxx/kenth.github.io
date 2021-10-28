import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../helpers/assets/img/logo.png'

const Navbar = () => {

    const [active, setActive] = useState(0);

    // useEffect (()=>{}, []);

    // const kenth = (sean, kenth) => {
    // }

    // kenth(1, '');

    return (
        <React.Fragment>
            <div className='nav-container'>
                <nav className='nav'>
                    <div className='nav-logo'>
                        <Link to='/' 
                            onClick = {() => setActive(0)}
                            className='nav-logo-link'> Kentucky </Link> 
                        {/* <img alt='logo' src={logo} /> */} 
                    </div>
                    <div className='links'>
                            <Link to='/about' 
                                onClick= {() => setActive(1)}
                                className={active == 1 ? 'nav-active-1' : 'nav-about'} > About </Link> 
                            <Link to='/site' 
                                onClick={() => setActive(2)}
                                className= {active == 2 ? 'nav-active-2' : 'nav-site'}> Site </Link>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar
