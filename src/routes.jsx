import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Category } from "./pages/category";
import { Home } from "./pages/home";
import { Item } from "./pages/item";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/a-medida">
          <Home />
        </Route>
        <Route exact path="/nosotros">
          <Home />
        </Route>
        <Route exact path="/contacto">
          <Home />
        </Route>
        <Route exact path="/productos">
          <Category />
        </Route>
        <Route path="/productos/:categoryId">
          <Category />
        </Route>
        <Route path="/item/:itemId">
          <Item />
        </Route>
      </Switch>
    </Router>
  );
};
