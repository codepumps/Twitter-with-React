import React from "react";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//styled components
import GlobalStyles from "./styles/global";
//components
// import Main from "./components/Main";

//Layouts
import MainLayout from "./components/Layouts/Layout";
import LoginLayout from "./components/Layouts/LoginLayout";

//pages
import Bookmarks from "./pages/Bookmarks";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import BottomIconsMenu from "./components/BottomIconsMenu";

const AppRoute = ({ page: Page, layout: Layout, ...rest }) => { // use different layout page.
  return (
    <Route {...rest} render={props => (
      <Layout>
        <Page {...props} />
        <BottomIconsMenu />  {/*Bottom Menu for every page*/}
      </Layout>
    )} />
  )
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <AppRoute exact path="/" layout={LoginLayout} page={Login} />
          <AppRoute path="/home" layout={MainLayout} page={Home} />
          <AppRoute path="/explore" layout={MainLayout} page={Explore} />
          <AppRoute path="/notifications" layout={MainLayout} page={Notifications} />
          <AppRoute path="/messages" layout={MainLayout} page={Messages} />
          <AppRoute path="/bookmarks" layout={MainLayout} page={Bookmarks} />
          <AppRoute path="/lists" layout={MainLayout} page={Lists} />
          <AppRoute path="/profil" layout={MainLayout} page={Profil} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
