import React from 'react'
import styled from "styled-components";
import Tweet from "../Tweet";

const ProfileContent = () => {
    // const [bottomColor, setBottomColor] = useState(false);

    const linksName = ["Tweetler", "Tweetler ve yanıtlar", "Medya", "Beğeni"];

    const handleClick = (e) => {
        if (e.target.className !== "active") {
            e.target.className = "active";
        }
        else {
            e.target.className = "";
        }
    }
    return (
        <Container>
            <Links>
                {
                    linksName.map((link, index) => {
                        return <li onClick={e => handleClick(e)} key={index}>{link}</li>
                    })
                }
            </Links>

            <Tweets>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </Tweets>
        </Container>
    )
}

export default ProfileContent


const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

const Links = styled.ul`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    list-style-type:none;
    margin-top:5px;
    border-bottom:1px solid var(--profile-background);

    >li{
        color:var(--gray);
        font-weight:bold;
        padding:20px 0;
        flex-basis:auto;
        cursor:pointer;

        &:hover{
            color:var(--twitter);
            background:var(--twitter-dark-hover);
        }
        &.active{
            border-bottom:3px solid var(--twitter);
        }
    }
`;

const Tweets = styled.div`
    display:flex;
    flex-direction:column;
    flex-shrink:0;
`;