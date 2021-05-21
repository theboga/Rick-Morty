import React from 'react'
import logo from './logo-rick-morty.png'

const handlerSubmit = (e)=>{
    e.preventDefault()
}

const Navigation = ({handleSearch}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-middle" />
                    <span className="ml-2 h3">Rick & Morty</span>
                </a>
                <form className="d-flex" onSubmit={handlerSubmit}>
                    <i className="fas fa-filter d-flex align-items-center m-1 text-white"></i>
                    <input style={{width:'18em'}}
                        className="form-control me-2" type="search"
                        placeholder="Introduce un nombre" aria-label="Search"
                        onChange={handleSearch}
                    />
                    <input className="bg-dark invisible" type="submit" disabled value=""/>
                </form>
            </div>
        </nav>
    )
}

export default Navigation
