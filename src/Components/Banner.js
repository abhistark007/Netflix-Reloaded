import React, { useEffect, useState } from 'react'
// import banner1 from '../assets/banner.jpg'
import axios from '../axios';
import requests from '../apis/Request';

function Banner() {

    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);

            return request;
        }

        fetchData()
    },[])


    console.log(movie);

    function turncate(string,n){
        return string?.length>n?string.substring(0,n-1)+"...":string;
    }

  return (
    <div className='h-[26rem] text-white pt-32 flex flex-col gap-3 bg-black' style={{
        backgroundSize:"auto",
        // objectFit:"contain",
        backgroundImage:`url(${"https://image.tmdb.org/t/p/original/"+movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize:"contain",
        // backgroundPosition:"fixed",
        backgroundPosition:"center",
        
        
       

    }}>
        <h1 className='text-5xl font-bold px-32 '>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className='flex px-32 gap-4'>
            <button className='bg-black px-7 py-2 opacity-60 font-bold duration-200 ease-in-out hover:opacity-100 cursor-pointer rounded-lg'>Play</button>
            <button className='bg-black px-7 py-2 opacity-60 font-bold duration-200 ease-in-out hover:opacity-100 cursor-pointer rounded-lg'>MyList</button>
        </div>
        <p className=' mx-32 px-3 py-2 w-96  '>
        {turncate(movie?.overview,150)} 
       
        </p>

        <div className='h-[7.4rem] bg-gradient-to-t from-gray-400 to-transparent'></div>
    </div>
  )
}

export default Banner