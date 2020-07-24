import React from 'react'
import styled from "styled-components";

const LoginLayout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default LoginLayout

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
`
