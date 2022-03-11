import React from 'react';
import { Switch, Route } from "react-router-dom";
import AddMember from './component/AddMember';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/add-member">
          <AddMember />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
