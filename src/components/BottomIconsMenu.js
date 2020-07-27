import React, { useState } from 'react'
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Email, SearchOutline, Notifications, HomeCircle } from "../styles/icons";

const BottomIconsMenu = () => {
    const [isClicked, setIsClicked] = useState({
        home: true,
        explore: false,
        notifications: false,
        messages: false
    })

    const handleClick = (state) => { //Daha kısa yolu var mı diye bak !!
        setIsClicked(isClicked.home = false,
            isClicked.explore = false,
            isClicked.notifications = false,
            isClicked.messages = false
        );
        if (state === "home") {
            setIsClicked({ ...isClicked, home: true })
        }
        else if (state === "explore") {
            setIsClicked({ ...isClicked, explore: true })
        }
        else if (state === "notifications") {
            setIsClicked({ ...isClicked, notifications: true })
        }
        else {
            setIsClicked({ ...isClicked, messages: true })
        }
    }
    let state = ["home", "explore", "notifications", "messages"];
    return (
        <BottomIcons>
            <Link to="/home" className={isClicked.home ? "active" : null} onClick={() => handleClick(state[0])}>
                <HomeIcon />
            </Link>
            <Link to="/explore" className={isClicked.explore ? "active" : null} onClick={() => handleClick(state[1])}>
                <SearchIcon />
            </Link>
            <Link to="/notifications" className={isClicked.notifications ? "active" : null} onClick={() => handleClick(state[2])}>
                <BellIcon />
            </Link>
            <Link to="/messages" className={isClicked.messages ? "active" : null} onClick={() => handleClick(state[3])}>
                <EmailIcon />
            </Link>
        </BottomIcons >
    )
}

export default BottomIconsMenu

const BottomIcons = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    display:flex;
    left:0;
    justify-content:space-between;
    background:var(--primary);
    border-top:1px solid var(--outline);
    padding:8px;
    @media(min-width:500px){
        display:none;
    }
    >a{
        text-decoration:none;
        &.active{
            >svg{
                fill:var(--twitter)
            }
        }
    }

`
const iconCommonCss = css`
    width:28px;
    height:28px;
    cursor:pointer;
    fill:var(--gray);

    &:hover{
        fill:var(--twitter);
    }
`;

const HomeIcon = styled(HomeCircle)`
    ${iconCommonCss}
`
const EmailIcon = styled(Email)`
    ${iconCommonCss}

`
const SearchIcon = styled(SearchOutline)`
    ${iconCommonCss}

`
const BellIcon = styled(Notifications)`
    ${iconCommonCss}

`