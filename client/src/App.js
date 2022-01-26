import logo from './logo.svg';

import './App.css';

import React from "react"

import {UserProfile} from "./components/userProfile"
import { UserPosts } from './components/posts';
// import { UserPostsTwo } from './components/postTwo';



function App() {
  return (

    <><UserProfile /><UserPosts /></>
  );
}

export default App;
