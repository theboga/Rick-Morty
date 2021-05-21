import { useEffect, useState } from "react"

const useGetData = (url) => {
    const [state, setState] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setState(data))   
    },[url])  
    console.log("Llamada ******")
    return state
}

export default useGetData
