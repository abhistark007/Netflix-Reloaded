import axios from '../axios';
import React, { useEffect, useState } from 'react'



function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);

    const base_Url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
  return (
    <div className='text-white font-semibold text-2xl mx-4 my-4 flex flex-col gap-4'>
        <h2>{title}</h2>
        
        <div className='flex gap-7 mx-10 overflow-x-scroll no-scrollbar  scroll-smooth relative overflow-y-hidden'>
        {
            movies.map((movie)=>(

                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img className={`group select-none ${isLargeRow && "h-72"} w-72 cursor-pointer object-contain duration-200 ease-in hover:scale-110 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]`} 
                key={movie.id}
                
                loading='lazy'
                src={`${base_Url}${
                    isLargeRow? movie.poster_path : movie.backdrop_path
                }`} alt={`${movie.name}`}/>
                ))   
            )
        }
        </div>
        
    </div>
  )
}






export default Row