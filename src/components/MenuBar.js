import React from 'react'
import styled, { css } from "styled-components";
import { Twitter, HomeCircle, Hash, Notifications, Email, BookmarkOutline, Person, FileList2, MoreHorizontal, Feather, ChevronDown } from "../styles/icons";
import Button from "../components/Button";
import profile from "../images/profile.jpg"

const MenuBar = () => {
    return (
        <Container>
            <TopSide>
                <Logo />
                <MenuButton>
                    <HomeIcon />
                    <span>Anasayfa</span>
                </MenuButton>
                <MenuButton>
                    <HashIcon />
                    <span>Keşfet</span>
                </MenuButton>
                <MenuButton>
                    <NotificationsIcon />
                    <span>Bildirimler</span>
                </MenuButton>
                <MenuButton>
                    <EmailIcon />
                    <span>Mesajlar</span>
                </MenuButton>
                <MenuButton>
                    <BookmarkOutlineIcon />
                    <span>Yer İşaretleri</span>
                </MenuButton>
                <MenuButton>
                    <FileListIcon />
                    <span>Listeler</span>
                </MenuButton>
                <MenuButton className="active">
                    <PersonIcon />
                    <span>Profil</span>
                </MenuButton>
                <MenuButton>
                    <MoreIcon />
                    <span>Daha Fazla</span>
                </MenuButton>
                <TweetleBtn theme={{
                    main: "var(--twitter)",
                    btnColor: "var(--twit-text)",
                    btnBorder: "none",
                    hoverMain: "var(--twitter-light-hover)"
                }}>
                    <FeatherIcon />
                    <span>Tweetle</span>
                </TweetleBtn>
            </TopSide>

            <BottomSide>
                <Avatar src={profile} />
                <ProfileData>
                    <strong>Serkan Sayhan</strong>
                    <span>@serkan_sayhan</span>
                </ProfileData>
                <DownIcon />
            </BottomSide>
        </Container>
    )
}

export default MenuBar

const Container = styled.div`
    display:none;

    @media(min-width:500px){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        
        position:sticky;
        top:0;
        left:0;
        padding:10px 20px 20px;
        max-height:100vh;
        overflow-y:auto;
    }
`
const TopSide = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    @media(min-width:1280px){
        align-items:flex-start;
    }
    padding-right:15px;
    
`
const MenuButton = styled.div`
    display:flex;
    align-items:center;
    flex-shrink:0;
    >span{
        display:none;
    }
    @media(min-width:1280px){
        >span{
            display:inline;
            font-size:19px;
            font-weight:bold;
            margin-left:17px;
        }
    }
    padding:12px 5px;
    cursor:pointer;
    border-radius:25px;
    &:hover{
        background:var(--twitter-dark-hover);
    }
    &:hover,
    &.active{
        >span,svg{
            color:var(--twitter);
            fill:var(--twitter);
        }
        
    }
    
`
const TweetleBtn = styled(Button)`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    >svg{
        display:none;
    }
    @media(max-width:1280px){
        width:55px;
        height:55px;
        border-radius:50%;
        >span{
            display:none;
        }
        >svg{
            display:inline-block;
            width:20px;
            height:20px;
        }
    }
    margin-top:18px;
`

const BottomSide = styled.div`
    display:flex;
    align-items:center;
    margin-top:20px;
    cursor:pointer;
    padding:10px 4px;
    border-radius:25px;
    &:hover{
        background:var(--twitter-dark-hover);
    }
`
const Avatar = styled.img`
    width:40px;
    height:40px;
    flex-shrink:0;
    border-radius:50%;

`;
const ProfileData = styled.div`
    display:none;

    @media(min-width:1280px){
        display:flex;
        flex-direction:column;
        margin-left:10px;
        font-size:14px;

        >span{
            color:var(--gray);
        }
    }
`;

const iconCommonCss = css`
    flex-shrink:0;
    width:30px;
    height:30px;
    color:#fff;
`;
const Logo = styled(Twitter)`
    width:42px;
    height:42px;
    margin-bottom:20px;
    cursor:pointer;
    >svg{
        fill:var(--twitter);
    }
    
`
const HomeIcon = styled(HomeCircle)`
    ${iconCommonCss}
`
const HashIcon = styled(Hash)`
    ${iconCommonCss}
`
const NotificationsIcon = styled(Notifications)`
    ${iconCommonCss}
`
const EmailIcon = styled(Email)`
    ${iconCommonCss}
`
const BookmarkOutlineIcon = styled(BookmarkOutline)`
    ${iconCommonCss}
`
const PersonIcon = styled(Person)`
    ${iconCommonCss}
`
const FileListIcon = styled(FileList2)`
    ${iconCommonCss}
`
const MoreIcon = styled(MoreHorizontal)`
    ${iconCommonCss}
    border:2px solid var(--white);
    border-radius:50%;
`
const FeatherIcon = styled(Feather)`
    width:20px;
    height:20px;
`
const DownIcon = styled(ChevronDown)`
    display:none;
    width:25px;
    height:25px;
    color:var(--white);
    @media(min-width:1280px){
        display:inline-block;
        margin-left:40px;
    }
`;
