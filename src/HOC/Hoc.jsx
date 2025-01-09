import { useState } from "react";

const withClickCounter = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <WrappedComponent {...props} onClick={handleClick} />
        <p>Button clicked {count} times</p>
      </div>
    );
  };
};

export default withClickCounter;
