import PropTypes from "prop-types"


function Navbar({ backgroundColor = "red",
    color = "black",
    border = "none",
    display = "flex",
    justifyContent = "space-between",
    alignItems = "center",
    textAlign = "center",
    boxShadow = "1px 1px 5px gray",
    borderRadius = "20px",
    listStyle = "none",
    padding = "3rem",
    margin = "2rem"

}) {
    const style = {
        backgroundColor,
        border,
        color,
        display,
        justifyContent,
        textAlign,
        boxShadow,
        borderRadius,
        listStyle,
        alignItems,
        padding,
        margin
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul style={style} className="navbar-nav me-auto mb-2 mb-lg-0 " >
                        <li>
                            <img style={{ width: "25px" }} className='logo' src="../img/music.png" alt="Resim bulunamadı" />
                        </li>
                        <li className="nav-item">
                            Home
                        </li>
                        <li className="nav-item ">
                            Login
                        </li>
                        <li className="nav-item ">
                            Sign Up
                        </li>
                        <li>
                            <input />
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div class="search-container">
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

Navbar.propTypes = {

    backgroundColor: PropTypes.string,

}

export default Navbar