import { useEffect, useState } from "react"

export const useGet = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setSuccess(data.message);
        return true;
      } catch (error) {
        console.log("Error fetching: ", error);
        setError(error)
      }
    }
    fetchData();
  },[])

    return {
        data,
        error,
        success,
    }
}
