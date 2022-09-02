import React from 'react'
import { NavLink} from 'react-router-dom'

function Artist(props) {
    const{id,name,genres,followers}  = props;
  
    return (
    <div className="col-md-4 mt-2 b-2">
        <div className="card">
            <div className="card-header text-center">
                <h5 className="text-secondary">{name}</h5>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Genres</strong>
                        <span className="float-end">{genres}</span>
                    </li>
                    <li className="list-group-item">
                        <strong>Followers</strong>
                        <span className="float-end">{followers.total}</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <NavLink to={`/tracks/${id}`} className="btn btn-secondary">Tracks</NavLink>
            </div>
        </div>
    </div>
    
  )
}

export default Artist