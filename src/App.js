import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home.js";
import Projects from "./pages/projects.js";
import About from "./pages/about.js";

function App() {
  return (
    <Router>
      <div id="back" >
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/projects"}>
            <Projects />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
