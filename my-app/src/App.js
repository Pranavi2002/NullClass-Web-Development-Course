import "./App.css";
import { HelloWorld, Concern, ByeWorld } from "./components/HelloWorld";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  // var counter = 0;
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    // console.log(counter);
  };
  console.log(counter);

  useEffect(() => {
    document.title = `clicked ${counter} times`;
  }, [counter]);

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" className="text">
            Home
          </Link>
          <Link to="/contact" className="text">
            Contact
          </Link>
          <Link to="/about" className="text">
            About
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" render = {() => (
          <>
          <h1>Hello World</h1>
          <p>Welcome to ReactJS tutorial</p>
          <HelloWorld />
          <Concern text="How are you?" />
          <ByeWorld />
          <button onClick={increment}>click me!</button>
          <h1>{counter}</h1>
          </>
          )}/>
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
