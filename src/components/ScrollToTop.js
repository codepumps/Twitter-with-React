import React from "react";
import { withRouter } from "react-router-dom";

const pages = ["/profil/with_replies", "/profil/media", "/profil/likes", "/notifications/mentions"];
class ScrollToTop extends React.Component {

    componentDidUpdate(prevProps) {
        for (let i = 0; i < pages.length; i++) { // I don't wanna update every change route.
            if (pages[i] === this.props.location.pathname) {
                return null;
            }
        }
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);