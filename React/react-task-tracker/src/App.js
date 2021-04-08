import Header from './component/Header'
import Tasks from './component/Tasks'

function App() {
  return (
    <div className="container">
      <Header title="Task Tracker" subtitle="Get Things Done"/>
      <Tasks/>
    </div>
  );
}

export default App;
