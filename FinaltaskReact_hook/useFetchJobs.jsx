import React, { useEffect, useState } from 'react'

 function useFetchJobs(url) {
    const [user,setuser] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setuser(data)
        })
    },[]);
  return data;
}
export default useFetchJobs;