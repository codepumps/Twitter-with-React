import React from 'react'
import styled, { css } from "styled-components";
import { ArrowLeft, Email, SearchOutline, Notifications, HomeCircle } from "../styles/icons";
import ProfilePage from "../components/ProfilePage";
const Main = () => {
    return (
        <>
            <Header>
                <button>
                    <ArrowIcon />
                </button>

                <ProfileInfo>
                    <h2>Serkan Sayhan</h2>
                    <span>5 Twettler</span>
                </ProfileInfo>
            </Header>

            {/* Profile Page */}
            <ProfilePage />

            {/* Profile Bottom Icons */}

            <BottomIcons>
                <HomeIcon className="active" />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomIcons>
        </>
    )
}

export default Main


// const Container = styled.div`
//     display:flex;
//     flex-direction:column;
//     width: min(601px, 100%);

//     @media(min-width:500px){
//         border-left:1px solid var(--profile-background);
//         border-right:1px solid var(--profile-background);
//     }
// `

const Header = styled.div`
    z-index:2;
    position:sticky;
    top:0;
    background:var(--primary);
    display:flex;
    align-items:center;
    text-align:left;
    border-bottom:1px solid var(--outline);
    padding:5px 0;
    >button{
        padding:8px;
        border-radius:50%;
        outline:0;
        cursor:pointer;

        &:hover{
            background:var(--twitter-dark-hover)
        }
    }

`
const ArrowIcon = styled(ArrowLeft)`
    min-width:59px;
    height:22px;
    fill:var(--twitter); 
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;

    >h2{
        font-size:19px;
    }
    >span{
        font-size:15px;
        color:var(--gray);
    }
`

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

`
const iconCommonCss = css`
    width:28px;
    height:28px;
    cursor:pointer;
    fill:var(--gray);

    &:hover,
    &.active{
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