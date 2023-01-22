import PropTypes from "prop-types"

function Card({ backgroundColor = "red"
  , color = "black",
  border = "none",
  maxWidth = "16rem",
  display = "flex",
  justifyContent = "center",
  textAlign = "center",
  boxShadow = "1px 1px 5px gray",
  borderRadius = "20px"

}) {

  const style = {
    backgroundColor,
    border,
    color,
    maxWidth,
    display,
    justifyContent,
    textAlign,
    boxShadow,
    borderRadius
  }

  return (

    <div className="col-4 d-flex justify-content-center col-md-4 col-lg-3 col-xl-2  " style={style}>
      <div className="card mb-3 text-center" >
        <img style={{ width: "100%", boxShadow: "1px 1px 3px black" }} className="card-img-top" src="https://lastfm.freetls.fastly.net/i/u/300x300/c405c91c09132a4f379f91924bb1609e.png" alt="Resim bulunamadı" />
        <div className="card-body">
          <p className="card-text fw-bold">Eminem</p><hr />
          <p className="card-text fs">Play Count:2003002</p><hr />
          <p className="card-text fs">Listeners: 21000000</p>
        </div>
      </div>
    </div>
  )


}

Card.propTypes = {

  backgroundColor: PropTypes.string,

}

export default Card