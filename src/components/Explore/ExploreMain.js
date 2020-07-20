import React from 'react'
import styled from "styled-components";
import { Settings2Outline, SearchOutline } from "../../styles/icons";

const ExploreMain = () => {
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
    z-index:2;
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

