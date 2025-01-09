import { useContext } from "react";
import myContext from "./MyContext";

const ChildComponent = () => {
  const data = useContext(myContext);

  return (
    <>
      <h1>ChildComponent</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </>
  );
};

export default ChildComponent;
