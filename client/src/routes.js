import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./components/AuthPage";
import { CreatePage } from "./components/CreatePage";
import { DetailsPage } from "./components/DetailsPage";
import { LinksPage } from "./components/LinksPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/details/:id">
          <DetailsPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
