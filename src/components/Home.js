import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Search from './screens/Search'
import token from '../Util/Token';
import Artist from './screens/Artist';

const URL = "https://api.spotify.com";

const apiHeaders = new Headers();
apiHeaders.append("Authorization", `${token.id}`);

const reqOptions = {
    method:'GET',
    headers:apiHeaders,
    redirect:'follow'
};

function Home() {
    const [artist, setArtist] = useState([]);
    useEffect(() => {
        // searchHandler("sonu nigam");
    },[]);
    
    const searchHandler = (artistName) => {
        fetch(`${URL}/v1/search?q=${artistName}&type=artist`,reqOptions)
            .then(res => res.json)
            .then(data => {
                console.log(`artist list =`, data);
                setArtist(data.artists.items);
            }).catch(err=>toast.error(err.message));
    }

    return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h3 className='display-3'>React Music Player</h3>
            </div>
        </div>
        <div className='row'>
            <Search search={searchHandler}/>
        </div>
        <div className='row'>
            {
                artist.map((item,index)=>{
                    return <Artist key={index} {...item} />
                })
            }
        </div>
    </div>
  )
}

export default Home