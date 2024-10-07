import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context'

import './navigation.styles.scss'
import { ReactComponent as  CartIcon } from '../../assets/icons/bag.svg'
import { ReactComponent as Logo } from '../../assets/pol.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle.svg'


const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser)

    function openSliderMenu() {
        document.querySelector('.slider-menu').classList.toggle('open');
        document.querySelector('.slider-menu-overlay').classList.toggle('open');
        document.querySelector('.burguer-menu').classList.toggle('open')
    }
    function closeSliderMenu() {
        document.querySelector('.slider-menu').classList.remove('open');
        document.querySelector('.slider-menu-overlay').classList.remove('open');
        document.querySelector('.burguer-menu').classList.remove('open')
    }

    return (
        <Fragment>
            <div className='navbar-container'>
                <div className='navbar-element burguer-menu-container'>
                    <div className='burguer-menu' onClick={ openSliderMenu }>
                        <CloseIcon className='close-slider-menu'/>
                    </div>
                </div>
                <Link className='navbar-element logo-container' to='/'>
                    <Logo className='navbar-logo' />
                </Link>
                <div className='navbar-element icons-container'>
                    <div className='icon-element'>
                        <Link className='icon-link' to='/login' >
                            <UserIcon className='user-icon' />
                        </Link>
                    </div>
                    <div className='icon-element'>
                        <Link className='icon-link' to='/cart' >
                            <CartIcon className='cart-icon' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='slider-menu-overlay' onClick={closeSliderMenu}></div>
            <div className='slider-menu'>
                <div className='slider-menu-content' onClick={openSliderMenu}>
                    <Link className='nav-link' to='/'>
                        home
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        shop
                    </Link>
                    <Link className='nav-link' to='/about'>
                        about
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar