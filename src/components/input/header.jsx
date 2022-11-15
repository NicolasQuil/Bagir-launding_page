import React from 'react'
import './header.css';

const Header = () => {
    return (
        <div className='body d-flex flex-column justify-content-center '>
            <nav className='nav1 text-white d-flex justify-content-center align-items-center text-center'>משלוח חינם בכל קניה מעל 199 ש"ח</nav>
            <nav className='nav2  text-white d-flex justify-content-space-around align-items-center '>
                <ul className='ul'>
                    <div className='logo d-flex  '><img src="https://www.bagir-il.com/wp-content/uploads/2021/09/logo-black.png" alt="" /></div>
                    <li className='li'>קולקציית חורף</li>
                    <li className='li'>חולצות לבנות</li>
                    <li className='li'>מכנסיים</li>
                    <li className='li'>חליפות</li>
                    <li className='li'>אקססוריז</li>
                    <li className='li'>SALE</li>
                    <li className='li'>GIFT CARD</li>
                </ul>
            </nav>
            <div className='header d-flex justify-content-center align-items-center text-center'>
            </div>
        </div>
    )
}

export default Header