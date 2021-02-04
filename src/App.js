//import logo from './logo.svg';
//import './App.css';
import React from "react";
// eslint-disable-next-line no-unused-vars
import {NavLink, Route} from 'react-router-dom';
import TodoFeature from "./features/todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
        Header
        <p><NavLink to="/todos" activeClassname="active-menu">Todos</NavLink></p>
        <p><NavLink to="/albums" activeClassname="active">Albums</NavLink></p>

        <Route path="/todos" component={TodoFeature}/>
        <Route path="/albums" component={AlbumFeature}/>
    </div>
  );
}

export default App;
