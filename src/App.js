import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/Home.js";
import AddPage from "./pages/Add.js";
import EditPage from "./pages/Edit.js";
import "./App.css";

const Container = styled.div`
  text-align: center;
  `;

function App() {
  return (
    <Container>
      
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/edit">
          <EditPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        
    </Container>
  );
};

export default App;