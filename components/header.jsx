import React, { useState } from 'react'

export default function header() {
  const[IsDark,setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  if(IsDark){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
  return (
   <header className='header-container'>
     <div className="header-content">
        <h2 className="title"><a href='/'>Where in the world?</a></h2>
        <p className="theme-changer" onClick={()=>{ 
         setIsDark(!IsDark)
         localStorage.setItem("isDarkMode", !IsDark)
         
        }}><i className={`fa-solid fa-${IsDark? 'sun': 'moon'}`}/>
         &nbsp; &nbsp;{IsDark? 'Light' : 'Dark'} Mode
        </p>
     </div>
   </header>
  
  )
}
