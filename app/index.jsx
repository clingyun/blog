import './style/app.scss'    //样式引入
import React,{Component}from 'react'
import {render} from 'react-dom'
import { browserHistory, hashHistory, Router, IndexRoute, IndexRedirect, Redirect, Route, Link } from 'react-router'
import Home from './views/home'
class App extends Component{
    render() {
        //JSX here!
        return (
          <div className="container">
            {this.props.children}
          </div>
        )
    }
};
render((
    <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
      </Route>
    </Router>
  ),document.getElementById('appWrapper'))
