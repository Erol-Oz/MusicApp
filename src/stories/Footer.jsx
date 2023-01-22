import PropTypes from "prop-types"


function Footer({ backgroundColor = "red",
  color = "black",
  border = "none",
  display = "flex",
  justifyContent = "center",
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

    <footer className="py-3 container" >
      <ul style={style} className="nav justify-content-center border-bottom pb-3 ">
        <li style={{ marginRight: "20px" }} className="nav-item">Home</li>
        <li style={{ marginRight: "20px" }} className="nav-item">Sign Up</li>
        <li style={{ marginRight: "20px" }} className="nav-item">Login</li>
        <li style={{ marginRight: "20px" }} className="nav-item">Contact</li>
        <li className="nav-item">About</li><hr />
        <p className="text-center text-muted">© 2022 Melodia, Inc</p>
      </ul>


    </footer>

  )


}

Footer.propTypes = {

  backgroundColor: PropTypes.string,

}

export default Footer