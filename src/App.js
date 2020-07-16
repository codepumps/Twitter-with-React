import React from "react";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//styled components
import styled from "styled-components";
import GlobalStyles from "./styles/global";
//components
import Main from "./components/Main";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Wrapper>
            <MenuBar />
            <Main />
            <SideBar />
          </Wrapper>
        </Container>
      </Router>


      <GlobalStyles />
    </>
  );
}

export default App;

const Container = styled.div`
    /* height:100vh; */
    background:var(--primary);
`

const Wrapper = styled.div`
    height:100%;
    max-width:1280px;
    margin:0 auto;
    display:flex;
    justify-content:center;
`
