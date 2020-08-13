import React from "react"
import { Route, Switch, BrowserRouter} from "react-router-dom";
import MainIndex from "./MainIndex"
import ShowIndex from "./ShowIndex"
import ShowDetails from "./ShowDetails"
import About from "./About"

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainIndex} />
      <Route exact path="/shows" component={ShowIndex} />
      <Route exact path="/shows/:id" component={ShowDetails} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
  )
}

export default App
