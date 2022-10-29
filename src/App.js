import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'
import New from './components/New'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
     <div>
      <Navbar/>
      <Switch>
         <Route path="/home">
            <Home/>
         </Route>
         <Route path="/login">
            <Login/>
         </Route>
         <Route path="/new">
            <New/>
         </Route>
         <Redirect from="/" exact to="/home"></Redirect>
         <Route>
            <PageNotFound/>
         </Route>
      </Switch>
     </div>
  )
}

export default App