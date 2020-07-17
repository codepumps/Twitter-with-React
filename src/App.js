import React from "react";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//styled components
import styled from "styled-components";
import GlobalStyles from "./styles/global";
//components
// import Main from "./components/Main";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/SideBar";

//pages
import Bookmarks from "./pages/Bookmarks";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profil from "./pages/Profil";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Wrapper>
            <MenuBar />

            <Content>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/explore">
                  <Explore />
                </Route>
                <Route path="/notifications">
                  <Notifications />
                </Route>
                <Route path="/messages">
                  <Messages />
                </Route>
                <Route path="/bookmarks">
                  <Bookmarks />
                </Route>
                <Route path="/lists">
                  <Lists />
                </Route>
                <Route path="/profil">
                  <Profil />
                </Route>
              </Switch>
            </Content>

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

const Content = styled.div`
    display:flex;
    flex-direction:column;
    width: min(601px, 100%);

    @media(min-width:500px){
        border-left:1px solid var(--profile-background);
        border-right:1px solid var(--profile-background);
    }
`
