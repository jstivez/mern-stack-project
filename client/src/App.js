import logo from './logo.svg';
//import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
import React from "react"

import {Posts} from "./components/posts"
import { CreatePosts } from './components/CreatePosts';


function App() {
  return (
    <><CreatePosts /><Posts /></>
  );
}

export default App;
