import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home.js";
import Projects from "./pages/projects.js";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/projects"}>
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
