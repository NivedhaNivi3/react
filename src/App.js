import React, { Component } from "react";
import "./App.css";
import Check from "./Learnstate";
import CheckEffect from "./LearnEffect";
import Context from "./LearnContext";
import Ref from "./LearnUseRef";
import MemoComp from './LearnUseMemo.jsx';
import Back from './LearnUseCallback';
import Simplemap from "./reactmap";
class App extends Component {
  render() {
    return (
      <div>
        <Check value="parent" />
        <hr />
        <CheckEffect />
        <hr />
        <Context />
        <hr />
        <Ref />
      <hr/>
      {/* <MemoComp/> */}
      <hr/>
      <Back/>
      <hr/>
      <div style={{width: '100%', height: '400px'}}>
    <Simplemap/>
  </div>
  
      </div>
   
    );
  }
}

export default App;
