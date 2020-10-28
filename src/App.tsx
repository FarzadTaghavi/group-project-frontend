import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import Homepage from "./pages/Homepage"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  )
}

export default App
