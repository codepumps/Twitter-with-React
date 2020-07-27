import React, { useState } from 'react'
import styled from "styled-components";
import Button from "./Button";

const FollowSuggestion = () => {
    const [clicked, setClicked] = useState(false);
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
        },
        {
            id: 4,
            name: "Mahmut Salabayık",
            mail: "@mahmut78"
        },
        {
            id: 5,
            name: "Adnan Kaya",
            mail: "@adnankaya"
        },
        {
            id: 6,
            name: "Batuhan Buruk",
            mail: "@batuhanbrk"
        }
    ]
    let items = clicked ? followers.slice(0, 6) : followers.slice(0, 3);
    return (
        <Container>
            <Item>
                <span>Bunları beğenebilirsin</span>
            </Item>
            {
                followers.length > 3 ?
                    items.map(follower => {
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
                    :
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
            {
                followers.length > 3 ?
                    <Item className={clicked ? "none" : null} onClick={() => setClicked(true)}>
                        <button>Daha fazla göster</button>
                    </Item>
                    : null
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
    &:not(:first-child){
        cursor:pointer;
    }
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
    &:not(:first-child):hover{
        background:var(--twitter-dark-hover);
    }
    >button{
        cursor:pointer;
        font-weight:400;
        font-size:16px;
        overflow-wrap: break-word;
        line-height:1.3125;
        color:var(--twitter);
        /* padding-left:7px; */
        outline:none;
    }
    &.none{
        display:none;
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