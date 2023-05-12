import React, { useEffect, useState } from 'react'
import netflixLogo from '../assets/netflix_logo.png'
import reloadedLogo from '../assets/reloaded_logo.png'
import userImage from '../assets/netuser.jpg'

import { Avatar,Badge } from '@mui/material';
import { styled } from '@mui/material/styles';



function Nav() {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));


      const [show,handleShow]=useState(false);

      const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
      }


      useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener("scroll",transitionNavBar);
      },[])



    return (
        <div className={`flex justify-between items-center px-10 max-md:justify-center fixed w-full  z-50 
        duration-200 ease-in ${show?"bg-black":"bg-transparent"}
        `}>
            <div className='relative cursor-pointer'>
                <img src={netflixLogo} alt='Netflix Reloaded' className='relative w-40' />
                <img src={reloadedLogo} alt='Netflix Reloaded' className='absolute w-4 right-0 bottom-2 ' />
            </div>
            <div className="max-md:hidden cursor-pointer shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
            <StyledBadge 
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                
            >
                <Avatar src={userImage} sx={{width:50,height:50}} variant='rounded'/>
            </StyledBadge>
            </div>

        </div>
    )
}

export default Nav