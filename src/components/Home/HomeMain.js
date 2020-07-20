import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import { HomeStarIcon, HomeChatGalery, HomeChatDate, HomeChatGif, HomeChatSmile, HomeChatSurvey } from "../../styles/icons";
import profile from "../../images/profile.jpg";
import Tweet from "../Tweet";

const HomeMain = () => {
    return (
        <>
            <Header>
                <span>Anasayfa</span>
                <div>
                    <HomeStarIcon />
                </div>
            </Header>
            <Chat>
                <Link to="/profil">
                    <Avatar src={profile} />
                </Link>
                <Text>
                    <textArea placeholder="Neler oluyor?">
                    </textArea>
                    <TextBottom>
                        <div>
                            <span >
                                <HomeChatGalery />
                            </span>
                            <span>
                                <HomeChatGif />
                            </span>
                            <span className="none-icon">
                                <HomeChatSurvey />
                            </span>
                            <span>
                                <HomeChatSmile />
                            </span>
                            <span className="none-icon">
                                <HomeChatDate />
                            </span>
                        </div>
                        <SubmitBtn
                            theme={{
                                main: "var(--twitter)",
                                btnColor: "var(--twit-text)",
                                btnBorder: "none",
                                hoverMain: "var(--twitter-light-hover)"
                            }}>Tweetle</SubmitBtn>
                    </TextBottom>
                </Text>
            </Chat>
            <BottomSpace />
            <Tweets>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </Tweets>
        </>
    )
}

export default HomeMain

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    z-index:2;
    background:var(--primary);
    padding:8px 15px;
    border-bottom:1px solid var(--outline);
    >span{
        font-weight:900;
        font-size:19px;
    }
    >div{
        cursor:pointer;
        padding:6px;
        border-radius:50%;

        &:hover{
            background:var(--twitter-dark-hover);
        }
    }
`;

const Chat = styled.div`
    display:none;
    padding:12px 15px;
    @media(min-width:500px){
        display:flex;
        justify-content:space-between;
    }
`
const Avatar = styled.img`
    width:49px;
    height:49px;
    flex:1;
    border-radius:50%;
`
const Text = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:6px 15px;
    flex:3;
    >textarea{
        font-weight:600;
        font-size:19px;
        width:100%;
        outline:0;
        padding-top:3px;
        padding-bottom:6px;
        resize:none;
        &::placeholder{
            color:var(--gray);
        }
    }  
    >textarea:focus{
        &::placeholder{
            color:#A4A7AE;
        }
    }  
`
const TextBottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    >div{
        display:flex;
        >span{
            cursor:pointer;
            padding:8px;
            border-radius:50%;
            &:hover{
                background:var(--twitter-dark-hover);
            }
        }
        >span.none-icon{
            display:none;
                @media (min-width:705px){
                    display:inline-block;
            }
        }
    }
`
const SubmitBtn = styled(Button)`
    padding:9px 15px;
    opacity:.5;
    cursor:default;
`

const BottomSpace = styled.div`
    height:10px;
    width:100%;
    background:rgb(32, 35, 39);
`

const Tweets = styled.div`
    display:flex;
    flex-direction:column;
    flex-shrink:0;
`;