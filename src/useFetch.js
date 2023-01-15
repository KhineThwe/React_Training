import { useEffect, useState } from "react";
const useFetch = ()=>{
   const [data, setData] = useState(null)
   const [isPending, setPending] = useState(true)
   const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
              .then((res) => {
                if (!res.ok) {
                  // error coming back from server
                  throw Error("could not fetch the data for that resource");
                }
                return res.json();
              })
              .then((res) => {
                setData(res);
                setPending(false);
                setError(null);
              })
              .catch((error) => {
                console.log(error);
                setPending(false);
                setError(error.message);
              });
          }, 1000);
      },[]);
      return {data,isPending,error}
}
export default useFetch