import React from 'react'
import { NavLink } from 'react-router-dom'
function Pnf() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='dol-md-12 text-center'>
                <h3 className='display-3'>Page Not Found</h3>
                <NavLink to={`/`} className='btn btn-link'>Return Home</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Pnf