import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useFilter } from '../context/Filtered'

function Navbar() {
    const { setTheme, theme } = useTheme()
    const { filterText, setFilterText } = useFilter()
    const [themePhoto, setThemePhoto] = useState()
    const themeChange = () => {
        setTheme(theme === "light" ? "dark" : "light")
        setThemePhoto(themePhoto === true ? false : true)
    }


    return (

        <nav id={`${theme}`} className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <Link className="nav-link active" aria-current="page" to="/"><img className='logo' src="../img/music.png" alt="Resim bulunamadı" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">

                            <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        {
                            !themePhoto && <li className="nav-item d-flex justify-content-center align-items-center ">
                                <img onClick={themeChange} className='logo ' src="../img/moon.png" alt="Resim bulunamadı" />
                            </li>
                        }
                        {
                            themePhoto && <li className="nav-item d-flex justify-content-center align-items-center ">
                                <img onClick={themeChange} className='logo ' src="../img/sun.png" alt="Resim bulunamadı" />
                            </li>
                        }
                    </ul>
                    <form className="d-flex">
                        <div class="search-container">
                            <input value={filterText}
                                onChange={(e) => setFilterText(e.target.value)} type="text" name="search" placeholder="Search..." class="search-input" />
                            <a href="/" class="search-btn">
                                <i class="fas fa-search"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </nav>


    )
}

export default Navbar