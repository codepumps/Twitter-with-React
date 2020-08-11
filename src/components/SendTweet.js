import React, { useState } from 'react'
import styled from "styled-components";
import { HomeChatGalery, HomeChatDate, HomeChatGif, HomeChatSmile, HomeChatSurvey, CloseOutline } from "../styles/icons";
import Button from "./Button";
import Modal from "react-modal";
import profile from "../images/profile.jpg"


Modal.setAppElement('#root')

const SendTweet = ({ closeModal, isOpenModal }) => {
    const [tweet, setTweet] = useState("");

    return (
        <Modal isOpen={isOpenModal} onRequestClose={() => closeModal()} style={{
            overlay: {
                backgroundColor: 'var(--send-tweet-background)',
            },
            content: {
                color: 'orange',
                backgroundColor: "var(--primary)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: "600px",
                maxHeight: "330px",
                margin: "0 auto",
                flexShrink: 1,
                zIndex: "1001",
                border: "none",
                borderRadius: "20px",
                padding: "0"
            }
        }}>
            <CloseModal>
                <CloseIcon onClick={() => closeModal()} style={{ fill: "var(--twitter)" }} />
            </CloseModal>
            <TweetArea>
                <Avatar src={profile} />
                <WhatsHappening>
                    <textarea onChange={(e) => setTweet(e.target.value)} name=""
                        rows="6"
                        placeholder="Neler oluyor?">
                    </textarea>
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
                        <SubmitBtn className={tweet ? "light" : null}
                            theme={{
                                main: "var(--twitter)",
                                btnColor: "var(--twit-text)",
                                btnBorder: "none",
                                hoverMain: "var(--twitter-light-hover)"
                            }}>Tweetle</SubmitBtn>
                    </TextBottom>
                </WhatsHappening>
            </TweetArea>

        </Modal>
    )
}

export default SendTweet

const CloseModal = styled.div`
    float:left;
    padding:15px 20px;
    top:0px;
    border-bottom:1px solid var(--outline);
`
const TweetArea = styled.div`
    display:flex;
    width:100%;
    height:100%;
    padding:10px 15px 15px;    
`
const Avatar = styled.img`
    width:53px;
    height:53px;
    flex-shrink:0;
    border-radius:50%;
`
const WhatsHappening = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    margin-left:13px;
    padding-top:10px;
    >textarea{
        font-weight:400;
        font-size:20px;
        resize:none;
        outline:none;
        background-color:transparent;
        display:block;
        width:100%;
        height:auto;
        overflow:hidden;
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

    &.light{
        opacity:1;
    }
`
const CloseIcon = styled(CloseOutline)`
    width:30px;
    height:30px;
    &:hover{
        cursor:pointer;
    }
`

