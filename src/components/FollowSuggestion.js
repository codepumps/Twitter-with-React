import React from 'react'
import styled from "styled-components";
import Button from "./Button";

const FollowSuggestion = () => {
    const followers = [
        {
            id: 1,
            name: "Ekrem Kul",
            mail: "@ekremkl61"
        },
        {
            id: 2,
            name: "Ayse Esra",
            mail: "@ekremkl61"
        },
        {
            id: 3,
            name: "Selman Kahya",
            mail: "@selmankahya"
        }
    ]
    return (
        <Container>
            <Item>
                <span>Bunları beğenebilirsin</span>
            </Item>
            {
                followers.map(follower => {
                    return <Item key={follower.id}>
                        <Avatar />
                        <div>
                            <strong>{follower.name}</strong>
                            <span>{follower.mail}</span>
                        </div>
                        <FollowButton theme={{
                            main: "transparent",
                            btnColor: "var(--twitter)",
                            btnBorder: "1px solid var(--twitter)",
                            hoverMain: "var(--twitter-more-dark-hover)"
                        }}
                        >Takip et</FollowButton>
                    </Item>
                })
            }
        </Container>
    )
}

export default FollowSuggestion

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:var(--secondary);
    border-radius:14px;
    margin:5px 0px 16px;
`
const Item = styled.div`
    display:flex;
    padding:10px 16px;
    position:relative;

    &:first-child{
        font-size:19px;
        font-weight:bold;
    }

    >div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding-left:7px;

        >strong{
            font-size:16px;
        }
        >span{
            font-size:14px;
            color:var(--gray);
        }
    }
    &+div{
        border-top:1px solid var(--outline)
    }

`
const Avatar = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background:var(--gray);
`

const FollowButton = styled(Button)`
    /* display:flex;
    justify-content:center;
    align-items:center; */
    position:absolute;
    right:8px;
    margin-top:8px;
    padding:6px 17px;
`