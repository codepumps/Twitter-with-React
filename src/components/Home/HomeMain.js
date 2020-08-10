import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import { HomeStarIcon, HomeChatGalery, HomeChatDate, HomeChatGif, HomeChatSmile, HomeChatSurvey } from "../../styles/icons";
import profile from "../../images/profile.jpg";
import Tweet from "../Tweet";
import Loading from "../Loading";

const HomeMain = () => {
    const [postList, setPostList] = useState({
        initialPosts: [
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
                isLike: false,
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
                isLike: false,
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
                isLike: false,
                isRetweet: false
            },
        ]
    });
    // tracking on which page we currently are
    const [page, setPage] = useState(1);
    //add loader refrence
    const loader = useRef(null);
    const allData = [
        {
            id: 4,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 5,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 6,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 7,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 8,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 9,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 10,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 11,
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
            isLike: false,
            isRetweet: false
        },
        {
            id: 12,
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
            isLike: false,
            isRetweet: false
        }

    ]

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        // initialize IntersectionObserver
        // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    useEffect(() => {
        // here we simulate adding new posts to List
        const newList = postList.initialPosts.concat(allData);
        setPostList({
            initialPosts: newList
        })
    }, [page])

    // here we handle what happens when user scrolls to Load More div
    // in this case we just update page variable
    const handleObserver = (entities) => {
        // const y = entities[0].boundingClientRect.y;
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }

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
                {
                    postList.initialPosts.map(tweet => (
                        <Tweet key={tweet.id} tweet={tweet} />
                    ))
                }
                <div className="loading" ref={loader}>
                    <Loading />
                </div>
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

    >div.loading{
        text-align:center;
    }
`;