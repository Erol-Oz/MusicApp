import { useContext } from 'react'
import getTopArtistContext from '../context/getTopArtistContext'
import { Link } from "react-router-dom"
import { useFilter } from '../context/Filtered'
import { useTheme } from '../context/ThemeContext'

function TopArtist() {
  const { topArtist } = useContext(getTopArtistContext)
  const { filterText } = useFilter()
  const { theme } = useTheme()
  const filtered = topArtist.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  });
  return (

    <div className='container mt-4'>
      <div className='row'>
        <h1>Top Artists</h1>
        {
          filtered.map(
            (artist, i) => <div key={i} className="col-4 d-flex justify-content-center col-md-4 col-lg-3 col-xl-2  ">
              <Link to={`/artistdetail/${artist.name}`}>
                <div id={`${theme}`} className="card mb-3 text-center" style={{ maxWidth: "12rem" }}>
                  <img src={artist.image.map((img) => (Object.values(img)))} className="card-img-top" title={"Artist detail"} alt="Resim bulunamadı" />
                  <div className="card-body">
                    <p className="card-text fw-bold">{artist.name}</p><hr />
                    <p className="card-text fs">Play Count: {artist.playcount}</p><hr />
                    <p className="card-text fs">Listeners: {artist.listeners}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default TopArtist