import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from 'react'
import axios from "axios"
import getTopArtistContext from '../context/getTopArtistContext'
import { useFilter } from '../context/Filtered'
import { useTheme } from '../context/ThemeContext'

function Detail() {
  const [albums, setTopAlbums] = useState([])
  const [tracks, setTracks] = useState([])
  const { filterText } = useFilter()
  const { id } = useParams();
  const { topArtist } = useContext(getTopArtistContext)
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  console.log(topArtist)
  const api = {
    key: "07ecddcf8060a3b64e3c7d6ff90c211e",
  }

  useEffect(() => {
    const getData = async () => {
      await axios(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${id}&api_key=${api.key}&format=json`).then((res) => setTopAlbums(res.data.topalbums.album))
        .finally(setLoading(false))
      await axios(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${id}&api_key=${api.key}&format=json`).then((res) => setTracks(res.data.toptracks.track))
        .finally(setLoading(false))
    };
    getData()
  }, [api.key, id])


  const filtered = albums.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  });

  const filtered1 = tracks.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  });

  return (
    <div className="container">
      <div  className="row">
        <div  className="col-12 mt-5">
          <div id={`${theme}`} class="card mb-3" style={{ maxWidth: "1300px" }}>
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">{id}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        {/* Top Artist */}
        <div className="col-6 ">
          <div className="row mt-4 ">
            <h1>{loading ? "loading..." : "Top Albums"}</h1>
            {
              filtered.map(
                (album, i) => <div key={i} className=" col-sm-12 col-md-6 ">
                  <div id={`${theme}`} className="card mb-3 text-center " style={{ maxWidth: "17rem"  }}>
                    <img src={Object.values(album.image[3])[0]}  className="card-img-top detailimg mx-auto" title={"Artist detail"} alt="Resim bulunamadı" />
                    <div className="card-body">
                      <p className="card-text fw-bold">{album.name}</p><hr />
                      <p className="card-text fs">Play Count: {album.playcount}</p><hr />
                      <p className="card-text"> {album.artist.name}</p>
                    </div>
                  </div>

                </div>
              )
            }
          </div>
        </div>
        {/* Top Tracks */}
        <div className="col-6 ">
          <div className="row mt-4 ">
            <h1>{loading ? "loading..." : "Top Tracks"}</h1>
            {
              filtered1.map(
                (track, i) => <div key={i} className=" col-sm-12  col-md-6">
                  <div id={`${theme}`} className="card mb-3 text-center" style={{ maxWidth: "17rem" }}>
                    <img src={track.image.map((img) => (Object.values(img)))} className="card-img-top" title={"Artist detail"} alt="Resim bulunamadı" />
                    <div className="card-body">
                      <p className="card-text fw-bold">{track.name}</p><hr />
                      <p className="card-text fs">Play Count: {track.playcount}</p><hr />
                      <p className="card-text"> {track.artist.name}</p>
                    </div>
                  </div>

                </div>
              )
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Detail
