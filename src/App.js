
import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
// import {Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
function App(){
  return(
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Switch>
          <Route path="/about"> <About/></Route>
          <Route path="/"><Home/></Route>
      </Switch>

     </BrowserRouter>
    </div>);
}

export default App;
