//Custom hook ek function hota hai jisme aap React ki built-in hooks (jaise useState, useEffect, useReducer, etc.) ka use karke apni logic likhte ho. Yeh hooks React component se alag hote hain aur reusable hote hain, isliye aap unhe kisi bhi component mein use kar sakte ho.
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); // Setting data to state
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return { data };
};

export default UseFetch;
