import React from 'react'
import styled from "styled-components";
import { Twitter, Verified } from "../styles/icons";
import Modal from "react-modal";

//components
import Button from "./Button";

Modal.setAppElement('#root');

const ScreenModal = ({ closeModal, isOpenModal }) => {
    console.log(closeModal, isOpenModal);
    return (
        <Modal isOpen={isOpenModal} onRequestClose={() => closeModal()}
            style={{
                overlay: {
                    backgroundColor: "var(--send-tweet-background)"
                },
                content: {
                    backgroundColor: "var(--primary)",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "600px",
                    maxHeight: "840px",
                    margin: "0 auto",
                    flexShrink: 1,
                    zIndex: "1001",
                    border: "none",
                    borderRadius: "20px",
                    padding: "0"
                }
            }}
        >
            <Header>
                <strong>Görünümünü özelleştir</strong>
                <p className="description">Ekran ayarları, bu tarayıcıdaki tüm Twitter hesaplarını etkiler. Bu ayarları yanlızca sen görebilirsin.</p>
                <TwitterMessage>
                    <span>
                        <TwitterIcon />
                    </span>
                    <div className="content">
                        <div className="head-info">
                            <strong>Twitter</strong>
                            <VerifiedIcon />
                            <span>@Twitter</span>
                        </div>
                        <p>
                            Twitter'ın merkezinde, tıpkı bunun gibi Tweet denen kısa mesajlar yatar.
                            Tweetler; fotoğrafları, videoları, bağlantıları, metinleri ve <span>#hashtags</span> etkilerini içerebilir.
                        </p>
                    </div>
                </TwitterMessage>
            </Header>
            <ColorHeader>Renk</ColorHeader>
            <SelectColor>
                <div>
                    <span className="blue"></span>
                    {/* <input type="checkbox" /> */}
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f499.svg" alt="" />
                </div>
                <div>
                    <span className="yellow"></span>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/2b50.svg" alt="" />
                </div>
                <div>
                    <span className="red"></span>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f338.svg" alt="" />
                </div>
                <div>
                    <span className="purple"></span>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f419.svg" alt="" />
                </div>
                <div>
                    <span className="orange"></span>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f525.svg" alt="" />
                </div>
                <div>
                    <span className="green"></span>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f951.svg" alt="" />
                </div>
            </SelectColor>
            <BackgroundHeader>Arka Plan</BackgroundHeader>
            <SelectBackground>
                <label class="default selected">Varsayılan
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                </label>
                <label class="loess">Loş
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="dark">Işıklar kap...
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
            </SelectBackground>
            <CloseButton onClick={() => closeModal()} theme={{
                main: "var(--twitter)",
                btnColor: "var(--twit-text)",
                btnBorder: "none",
                hoverMain: "var(--twitter-light-hover)"
            }}>Bitti</CloseButton>
        </Modal>
    )
}

export default ScreenModal

const Header = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:38px 30px 20px;
    >strong,p.description{
        text-align:center;
    }
    >strong{
        font-weight:800;
        font-size:24px;
        line-height:1,3125;
        margin-bottom:15px;
    }
    >p.description{
        color:var(--gray);
    }
`
const TwitterMessage = styled.div`
    display:flex;
    border:1px solid var(--outline);
    justify-content:flex-start;
    border-radius:12px;
    padding:14px 16px;
    max-width:450px;
    margin:20px auto;
    font-size:16px;

    >div.content{
        >div.head-info{
            >strong{
                margin-right:3px;
            }
            >svg{
                margin-right:5px;
            }
            >span{
                color:var(--gray);
            }
        }
        >p{
            >span{
                color:var(--twitter);
            }
        }
    }

    >span{
        font-size:16px;
        >svg{
            width:50px;
            height:50px;
            padding:8px;
            margin-right:10px;
            border-radius:50%;
            background-color:var(--twitter);
        }
    }
`
const TwitterIcon = styled(Twitter)`
    fill:var(--white);
`;
const VerifiedIcon = styled(Verified)`
    width:19px;
    height:19px;
    fill:var(--white);
`
const ColorHeader = styled.div`
    margin:5px 30px;
    color:var(--gray);
    font-weight:600;
    font-size:15px;
`
const SelectColor = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 20px;
    border-radius:12px;
    margin:0 30px;
    background-color:var(--secondary);
    >div{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        width:100%;
        height:90px;
        >span{
            max-width:100%;
            height:100%;
            cursor:pointer;
            border-radius:50%;
            width:40px;
            height:40px;
            transition:0.1s all;
            &:hover{
                width:48px;
                height:48px;
            }
        }
        >input{
            color:#1DA1F2;
            max-width:100%;
            height:100%;
            border-radius:50%;
            width:40px;
            height:40px;
            transition:0.1s all;
        }
        >img{
            width:30px;
            height:30px;
            margin-top:10px;
        }

        /*color for every select button */
        >span.blue{
            background-color:#1DA1F2;
        }
        >span.yellow{
            background-color:#FFAD1F;
        }
        >span.red{
            background-color:#E0245E;
        }
        >span.purple{
            background-color:#794BC4;
        }
        >span.orange{
            background-color:#F45D22;
        }
        >span.green{
            background-color:#17BF63;
        }
    }
    
`
const BackgroundHeader = styled.div`
    margin:10px 30px;
    color:var(--gray);
    font-weight:600;
    font-size:15px;
`
const SelectBackground = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 50px;
    padding:10px 15px;
    border-radius:12px;
    background-color:#15181C;
    >label.default{
        background-color:rgb(255,255,255);
        color:#000;
    }
    >label.loess{
        background-color:#15202B;
        color:#f1f1f1;
    }
    >label.dark{
        background-color:#000;
        color:#f1f1f1;
    }
    >label.selected{
        border:2px solid #1DA1F2;
    }
    >label{
        display:block;
        position:relative;
        width:auto;
        cursor:pointer;
        padding:15px 15px 15px 50px;
        border-radius:5px;
        font-weight:bold;
        font-size: 16px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        >input{
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        >span.checkmark {
            position: absolute;
            top: 17px;
            left: 13px;
            height: 22px;
            width: 22px;
            background-color:transparent;
            border:2px solid #7A7A7A;
            border-radius:50%;
        }
        >input:checked ~ .checkmark{
            background-color: #2196F3;
            border:none;
        }
        >span.checkmark::after{
            content: "";
            position: absolute;
            display: none;
        }
        >input:checked ~ span.checkmark:after{
            display:block;
        }
        >span.checkmark:after {
            left: 8px;
            top: 4px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 1px 1px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
`
const CloseButton = styled(Button)`
    margin:30px auto;
    padding:9px 12px;
    width:70px;
`;