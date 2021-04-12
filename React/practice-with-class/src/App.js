import './App.css';
import Box from './component/Box'
import Button from './component/Button'

function App() {
  return (
    <div className="App">
      <Box 
        heading="Our Main Box" 
        message="More info"
        popUpMessage="This is The main info section"
      />
      <Box 
        heading="This Box will Conain information about users" 
        message="User info"
        popUpMessage="This is The User info section"
      />
      <Box 
        heading="This box will have information about classes" 
        message="Classes info"
        popUpMessage="This is The User info section"
      />
      <Button />
    </div>
  );
}

export default App;

// props
// jsx -> html in our JS
// components
// destructuring


// state

