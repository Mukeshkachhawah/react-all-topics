import { useEffect, useState } from "react";
import MyContext from "./Context-Api/MyContext";
import axios from "axios";
import ChildComponent from "./Context-Api/ChildComponent";

const App = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const apiFetch = async () => {
  //     const response = await axios(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const datas = await response.json();
  //     setData(datas);
  //     console.log(datas);
  //   };
  //   apiFetch();
  // }, []);

  useEffect(() => {
    const apiData = new Promise((res, rej) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        });
    });

    apiData
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <MyContext.Provider value={data}>
        <ChildComponent />
      </MyContext.Provider>
    </>
  );
};

export default App;
