import React from 'react'

const Personaje = ({per}) => {
    return (
        <div className="card ml-1 mb-1" style={{width: '16rem'}}>
            <img src={per.image} alt="" className="card-img-top" />
            <div className="card-body">
                <span className="d-block text-right"><i className="fas fa-id-badge"></i><small className=""> {per.id}</small></span>
                <h6 className="card-title">{per.name}</h6>
                <p className="text-secondary">
                    <small className="d-flex justify-content-between align-items-center"><span><i className="fas fa-venus-mars text-secondary"></i> {per.gender}</span>|<span><i className="far fa-heart  text-secondary"></i> {per.status}</span>|<span><i className="fas fa-male"></i> {per.species}</span></small>
                    {per.type ? (<small><i className="fas fa-street-view"></i> {per.type} <br /></small>): ''}
                    <small><i className="fas fa-globe-americas"></i> {per.location.name} </small>
                    <small><i className="fas fa-photo-video"></i> episodios {per.episode.length}</small>
                </p>
            </div>
        </div>
    )
}

export default Personaje
