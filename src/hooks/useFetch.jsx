import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const getData = async (url) =>{
            try {
                let res = await fetch(url)

                if(!res.ok){
                    throw{
                        error:true,
                        status:res.status,
                        statusText: !res.statusText ? 'Ocurrió un error' : res.statusText
                    }
                }
                
                let json = await res.json();

                setIsPending(false)
                setData(json)
                setError({error:false})

            } catch (error) {
                setIsPending(null)
                setError({error})
            }
            

        }

        getData(url)
    },[url])

    return{data, isPending, error}
}