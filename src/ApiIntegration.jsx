import axios from "axios";
import { useEffect, useState } from "react";
function useApi (url){
    const [user,setuser]= useState([])
    const[loading,setloading]=useState(false)
    const [error,seterror] = useState(null)
    useEffect(()=>{
       const fetchapi = async()=>{
         try {
            setloading(true)
            const response = await axios.get (url)
            setuser(response.data)
            
        } catch (error) {
            seterror(error.message)
        }
        finally{
            setloading(false)

        }
       }
       fetchapi();
    },[url]);
    return{ user,loading,error}
}
export default useApi;