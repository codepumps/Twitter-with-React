import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import human from "../../images/human.jpg";
import { Settings2Outline, NotificationStar, ChevronDown } from "../../styles/icons";

const NotificationMain = () => {
    const [state, setState] = useState(true);
    const match = useRouteMatch();

    const notifications = [
        {
            id: "1",
            src: human,
            name: "Hatice Edis",
            header: `, fka adlı bir kişinin videosunu Retweetledi`,
            content: "Bir de console.dir var, özellikle front-end geliştirirken HTML Node'larını inspect etmek için aşırı faydalı. console.dir($0) ile son seçilen elementi tümüyle görebiliyorsunuz. + https://pic.twitter.com/SWFT06r1tB"
        },
        {
            id: "2",
            src: human,
            name: "Hatice Edis",
            header: `, adlı kullanıcının yeni Tweeti`,
            content: "Fatih abi çok haklı. Bir teknoloji, projenin gereksinimlerini, işimizi ne kadar otomatize etmemizi sağlar, projeye sonradan dahil olan geliştirici hangisinde kolay adapte olur diye düşünerek seçildiğinde başka bir teknoloji daha kötü anlamına gelmiyor. Herşey proje ve ekibe bakar."
        },
        {
            id: "3",
            src: human,
            name: "Hatice Edis",
            header: `, Furkan Topaloğlu #f4n adlı bir kişinin videosunu beğendi`,
            content: "Bu ceviri okuyan oldu mu? Ceviri versiyonu almaya deger mi yoksa Ingilizce pdften mi devam etmek lazim? @fkadev abi sen almistin diye hatirliyorum. Yorumlarini paylasabilir misin? https://pic.twitter.com/5LkxKaulEl"
        },
        {
            id: "4",
            src: human,
            name: "Hatice Edis",
            header: `, turkceyaz adlı kişinin Tweetini beğendi`,
            content: "türkçeyaz bundan çok gurur duyuyor"
        },
    ]
    const talkAbout = [];
    const handleClick = (e) => {
        let parent = e.target.parentElement.parentElement;
        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].children[0].className = "";
        }
        e.target.className += "active";

        if (e.target.text === "Tümü") {
            setState(true)
        }
        else {
            setState(false)
        }
    }
    return (
        <>
            <Header>
                <span>Bildirimler</span>
                <div>
                    <SettingsIcon />
                </div>
            </Header>
            <Links>
                <li>
                    <Link className="active" onClick={(e) => { handleClick(e) }} to={`${match.url}`}>Tümü</Link>
                </li>
                <li>
                    <Link onClick={(e) => { handleClick(e) }} to={`${match.url}/mentions`}>Bahsedenler</Link>
                </li>
            </Links>
            {
                state ?
                    <Notifications>
                        {
                            notifications.map((item) => {
                                return <Item key={item.id}>
                                    <span className="star">
                                        <NotificationStar />
                                    </span>
                                    <Content>
                                        <div className="head">
                                            <img src={item.src} alt="" />
                                            <span>
                                                <DownIcon />
                                            </span>
                                        </div>
                                        <div className="text-content">
                                            <span>
                                                <strong>{item.name}</strong>{item.header}
                                            </span>
                                            <p>{item.content}</p>
                                        </div>
                                    </Content>
                                </Item>
                            })
                        }
                    </Notifications>

                    :
                    talkAbout.length > 0 ? talkAbout.map((index) => {
                        return <div>{index}</div>
                    })
                        : <EmptyContent>
                            <strong>Burada görecek bir şey yok. Henüz...</strong>
                            <span>
                                Birisi senden bahsettiği zaman, onu burada bulacaksın.
                            </span>
                        </EmptyContent>

            }
        </>

    )
}

export default NotificationMain

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    z-index:2;
    background:var(--primary);
    padding:8px 15px;
    /* border-bottom:1px solid var(--outline); */
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

const SettingsIcon = styled(Settings2Outline)`
    width:24px;
    height:24px;
    fill:var(--twitter);
`

const Links = styled.ul`
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:center;
    justify-content:center;
    text-align:center;
    list-style-type:none;
    /* margin-top:17px; */
    border-bottom:1px solid var(--profile-background);
    >li{
        >a{
            cursor:pointer;
            display:block;
            padding:20px 0;
            text-decoration:none;
            color:var(--gray);
            font-weight:500;
            
            &:hover{
                background:var(--twitter-dark-hover);
                color:var(--twitter);
            }
            &.active{
                color:var(--twitter);
                border-bottom:3px solid var(--twitter);
                }
            }
    }
`;

const Notifications = styled.div`
    display:flex;
    flex-direction:column;
`
const Item = styled.div`
    display:flex;
    padding:12px 6px;
    width:100%;
    height:auto;
    border-bottom:1px solid var(--outline);
    >span.star{
        >svg{
            margin-left:15px;
            margin-right:5px;
        }   
    }

`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    >div{
        &.head{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:10px;
            >img{
                width:30px;
                height:30px;
                border-radius:50%;
            }
            >span{
                padding:3px;
                cursor:pointer;
                svg{
                    fill:var(--gray);   
                }
                &:hover{
                    border-radius:50%;
                    background:#162632;
                    svg{
                        fill:var(--twitter);
                    }
                }
            }
        }
        &.text-content{
            >p{
                margin-top:10px;
                color:var(--gray);
                font-size:15px;
                width:100%;
            }
        }
    }
`
const EmptyContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:35px;
    flex-direction:column;
    >strong{
        font-size:19px;
        margin-bottom:10px;
    }
    >span{
        color:var(--gray);
        font-size:15px;
        font-weight:400;
    }
`

const DownIcon = styled(ChevronDown)`
    width:24px;
    height:24px;
`