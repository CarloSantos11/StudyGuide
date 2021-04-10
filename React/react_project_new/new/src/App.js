import "./App.css";
import Box from "./component/Box";

function App() {
  return (
  <div className="App">
    <Box 
      heading="This is a box"
      message="Click Here"
      popUpMessage="Look Up Here!"/>
    <Box 
      heading="something"
      message="Different button"
      popUpMessage="I say this now!"/>
    <Box 
      heading="Hello there"
      message="More info"
      popUpMessage="Different text again."/>
  </div>
  );
}


//props
//jsx -> html in our JS
//components


//state
export default App;
