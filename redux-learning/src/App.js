import './App.css';
import './tailwind.css';
import Home from "./component/home";
import Model from "./component/model";

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1 className='heading'> Todo App</h1>
      <Model />
      <Home />
      </div>
    </div>
  );
}

export default App;
