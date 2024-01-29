import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/yashasvi1701')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
    
  return (
    <div className='flex justify-center text-center text-1xl m-4 space-x-3 bg-gray-600 p-1 text-white'>
       Name:{data.name} <br/>  Github followers: {data.followers} <br/> Location:{data.location} <br/> Login:{data.login}
        <img  src={data.avatar_url} alt="git pic" width={275}/>
    </div>
  )
}

export default Github