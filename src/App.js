import './App.css';
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello"
// import Counter from "./components/Counter"
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Greet from "./components/Greet"
// import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">This is children props</Greet> */}
      {/* <Greet name="Clark"  heroName="Superman"> */}
        {/* <button>Action</button> */}
     
        {/* <Greet name="Diana"  heroName="Wonder Women"/> */}
      
      {/* <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Welcome name="Clark"  heroName="Superman"/> */}
      {/* <Welcome name="Diana"  heroName="Wonder Women"/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
