import React from 'react'
import styled from "styled-components";
import { BookmarksMoreIcon } from "../../styles/icons";
import Tweet from "../Tweet";


const BookmarksMain = () => {
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
                <Tweet />
                <Tweet />
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
