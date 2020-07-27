import React from 'react'
import styled from "styled-components";
import { BookmarksMoreIcon } from "../../styles/icons";
import Tweet from "../Tweet";


const BookmarksMain = () => {
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
            like: 360
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
            like: 128
        },
    ]
    return (
        <>
            <Header>
                <div>
                    <strong>Yer İşaretleri</strong>
                    <span>@serkan_sayhan</span>
                </div>
                <span>
                    <BookmarksMoreIcon />
                </span>
            </Header>
            <Tweets>
                {
                    !!tweets &&
                    tweets.map(tweet => {
                        return <Tweet key={tweet.id} tweet={tweet} />
                    })
                }
            </Tweets>
        </>
    )
}

export default BookmarksMain

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    z-index:2;
    background:var(--primary);
    padding:8px 15px;
    cursor:pointer;
    border-bottom:1px solid var(--outline);
    >div{
        display:flex;
        flex-direction:column;
        justify-content:center;

        >strong{
            font-size:19px;
            font-weight:900;
        }
        >span{
            font-weight:400;
            font-size:13px;
            color:var(--gray);
        }
    }
    >span{
        padding:6px;
        border-radius:50%;
        &:hover{
            background:var(--twitter-dark-hover);
        }
    }
`;

const Tweets = styled.div`
    display:flex;
    flex-direction:column;
    flex-shrink:0;
    padding-bottom:250px;
`;
