import React, { useState } from 'react'

function Search(props) {
    const [name, setName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`artist =`, name);
        props.search(name);
    }   

  return (
    <div className='col-md-6 offset-md-3'>
        <div className='card'>
            <div className='card-body'>
                <form autoComplete="off" onSubmit={submitHandler}/>
                <div className="form-group">
                    <div className='input-group'>
                        <input type='search' name='artist' value={name} onChange={(e)=>setName(e.target.value)} id='artist' className='form-control' placeholder='Enter artist name here' required />
                        <input type='submit' value='Search' className='btn btn-success' />
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search