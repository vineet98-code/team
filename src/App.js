import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import AddMember from './component/AddMember';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';
import data from './utils/data.json'

function App() {
  const [contacts, setContacts] = useState(data)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
    if (contacts) {
      setContacts(contacts);
    }
  }, [contacts])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home contacts={contacts} setContacts={setContacts} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/add-member">
          <AddMember contacts={contacts} setContacts={setContacts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
