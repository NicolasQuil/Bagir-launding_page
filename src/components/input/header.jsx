import React from 'react'
import './header.css';

const Header = () => {
    return (
        <div className='body d-flex flex-column justify-content-center '>
            <nav className='nav1 text-white d-flex justify-content-center align-items-center text-center'>משלוח חינם בכל קניה מעל 199 ש"ח</nav>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#"><img src="https://www.bagir-il.com/wp-content/uploads/2021/09/logo-black.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse fw-normal" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">GIFT CARD</a>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SALE
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">חולצה מכופתרת שרוול ארוך</a></li>
                                    <li><a class="dropdown-item" href="#">חולצה מכופתרת שרוול קצר</a></li>
                                    <li><a class="dropdown-item " href="#">מעילים</a></li>
                                    <li><a class="dropdown-item" href="#">סריגים</a></li>
                                    <li><a class="dropdown-item" href="#">ברמודה</a></li>
                                    <li><a class="dropdown-item" href="#">טי שירט לגברים</a></li>
                                    <li><a class="dropdown-item" href="#">בלייזר</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    אקססוריז
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">גרביים</a></li>
                                    <li><a class="dropdown-item" href="#">הלבשה תחתונה</a></li>
                                    <li><a class="dropdown-item" href="#">חגורות</a></li>
                                    <li><a class="dropdown-item" href="#">נעליים</a></li>
                                    <li><a class="dropdown-item" href="#">עניבות</a></li>
                                    <li><a class="dropdown-item" href="#">פפיונים</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    חליפות
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">SLIM</a></li>
                                    <li><a class="dropdown-item" href="#">CLASSIC</a></li>
                                    <li><a class="dropdown-item" href="#">בלייזרים</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    מכנסיים
                                </a>
                                <ul class="dropdown-menu">

                                    <li><a class="dropdown-item" href="#">מכנסי כותנה</a></li>
                                    <li><a class="dropdown-item" href="#">מכנסי אלקטרה</a></li>
                                    <li><a class="dropdown-item" href="#">מכנסי ג'ינס</a></li>
                                    <li><a class="dropdown-item" href="#">מכנסיים מחוייטים</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    חולצות לבנות
                                </a>
                                <ul class="dropdown-menu">

                                    <li><a class="dropdown-item" href="#">חולצות לבנות 100% כותנה</a></li>
                                    <li><a class="dropdown-item" href="#">חולצות לבנות 60%כותנה</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    קולקציית חורף
                                </a>
                                <ul class="dropdown-menu">

                                    <li><a class="dropdown-item" href="#">חולצות מכופתרות שרוול ארוך</a></li>
                                    <li><a class="dropdown-item" href="#">חלק V סריג</a></li>
                                    <li><a class="dropdown-item" href="#">סריגים</a></li>
                                    <li><a class="dropdown-item" href="#">מעילים</a></li>
                                    <li><a class="dropdown-item" href="#">קרדיקן</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header