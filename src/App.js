import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
