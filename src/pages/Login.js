import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Twitter, LoginSearchIcon, LoginPeopleIcon, LoginChatIcon } from "../styles/icons";

const Login = () => {
    const links = [
        "Hakkında", "Yardım Merkezi", "Şartlar", "Gizlilik Politikası", "Çerezler",
        "Reklam Bilgisi", "Blog", "Durum", "İşler", "Marka", "Reklam ver", "Pazarlama",
        "İşletmeler", "Geliştiricler", "Dizin", "Ayarlar", "© 2020 Twitter, Inc."
    ];
    return (
        <Wrapper>
            <Grid>
                <LeftGrid>
                    <TwitterBack className="background" />
                    <div className="content">
                        <div className="search">
                            <LoginSearchIcon />
                            <span>İlgi alanlarını takip et.</span>
                        </div>
                        <div className="people">
                            <LoginPeopleIcon />
                            <span>İnsanların neler hakkında konuştuğuna kulak ver.</span>
                        </div>
                        <div className="chat">
                            <LoginChatIcon />
                            <span>Sohbete katıl.</span>
                        </div>
                    </div>
                </LeftGrid>
                <RightGrid>
                    <form>
                        <div className="inputs-content">
                            <div className="input-content">
                                <span>Telefon, e-posta veya kullanıcı adı</span>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="inputs-content">
                            <div className="input-content">
                                <span>Şifre</span>
                                <input type="text" />
                            </div>
                            <Link>Şifreni mi unuttun ?</Link>
                        </div>
                        <button type="submit">Giriş yap</button>
                    </form>
                    <RightContent>
                        <div className="container">
                            <TwitterRightIcon />
                            <strong>Dünyada şu anda olup bitenleri gör</strong>
                            <span>Twitter'a bugün katıl.</span>
                            <div className="buttons">
                                <button className="btn-register" type="submit">Kaydol</button>
                                <button className="btn-login" type="submit">Giriş yap</button>
                            </div>
                        </div>
                    </RightContent>
                </RightGrid>
            </Grid>
            <BottomLinks>
                {links.map((item, index) => {
                    return (
                        <Link key={index}>{item}</Link>
                    )
                })}
            </BottomLinks>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
`
const Grid = styled.div`
    display:flex;
    width:100%;
    height:100%;
`
const LeftGrid = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    align-items:stretch;
    width:50%;
    z-index:0;
    background:rgb(113, 201, 248);
    overflow:hidden;
    >svg.background{
        position:absolute;
        top:-30vh;
        right:-50vh;
        max-width:none;
        height:160vh;
        fill:rgb(29, 161, 242);
        z-index:2;
    }
    >div.content{   
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        position:relative;
        z-index:3;
        >div{
            display:flex;
            justify-content:center;
            margin-bottom:40px;
            >span{
                font-size:19px;
                margin-left:15px;
                color:rgb(255,255,255);
                font-weight:bold;
                line-height:1.3125;
                overflow-wrap: break-word;
            }
        }
    }
`
const RightGrid = styled.div`
    color:var(--twitter);
    width:50%;
    >form{
        display:none;
        @media (min-width:980px){
            display:flex;
            justify-content:center;
            margin-top:15px;
            width:100%;
            padding:0 15px;
            >div.inputs-content{
                margin-right:15px;
                width:30%;
                >div.input-content{
                    display:flex;
                    flex-direction:column;
                    background:rgb(245, 248, 250);
                    /* &+input:focus{
                        >span{
                            color:#33A1F2;
                        }
                    } */
                    >input{
                        border-bottom:1.5px solid var(--gray);
                        padding:0 10px;
                        color:#000;
                        outline:none;
                        font-size:19px;
                        &:focus{
                            border-bottom:1.5px solid #33A1F2;
                        }
                    }
                    >span{
                        max-width:100%;
                        color:var(--gray);
                        font-size:15px;
                        padding:5px 10px;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                    }
                }
                >a{
                    display:flex;
                    justify-content:flex-start;
                    margin-top:5px;
                    margin-left:10px;
                    font-size:13px;
                    text-decoration:none;
                    color:#33A1F2;
                    
                    &:hover{
                        text-decoration:underline;
                    }
                }
            }
            >button{
                display:flex;
                justify-content:center;
                align-items:center;
                margin-top:10px;
                background:transparent;
                color:#33A1F2;
                min-width: calc(62.79px);
                font-size:15px;
                font-weight:bold;
                height:39px;
                border:1px solid #33A1F2;
                border-radius:20px;
                padding:6px 12px;
                cursor:pointer;

                &:hover{
                    background:#E8F5FE;
                }
            }
        }
    }
`


const RightContent = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    margin:120px auto;
    padding:0 20px;
    >div.container{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;

        >strong{
            overflow-wrap:break-word;
            font-weight:bold;
            line-height:1.3125;
            font-size:30px;
            margin-top:20px;
            color:rgb(20, 23, 26);
        }
        >span{
            margin-top:59px;
            margin-bottom:15px;
            font-weight:bold;
            color:rgb(20, 23, 26)
        }
        >div.buttons{
            display:flex;
            flex-direction:column;
            width:100%;
            >button{
                font-size:15px;
                font-weight:bold;
                line-height: 1;
                width:100%;
                min-width: calc(62.79px);
                min-height: 39px;
                cursor:pointer;
                border-radius: 9999px;
                outline:0;

            }
            >button.btn-register{
                background:#1A91DA;
                color:rgb(255,255,255);
                margin-bottom:15px;
                &:hover{
                    background:#0b7bbc;
                }
            }
            >button.btn-login{
                background:transparent;
                border:1px solid #1A91DA;
                color:#1A91DA;
                &:hover{
                    background:#E8F5FE;
                }
            }
        }
    }
`



const BottomLinks = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    padding:10px 15px;
    >a{
        text-decoration:none;
        font-size:13px;
        font-weight:400;
        padding-right:15px;
        line-height:calc(19.785px);
        margin:5px 0;
        color: rgb(101, 119, 134);
        &:hover{
            text-decoration:underline;
        }
    }
`

const TwitterBack = styled(Twitter)`

`
const TwitterRightIcon = styled(Twitter)`
    font-size:15px;
    fill:#33A1F2;
    width:45px;
    height:45px;
`