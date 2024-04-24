import { useState, useEffect } from "react";

//? This custom hook manages post requests.

export const usePost = (url, postObject) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mssge, setMssge] = useState();


  //? Reset the error and success state after 2 seconds
  useEffect(() => {
    let timer;
    if (error || success) {
      timer = setTimeout(() => {
        setError(false);
        setSuccess(false);
        setMssge("");
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [error, success]);
  

  const handlePress = async(e) => {
    e.preventDefault();
    try {
      //? Check if any of the values in the postObject is empty
        if(Object.values(postObject).some((value) => value == "" | undefined)) {
            setError(true);
            setMssge('All fields are required')
            return;
        }

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObject),
        })

        const data = await res.json();
        console.log(data);

        if(data.message){
          setSuccess(true)
        }

        setMssge(data.message)

        if (data.token) {
            localStorage.setItem("token", data.token)
        }
        return true
    } catch (error) {
        console.error("Error: ", error);
        setError(true);
        setMssge(error)
        setSuccess(false)
    }
  }

  return {
    error,
    success,
    mssge,
    handlePress,
  };
};
