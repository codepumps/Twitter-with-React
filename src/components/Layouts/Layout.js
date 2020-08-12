import React from 'react'
import styled from "styled-components";
import MenuBar from "../MenuBar";
import SideBar from "../SideBar";
import MessagesList from "../Messages/MessagesList";

const Layout = (props) => {
    return (
        <Container>
            <Wrapper>
                <MenuBar />
                { // When open the message page, you can see the change content, that's why I wanted to make like that.
                    props.path === "/messages" ?
                        <MessagesList />
                        : <Content>
                            {props.children}
                        </Content>
                }
                {
                    props.path === "/messages" ?
                        <Content>
                            {props.children}
                        </Content>
                        : <SideBar />
                }
            </Wrapper>
        </Container>
    )
}

export default Layout

const Container = styled.div`
    height:auto;
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
    z-index:0;/*for popaps */
    @media(min-width:500px){
        border-left:1px solid var(--profile-background);
        border-right:1px solid var(--profile-background);
    }
`