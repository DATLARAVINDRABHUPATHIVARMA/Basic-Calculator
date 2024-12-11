import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";

function App() {
  return (
    <div className="calculator">
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;