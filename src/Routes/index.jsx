import { Switch, Route } from "react-router-dom";
import { Home } from "../Page/Home";
import { Projetos } from "../Page/Projetos";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/projetos">
        <Projetos />
      </Route>
    </Switch>
  );
};
