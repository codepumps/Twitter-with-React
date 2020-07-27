import React from 'react'
import styled from "styled-components";
import { Settings2Outline, SearchOutline } from "../../styles/icons";
import covid from "../../images/covid19.jpg";
import PostSuggestion from "../PostSuggestion";

const ExploreMain = () => {
    const isIcon = false;
    return (
        <>
            <Header>
                <span>

                </span>
                <SearchBar>
                    <SearchInput placeholder="Twitter'da Ara" />
                    <SearchIcon />
                </SearchBar>
                <span>
                    <Settings />
                </span>
            </Header>
            <Event>
                <Image src={covid} />
                <Text>
                    <div>
                        <span>Kovid-19</span>
                        <Point />
                        <span>CANLI</span>
                    </div>
                    <strong>Türkiye'de Kovid-19 ile ilgili güncel gelişmeler</strong>
                </Text>
            </Event>
            <BottomSpace />
            <PostSuggestion isIcon={isIcon} />
        </>
    )
}

export default ExploreMain

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    padding:0 10px;
    top:0;
    z-index:4;
    background:var(--primary);
    height:53px;
    border-bottom:1px solid var(--outline);
    >span{
        cursor:pointer;
        padding:6px;
        border-radius:50%;
        >svg{
            fill:var(--twitter);
        }
        &:hover{
            background:var(--twitter-dark-hover);
        }
    }
`;

const SearchBar = styled.div`
    background:var(--primary);
    display:flex;
    width:100%;
    align-items:center;
    position:relative;
`
const SearchInput = styled.input`
    width:100%;
    font-size:14px;
    height:35px;
    margin-right:24px;
    margin-left:6px;
    padding:7px 0px 7px 52px;
    background:var(--search);
    outline:0;
    border-radius:20px;
    &::placeholder{
        color:var(--gray);
    }
    &+svg{
        position:absolute;
        top:7px;
        left:20px;
        z-index:1;
        fill:var(--gray);
    }
    &:focus{
        border:1px solid var(--twitter);
        &+svg{
            fill:var(--twitter);
        }
    }
    
`
const SearchIcon = styled(SearchOutline)`
    width:22px;
    height:22px;
`

const Settings = styled(Settings2Outline)`
    width:24px;
    height:24px;
`
const Event = styled.div`
    width:100%;
    height:auto; 
    position:relative;
    &::after{
        content:"";
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        bottom:0;
        box-shadow:inset 0 -150px 150px rgb(32, 35, 39);
        z-index:1;  
    }
    border-bottom:1px solid var(--outline);
    cursor:pointer;
`
const Image = styled.img`
    width:100%;
    height:100%;
`
const Text = styled.div`
    position:absolute;
    left:15px;
    bottom:20px;
    z-index:3;
    color:#ffffff;
    >div{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        font-size:12px;

        >span{
            font-weight:500;
        }
    }
    >strong{
        font-size:23px;
        font-weight:900;
    }
`
const Point = styled.div`
    width:2px;
    height:2px;
    border-radius:50%;
    background:var(--white);
    margin:0 4px;    
`

const BottomSpace = styled.div`
    width:100%;
    height:10px;
    top:-3px;
    background:rgb(32, 35, 39);
`
