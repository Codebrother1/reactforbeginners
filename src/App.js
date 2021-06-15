import Greet from "./components/Greet"
import './App.css';
import Welcome from "./components/Welcome";
// import Hello from "./components/Hello"
// import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">This is children props</Greet> */}
      {/* <Greet name="Clark"  heroName="Superman"> */}
        {/* <button>Action</button> */}
     
        <Greet name="Diana"  heroName="Wonder Women"/>
      
      <Welcome name="Bruce" heroName="Batman"/>
      {/* <Welcome name="Clark"  heroName="Superman"/> */}
      {/* <Welcome name="Diana"  heroName="Wonder Women"/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
