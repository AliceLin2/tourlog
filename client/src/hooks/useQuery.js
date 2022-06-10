import { useState, useEffect } from "react";

function useQuery() {
  const [styles, setStyles] = useState([])
  const [seasons, setSeasons] = useState([])

  useEffect(()=>{
    fetch("/seasons")
    .then((r)=>{
      if(r.ok){r.json().then((seasons)=>setSeasons(seasons))}
    })
  }, [])

  useEffect(()=>{
    fetch("/styles")
    .then((r)=>{
      if(r.ok){r.json().then((styles)=>setStyles(styles))}
    })
  }, [])

  return {
    styles: styles,
    seasons: seasons
  };
}

export default useQuery;