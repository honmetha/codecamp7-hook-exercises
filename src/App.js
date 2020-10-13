import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";
import Exercise6 from "./pages/Exercise6";
import Exercise7 from "./pages/Exercise7";
import Exercise8 from "./pages/Exercise8";
import Exercise9 from "./pages/Exercise9";
import Exercise10 from "./pages/Exercise10";
import Home from "./pages/Home";
import NameContext from "./context/NameContext";

function App() {
  return (
    <NameContext.Provider value={"John"}>
      <Router>
        <Switch>
          <Route path="/exercise-10" component={Exercise10} />
          <Route path="/exercise-9" component={Exercise9} />
          <Route path="/exercise-8" component={Exercise8} />
          <Route path="/exercise-7" component={Exercise7} />
          <Route path="/exercise-6" component={Exercise6} />
          <Route path="/exercise-5" component={Exercise5} />
          <Route path="/exercise-4" component={Exercise4} />
          <Route path="/exercise-3" component={Exercise3} />
          <Route path="/exercise-2" component={Exercise2} />
          <Route path="/exercise-1" component={Exercise1} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </NameContext.Provider>
  );
}

export default App;
