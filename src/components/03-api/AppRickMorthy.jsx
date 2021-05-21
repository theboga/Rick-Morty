import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Personaje from './Personaje';
// import useGetData from '../../hooks/useGetData';

const AppRickMorthy = () => {    
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1)
    const [info, setInfo] = useState('');
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
    const [search, setSearch] = useState('')
    useEffect(()=>{
        fetch(url, {'mode': 'cors','headers': {'Access-Control-Allow-Origin': '*'}})
        .then(response => response.json())
        .then((data) => {
            setPersonajes(data.results)
            setInfo(data.info)
        })
    },[url])
    console.log(personajes)
    console.log(info)
    const previo = () => {
        setUrl(info.prev)
        setPagina(pagina - 1)
    }
    const siguiente = () =>{
        setUrl(info.next)
        setPagina(pagina + 1)
    }    
    const handleSearch = (e) =>{
        if(e.keyCode == 13) {
            e.preventDefault();
            console.log("enter*******")
        }
        e.preventDefault();
        setSearch(e.target.value)
    }

    const personajesFiltro = personajes.filter(caracter => {
        return caracter.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
    return (
        <div style={{backgroundColor:'#f1f1f1'}}>
            <Navigation search={search} handleSearch={handleSearch} />
            <div className="container mt-1">
                <div className="row">
                    {personajes ? personajesFiltro.map(per => (
                        <Personaje per={per} key={per.id} />
                    )) : ''}
                </div>
                <div className="row justify-content-center">
                        {info && info.prev ? <button className="m-1 btn btn-primary btn-lg" onClick={previo}>Anterior</button> : <button className="m-1 btn btn-primary btn-lg" disabled>Anterior</button> }
                        {info && pagina ? <span className="h1 mx-2 text-secondary">{pagina}</span>:''}
                        {info && info.next ? <button className="m-1 btn btn-primary btn-lg" onClick={siguiente}>Siguiente</button> : <button className="m-1 btn btn-primary btn-lg" disabled>Siguiente</button> }
                </div>
            </div>
        </div>
    )
}

export default AppRickMorthy
