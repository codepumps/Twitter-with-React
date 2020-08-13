import React, { useState } from 'react'
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Twitter, Hash, BellOutline, Email, BookmarkOutline, Person, FileList2, MoreHorizantalIcon, ChevronDown, MenubarTweetIcon, MenubarHomeIcon } from "../styles/icons";
//More Button Icons
import { IssueIcon, MomentsIcon, AdvertismentIcon, StatisticsIcon, PrivacyIcon, QuestionIcon, ScreenIcon } from "../styles/icons";

//components
import Button from "./Button";
import SendTweet from "./SendTweet";
import profile from "../images/profile.jpg";
import ScreenModal from "./ScreenModal";


const MenuBar = () => {
    const [isOpenTweetModal, setIsOpenTweetModal] = useState(false);
    const [isOpenScreenModal, setIsOpenScreenModal] = useState(false);
    const [isClickedMoreButton, setIsClickedMoreButton] = useState(false);

    const closeTweetModal = () => {
        setIsOpenTweetModal(false);
        document.body.style.overflow = 'visible';
    }
    const handleClick = () => {
        setIsOpenTweetModal(true);
        document.body.style.overflow = 'hidden';
    }
    const handleMoreButtonClick = () => {
        setIsOpenScreenModal(true);
        document.body.style.overflow = 'hidden';
    }
    const closeScreenModal = () => {
        setIsOpenScreenModal(false);
        document.body.style.overflow = 'visible';
    }
    return (
        <Container>
            <TopSide>
                <Link to="/home">
                    <Logo />
                </Link>
                <Link to="/home">
                    <MenuButton className="active specialIcon">
                        <MenubarHomeIcon />
                        {/* <HomeIcon /> */}
                        <span>
                            Anasayfa
                        </span>
                    </MenuButton>
                </Link>
                <Link to="/explore">
                    <MenuButton>
                        <HashIcon />
                        <span>Keşfet</span>
                    </MenuButton>
                </Link>
                <Link to="/notifications">
                    <MenuButton>
                        <NotificationsIcon />
                        <span>Bildirimler</span>
                    </MenuButton>
                </Link>

                <Link to="/messages">
                    <MenuButton>
                        <EmailIcon />
                        <span>Mesajlar</span>
                    </MenuButton>
                </Link>

                <Link to="/bookmarks">
                    <MenuButton>
                        <BookmarkOutlineIcon />
                        <span>Yer İşaretleri</span>
                    </MenuButton>
                </Link>
                <Link to="/lists">
                    <MenuButton>
                        <FileListIcon />
                        <span>Listeler</span>
                    </MenuButton>
                </Link>
                <Link to="/profil">
                    <MenuButton>
                        <PersonIcon />
                        <span>Profil</span>
                    </MenuButton>
                </Link>
                <MenuButton onClick={() => setIsClickedMoreButton(!isClickedMoreButton)} className="specialIcon">
                    <MoreHorizantalIcon />
                    <span>Daha Fazla</span>
                    <div className={isClickedMoreButton ? "content open-content" : "content"}>
                        <section>
                            <IssueIcon />
                            <span>Konular</span>
                        </section>
                        <section>
                            <MomentsIcon />
                            <span>Anlar</span>
                        </section>
                        <section>
                            <AdvertismentIcon />
                            <span>Twitter Reklamları</span>
                        </section>
                        <section className="addBorder">
                            <StatisticsIcon />
                            <span>İstatistikler</span>
                        </section>
                        <section>
                            <PrivacyIcon />
                            <span>Ayarlar ve gizlilik</span>
                        </section>
                        <section>
                            <QuestionIcon />
                            <span>Yardım Merkezi</span>
                        </section>
                        <section onClick={handleMoreButtonClick}>
                            <ScreenIcon />
                            <span>Ekran</span>
                        </section>
                    </div>
                </MenuButton>
                <TweetleBtn onClick={() => handleClick()} theme={{
                    main: "var(--twitter)",
                    btnColor: "var(--twit-text)",
                    btnBorder: "none",
                    hoverMain: "var(--twitter-light-hover)"
                }}>
                    <MenubarTweetIcon />
                    <span>Tweetle</span>
                </TweetleBtn>
            </TopSide>

            {/* Tweet Modal */}
            {
                isOpenTweetModal && <SendTweet closeModal={closeTweetModal} isOpenModal={isOpenTweetModal} />
            }
            {/*Screen Modal */}
            {
                isOpenScreenModal && <ScreenModal closeModal={closeScreenModal} isOpenModal={isOpenScreenModal} />
            }

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

    >a{
        text-decoration:none;
    }

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
    padding:12px 6px;
    cursor:pointer;
    border-radius:25px;
    >svg{
        fill:var(--white);
    }
    &:hover{
        background:var(--twitter-dark-hover);
    }
    &:hover,
    &.active{
        >svg{
            fill:var(--twitter);
        }
        >span{
            color:var(--twitter);
        }

    }
    &.specialIcon{
        >svg{
            /* fill: var(--white); */
            width: 1.8em;
            height: 1.5em;
            margin-left: 3px;
        }
    }
    &.specialIcon:hover{
        >svg{
            fill:var(--twitter);
        }
    }
    /* css for More Button content  */
    &.speacialIcon{
        position:relative;
    }
    >.content{
        display:none;
        position:absolute;
        background-color:var(--primary);
        top:60px;
        max-width:calc(315px);   
        box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;
        &.open-content{
            display:flex;
            flex-direction:column;
        }

        >section{
            display:flex;
            align-items:center;
            justify-content:flex-start;
            padding:16px;
            
            &.addBorder{
                border-bottom:1px solid var(--outline); 
            }

            &:hover{
                background-color:var(--twitter-dark-hover);
            }
            >span{
                margin-left:10px;
            }
        }
    }

`
const TweetleBtn = styled(Button)`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    padding:16px;
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
    width:35px;
    height:35px;
    margin-bottom:20px;
    cursor:pointer;
    >svg{
        fill:var(--twitter);
    }

`
const HashIcon = styled(Hash)`
    ${iconCommonCss}
`
const NotificationsIcon = styled(BellOutline)`
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
