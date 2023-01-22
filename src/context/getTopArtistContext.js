// Top Artist API
import { createContext, useEffect, useState } from "react";
const getTopArtistContext = createContext()
export const GettopArtistProvider = ({ children }) => {
  const [topArtist, setTopArtist] = useState([])
  const [offset,setOffset]=useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=07ecddcf8060a3b64e3c7d6ff90c211e&offset=${offset}&limit=50&format=json`)
        const data = await res.json()
        setTopArtist(pre=>[...pre,...data.artists.artist])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [offset])

//Infinite Scroll
  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight
      const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
      if(currentHeight + 1 >= scrollHeight){
        setOffset(offset+50)
      }

      
    }
    window.addEventListener("scroll",handleScroll)
    return ()=>window.removeEventListener("scroll",handleScroll)
    
  },[offset])



  const values = {
    topArtist,
  }
  return <getTopArtistContext.Provider value={values}>{children}</getTopArtistContext.Provider>
}

export default getTopArtistContext