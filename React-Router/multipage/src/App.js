// React Imports
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Articale } from "./pages/Articale";

// Style
import "./App.css";

//JSX
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>
            <Link to="/">My Articles</Link>
          </h1>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Route path="/articales/:id">
          <Articale />
        </Route>
        <Route path="*">{/* <Redirect to="/" /> */}</Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
