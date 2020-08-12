import React from 'react';
import styled from "styled-components";
import Button from "../Button";

const SelectedMessage = () => {
    return (
        <Container>
            <strong>Seçili bir mesajın yok</strong>
            <div>Mevcut mesajlarından birini seç veya yeni bir mesaja başla.</div>
            <Button theme={{
                main: "var(--twitter)",
                btnColor: "var(--twit-text)",
                btnBorder: "none",
                hoverMain: "var(--twitter-light-hover)"
            }}>Yeni mesaj</Button>
        </Container>

    )
}

export default SelectedMessage

const Container = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    >strong{
        font-weight:bold;
        font-size:20px;
        margin-bottom:12px;
    }
    >div{
        color:var(--gray);
        margin-bottom:20px;
    }
`;
