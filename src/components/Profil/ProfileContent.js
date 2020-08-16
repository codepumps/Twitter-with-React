import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import Tweet from "../Tweet";
import Button from "../Button";

const ProfileContent = () => {
    const [linkStates, setLinkStates] = useState({
        Tweet: true,
        response: false,
        media: false,
        like: false
    });
    const match = useRouteMatch();

    const handleClick = (e) => {
        setLinkStates(linkStates.Tweet = false, linkStates.like = false, linkStates.media = false, linkStates.response = false);

        let parent = e.target.parentElement.parentElement;
        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].children[0].className = "";
        }
        e.target.className = "active";

        if (e.target.text === "Tweetler") {
            setLinkStates({ ...linkStates, Tweet: true });
        }
        else if (e.target.text === "Tweetler ve yanıtlar") {
            setLinkStates({ ...linkStates, response: true });
        }
        else if (e.target.text === "Medya") {
            setLinkStates({ ...linkStates, media: true });
        }
        else {
            setLinkStates({ ...linkStates, like: true });
        }
    }
    const tweets = [
        {
            id: 1,
            retweet: false,
            name: "Selman Kahya",
            mail: "@selmankahya",
            time: "15 May",
            description: "JavaScript, yaygın olarak web tarayıcılarında kullanılmakta olan bir betik dilidir. JavaScript ile yazılan istemci tarafı betikler sayesinde tarayıcının kullanıcıyla etkileşimde bulunması, tarayıcının kontrol edilmesi, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sağlanır. JavaScript, Node.js gibi platformlar sayesinde sunucu tarafında da yaygın olarak kullanılmaktadır.",
            image: {
                status: true,
                image: "../img/1.jpg"
            },
            comment: 72,
            retweetCount: 100,
            like: 360,
            isLike: true,
            isRetweet: false
        },
        {
            id: 2,
            retweet: true,
            name: "Hatice Edis",
            mail: "@haticedis",
            time: "17 Şub",
            description: "İşaretleme dili olan Html, web sayfalarının hazırlanmasında kullanılan sistemdir. Bir programlama dili olmayan Html bilgisayarlarımızda kullandığımız web sitelerinin oluşturulmasında kullanılır. Chrome, Fİrefox ve İnternet Explorer gibi tarayıcılar html kodlarını işleyerek bu kodları web sayfasına dönüştürür.",
            image: {
                status: false,
                image: ""
            },
            comment: 50,
            retweetCount: 70,
            like: 128,
            isLike: true,
            isRetweet: false
        },
        {
            id: 3,
            retweet: true,
            name: "Atakan Karabağlar",
            mail: "@atakankrbglar",
            time: "3 Kas",
            description: "Bilindiği üzere HTML metin biçimlendirme konusunda sitenin birçok farklı noktası adına fazla seçenek imkânı verir. CSS programı ise bu seçeneği daha üst düzey geniş bir çapta, fırsat olanakları ile sunmaktadır. Uzun ismi ile (Cascading Style Sheets) olarak bilinen ve Türkçe anlamı olarak ise Stil Şablon adıyla isimlendirilmiş bu sistem site bünyesindeki her sayfa adına daha geniş bir seçenek dünyası içerisinde evrensel şablonlar hazırlama olanağı verir.",
            image: {
                status: true,
                image: ""
            },
            comment: 158,
            retweetCount: 879,
            like: 1256,
            isLike: true,
            isRetweet: false
        }

    ]
    return (
        <Container>
            <Links>
                <li>
                    <Link className="active" onClick={e => handleClick(e)} to={`${match.url}`} >Tweetler</Link>
                </li>
                <li>
                    <Link onClick={e => handleClick(e)} to={`${match.url}/with_replies`} >Tweetler ve yanıtlar</Link>
                </li>
                <li>
                    <Link onClick={e => handleClick(e)} to={`${match.url}/media`}>Medya</Link>
                </li>
                <li>
                    <Link onClick={e => handleClick(e)} to={`${match.url}/likes`}>Beğeni</Link>
                </li>
            </Links>

            <Tweets>

                {
                    linkStates.Tweet &&
                    tweets.map((tweet) => {
                        return <Tweet key={tweet.id} tweet={tweet} />
                    })
                }
                {
                    linkStates.response &&
                    <Response>
                        <strong>Henüz bir içerik Tweetlemedin</strong>
                        <span>Bir tweet veya bir tweeti yanıtladığın zaman, burada gözükecekler.</span>
                    </Response>
                }
                {
                    linkStates.media &&
                    <Media>
                        <strong>Henüz bir fotoğraf veya video Tweetlemedin</strong>
                        <span>Bir fotoğraf ya da video içeren Tweetler attığın zaman, burada gözükecekler.</span>
                        <Button theme={{
                            main: "var(--twitter)",
                            btnColor: "var(--twit-text)",
                            btnBorder: "none",
                            hoverMain: "var(--twitter-light-hover)"
                        }}>Bir fotoğraf ya da video Tweetle</Button>
                    </Media>
                }
                {
                    linkStates.like &&
                    tweets.map((tweet) => {
                        return <Tweet key={tweet.id} tweet={tweet} />
                    })
                }

            </Tweets>
        </Container>
    )
}

export default ProfileContent


const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

const Links = styled.ul`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    list-style-type:none;
    margin-top:5px;
    border-bottom:1px solid var(--outline);

    >li{
        >a{
            display:block;
            color:var(--gray);
            font-weight:bold;
            padding:20px 0;
            flex-basis:auto;
            text-decoration:none;
            cursor:pointer;

            &:hover{
                color:var(--twitter);
                background:var(--twitter-dark-hover);
            }
            &.active{
                color:var(--twitter);
                border-bottom:2px solid var(--twitter);
            }
        } 
        
    }
`;

const Tweets = styled.div`
    display:flex;
    flex-direction:column;
    flex-shrink:0;
`;

const Media = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:50px 0;

    >strong{
        font-size:20px;
        font-weight:bold;
        margin-bottom:15px;
    }
    >span{
        color:var(--gray);
        margin-bottom:18px;
    }
`;

const Response = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:50px 0;

    >strong{
        font-size:20px;
        font-weight:bold;
        margin-bottom:15px;
    }
    >span{
        color:var(--gray);
    }
`;