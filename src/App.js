import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginForm from "./components/LoginForm"
import Home from "./components/Home"
import Products from "./components/Products"
// import Cart from "./components/Cart";
import NotFound from "./components/NotFound"
import BlogList from './components/BlogList'
import BlogItemDetails from './components/BlogItemDetails'
import ProtectedRoute from "./components/ProtectedRoute"
import FunZone from "./components/FunZone"
import BombBlast from "./components/BombBlast"
import GuessNumberGame from './components/GuessNumberGame'
import Quiz from "./components/Quiz"

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      {/* <ProtectedRoute exact path="/cart" component={Cart} /> */}
      <ProtectedRoute exact path="/blogs" component={BlogList} />
      <ProtectedRoute exact path="/blogs/:id" component={BlogItemDetails} />
      <ProtectedRoute exact path="/fun-zone" component={FunZone} />
      <ProtectedRoute exact path="/fun-zone/bomb-defuse" component={BombBlast} />
      <ProtectedRoute exact path="/fun-zone/random-number" component={GuessNumberGame} />
      <ProtectedRoute exact path="/fun-zone/quiz" component={Quiz} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;