import React from 'react'
import styled from "styled-components";
import { SearchOutline } from "../styles/icons";
import PostSuggestion from "./PostSuggestion";
import FollowSuggestion from "./FollowSuggestion";

const SideBar = () => {
    return (
        <Container>
            <SearchBar>
                <SearchInput placeholder="Twitter'da Ara" />
                <SearchIcon />
            </SearchBar>
            <Body>
                <FollowSuggestion />
                <PostSuggestion />
            </Body>
        </Container>
    )
}

export default SideBar

const Container = styled.div`
    display:none;

    @media(min-width:1005px){
        display:flex;
        flex-direction:column;
        width:min(394px,100%);
    }
`
const SearchBar = styled.div`
    background:var(--primary);
    padding:8px 24px;
    width:min(394px,100%);
    position:fixed;
    top:0;
    z-index:2;
    max-height:60px;
`
const SearchInput = styled.input`
    width:100%;
    height:42px;
    font-size:14px;
    padding:0 10px 0 52px;
    background:var(--search);
    outline:0;
    border-radius:20px;
    &::placeholder{
        color:var(--gray);
    }
    &+svg{
        position:relative;
        top:-35px;
        left:15px;
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
const Body = styled.div`
    display:flex;
    flex-direction:column;
    padding:57px 24px 200px;
    margin-top:5px;
`

const SearchIcon = styled(SearchOutline)`
    width:22px;
    height:22px;
    /* fill:var(--gray); */
`
