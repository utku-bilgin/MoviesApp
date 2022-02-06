import React from 'react';

export const Card = ({ item }) => {
    return (
        <div className="col-md-3">
            <div className="card" >
                <img
                    src={item.MovieImage} className="card-img-top"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.MovieName}</h5>
                    <p className="card-text">{item.MovieType}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}