import React, { useContext } from 'react'
import styled from "styled-components";
import { Twitter, Verified } from "../styles/icons";
import Modal from "react-modal";

//components
import Button from "./Button";
//context
import { ColorsContext } from "../context/Colors";

Modal.setAppElement('#root');

const ScreenModal = ({ closeModal, isOpenModal }) => {
    const { theme, textColor, handleChangeColor, handleChangeTheme } = useContext(ColorsContext);

    const handleInputClick = (prop) => {
        let topParent = prop.parentElement.parentElement;
        for (let i = 0; i < topParent.children.length; i++) {
            topParent.children[i].classList.remove("selected");
            topParent.children[i].children[0].checked = false;
        }
        //We disabled every checkboxes button and I enable checkbox which clicked.
        prop.checked = true;
        let val = prop.parentElement;
        if (prop.checked) {
            val.className += " selected";
        }
        else {
            val.classList.remove("selected");
        }
    }
    const handleSelectColor = (prop) => {
        let parent = prop.parentElement.parentElement.parentElement;
        console.log(prop.parentElement.parentElement.parentElement);

        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].children[0].children[0].checked = false;
        }
        prop.checked = true;
    }
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
                <Color>
                    <label>
                        <input checked="checked" onClick={(e) => handleSelectColor(e.target)} type="checkbox" />
                        <span className="checkmark blue"></span>
                    </label>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f499.svg" alt="" />
                </Color>
                <Color>
                    <label>
                        <input onClick={(e) => handleSelectColor(e.target)} type="checkbox" />
                        <span className="checkmark yellow"></span>
                    </label>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/2b50.svg" alt="" />
                </Color>
                <Color>
                    <label>
                        <input onClick={(e) => handleSelectColor(e.target)} type="checkbox" />
                        <span className="checkmark red"></span>
                    </label>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f338.svg" alt="" />
                </Color>
                <Color>
                    <label>
                        <input onClick={(e) => handleSelectColor(e.target)} type="checkbox" />
                        <span className="checkmark purple"></span>
                    </label>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f419.svg" alt="" />
                </Color>
                <Color>
                    <label>
                        <input onClick={(e) => handleSelectColor(e.target)} type="checkbox" />
                        <span className="checkmark orange"></span>
                    </label>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f525.svg" alt="" />
                </Color>
                <Color>
                    <label>
                        <input onClick={(e) => handleSelectColor(e.target)} type="checkbox" />
                        <span className="checkmark green"></span>
                    </label>
                    <img src="https://abs-0.twimg.com/emoji/v2/svg/1f951.svg" alt="" />
                </Color>
            </SelectColor>
            <BackgroundHeader>Arka Plan</BackgroundHeader>
            <SelectBackground>
                <label class="default">Varsayılan
                    <input value="light" name="theme" onClick={(e) => handleInputClick(e.target)} type="checkbox" checked={"light" === theme} onChange={(e) => handleChangeTheme(e.target.value)} />
                    <span class="checkmark"></span>
                </label>
                <label class="loess">Loş
                    <input value="dim" name="theme" onClick={(e) => handleInputClick(e.target)} type="checkbox" checked={"dim" === theme} onChange={(e) => handleChangeTheme(e.target.value)} />
                    <span class="checkmark"></span>
                </label>
                <label class="dark">Işıklar kap...
                    <input value="dark" name="theme" onClick={(e) => handleInputClick(e.target)} type="checkbox" checked={"dark" === theme} onChange={(e) => handleChangeTheme(e.target.value)} />
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
`
const Color = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:90px;
    >label{
        display:block;
        position:relative;
        width:auto;
        cursor:pointer;
        font-weight:bold;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

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

        >input{
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        >span.checkmark {
            position: absolute;
            left: -20px;
            height: 40px;
            width: 40px;
            border-radius:50%;
            transition:0.1s all;
        }
        >input:not(:checked) ~ .checkmark:hover{
            left:-22.5px;
            height: 45px;
            width: 45px;
        }
        >input:checked ~ .checkmark{
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
            left: 16px;
            top: 10px;
            width: 6px;
            height: 16px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }

    >img{
            width:30px;
            height:30px;
            margin-top:10px;
        }

    /*color for every select button */
    
    
`;
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
    background-color:var(--secondary);
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
        border-color:#1DA1F2;
    }
    >label{
        display:block;
        position:relative;
        width:auto;
        cursor:pointer;
        padding:15px 15px 15px 50px;
        border-radius:5px;
        border:2px solid transparent;
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