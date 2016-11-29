import React,{Component}from 'react'
import {render} from 'react-dom'
import { browserHistory, hashHistory, Router, IndexRoute, IndexRedirect, Redirect, Route, Link } from 'react-router'

export default class Home extends Component{
    render() {
        return (
          <div className="container">
            <section className="jumbotron">
              <h3 className="jumbotron-heading">This is home Page</h3>
            </section>
          </div>
        )
    }
};
