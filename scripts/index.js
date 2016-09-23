'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';
import * as ReactRouter from 'react-router';
let {Navbar, Nav, NavItem, NavDropdown, MenuItem} = ReactBootstrap;
let {Router, Route, IndexRedirect, Redirect, hashHistory} = ReactRouter;

import MyList from './List';
import MyForm from './Form';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#/list">List</NavItem>
      <NavItem eventKey={2} href="#/form">Form</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);
ReactDOM.render(navbarInstance, document.getElementById("navs"));

const routesInstance = (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRedirect to="/list" />
            <Route path="list" component={MyList} />
            <Route path="form" component={MyForm} />
            <Redirect from="*" to="/form" />
        </Route>
    </Router>
);

ReactDOM.render(routesInstance, document.getElementById("pageContent"));