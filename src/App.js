import React from 'react';
import './App.css';
import Boxer from './components/box/box.js'
import Container from './components/container/Container'
import Grid from './components/grid/grid'
function App() {
  return (
    <div className="App">
      <div>this is here</div>
      <Boxer></Boxer>
      <Container></Container>
      <Grid></Grid>
    </div>
  );
}

export default App;
