import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./kits/NavBar";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route path="/projects/:id">
          <Project />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
