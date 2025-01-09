import withClickCounter from "./Hoc";
import SimpleButton from "./Simplebutton";

const ButtonWithCounter = withClickCounter(SimpleButton);

const App = () => {
  return (
    <div>
      <ButtonWithCounter lable="Click me" />
      <ButtonWithCounter label="Press Here!" />
    </div>
  );
};

export default App;
