import { Route, Switch, useLocation } from "react-router-dom";
import Select from "./components/Select";
import Title from "./components/Title";
import { AnimatePresence } from "framer-motion";
import "./styles/App.scss";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Title} />
          <Route exact path="/select" component={Select} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
