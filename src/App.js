import { BrowserRouter as Router , Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      {/* <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} /> */}
    </Router>
  );
}

export default App;
