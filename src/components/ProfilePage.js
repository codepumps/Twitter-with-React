import React from 'react'
import styled, { css } from "styled-components";
import { Calendar, LocationOn, Cake } from "../styles/icons";
import profile from "../images/profile.jpg"
import Button from "../components/Button";
import ProfileContent from "../components/ProfileContent";


const ProfilePage = () => {
    return (
        <Container>
            <Banner>
                <Avatar src={profile} />
            </Banner>
            <ProfileInfo>
                <EditButton
                    theme={{
                        main: "transparent",
                        btnColor: "var(--twitter)",
                        btnBorder: "1px solid var(--twitter)",
                        hoverMain: "var(--twitter-dark-hover)"
                    }
                    }>Profili Düzenle</EditButton>

                <h1>Serkan Sayhan</h1>
                <h2>@serkan_sayhan</h2>
                <p>
                    Computer Engineering at Istanbul Arel University
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Ümraniye, İstanbul
                    </li>
                    <li>
                        <CakeIcon />
                        11 Şubat 1999 da doğdu.
                    </li>
                    <li>
                        <CalenderIcon />
                        Haziran 2015 tarihinde katıldı.
                    </li>
                </ul>
            </ProfileInfo>
            <Followage>
                <span>
                    <strong>38</strong> Takip edilen
                </span>
                <span>
                    <strong>5</strong> Takipçi
                </span>
            </Followage>

            <ProfileContent />
        </Container>
    )
}

export default ProfilePage

const Container = styled.div`
    display:flex;
    flex-direction:column;

    max-height:100%;
    overflow-y:auto;

    scrollbar-width:none;
    ::-webkit-scrollbar{
        display:none;
    }
`;
const Banner = styled.div`
    flex-shrink:0;
    width:100%;
    height:min(33vw,199px);
    background:var(--profile-background);
    position:relative;
`;
const Avatar = styled.img`
    position:absolute;
    width:max(45px,min(135px,22vw));
    height:max(45px,min(135px,22vw));
    border:3.75px solid var(--primary);
    border-radius:50%;
    left:15px;
    bottom:max(-60px,-10vh);
    
`;

const ProfileInfo = styled.div`
    padding:70px 15px 0px;

    display:flex;
    flex-direction:column;

    position:relative;

    >h1{
        font-weight:bold;
        font-size:19px;
    }
    >h2{
        font-size:15px;
        color:var(--gray);
        margin-bottom:11px;
    }
    >p{
        font-size:15px;
    }
    >ul{
        list-style-type:none;
        margin:10px 0;

        >li{
            display:flex;
            align-items:center;
            color:var(--gray);
            >svg{
                fill:var(--gray);
                margin-right:5px;
            }
        }
    }
`;
const EditButton = styled(Button)`
    position:absolute;
    top:2vw;
    right:12px;
    padding:8px 16px;

    @media (min-width:320px){
        top:10px;
    }

`;
const Followage = styled.div`
    display:flex;
    
    >span{
        color:var(--gray);
        margin:0px 15px;
    }
`;



const iconCommonCss = css`
    width:20px;
    height:20px;
`

const CalenderIcon = styled(Calendar)`
    ${iconCommonCss}
`;
const LocationIcon = styled(LocationOn)`
    ${iconCommonCss}
`;
const CakeIcon = styled(Cake)`
    ${iconCommonCss}
`;


