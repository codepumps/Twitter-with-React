import React from 'react'
import styled from "styled-components";
import { SearchOutline, MessagePlusIcon } from "../../styles/icons";
import userImage1 from "../../images/johnSmilga.jpg";
import userImage2 from "../../images/human.jpg";


const MessagesList = () => {
    const users = [
        {
            id: 1,
            name: "John Smilga",
            mail: "@john_smilga",
            date: "2 Nis",
            image: userImage1,
            text: "Nice try !"
        },
        {
            id: 2,
            name: "John Smilga",
            mail: "@john_smilga",
            date: "2 Nis",
            image: userImage2,
            text: "Görüşmek üzere."
        }
    ]
    return (
        <Container>
            <Header>
                <span>Mesajlar</span>
                <MessagePlusIcon />
            </Header>
            <SearchBar>
                <SearchInput placeholder="Kişi ve grup ara" />
                <SearchIcon />
            </SearchBar>
            <Body>
                {
                    users.map(user => (
                        <User key={user.id}>
                            <img src={user.image} alt="" />
                            <div className="content">
                                <div className="header-content">
                                    <strong>{user.name}</strong>
                                    <span>{user.mail}</span>
                                    <span className="last-seen">{user.date}</span>
                                </div>
                                <div className="text-content">
                                    {user.text}
                                </div>
                            </div>
                        </User>
                    ))
                }
            </Body>
        </Container>
    )
}

export default MessagesList

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:min(394px,100%);
    height:100vh;
    overflow-y:scroll;
    z-index:0; /*disabled background */
    border-left:1px solid var(--outline);
    @media(max-width:1005px){
        width:100%;
        overflow-y:hidden;
    }
`;

const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:min(394px,100%);
    position:sticky;
    top:0;
    z-index:1;
    background-color:var(--primary);
    padding:15px 20px;
    border-bottom:1px solid var(--outline);

    >span{
        font-weight:900;
        font-size:19px;
    }
    >svg{
        cursor:pointer;
    }
`;

const SearchBar = styled.div`
    position:relative;
    padding:8px 14px;
    display:flex;
    align-items:center;
    height:65px;
    width:min(394px,100%);
    border-bottom:1px solid var(--outline);
`

const SearchInput = styled.input`
    color:var(--white);
    font-size:15px;
    background-color:var(--search);
    border-radius:20px;
    width:100%;
    padding:11px 11px 11px 50px;
    outline:none;
    &::placeholder{
        font-weight:400;
        font-size:15px;
    }
    &:focus{
        border:1px solid var(--twitter);
        &+svg{
            fill:var(--twitter);
        }
        background-color:transparent;
    }
`;

const SearchIcon = styled(SearchOutline)`
    position:absolute;
    top:20px;
    left:35px;
    width:22px;
    height:22px;
    fill:var(--gray);
`;

const Body = styled.div`
    display:flex;
    flex-direction:column;
`;

const User = styled.div`
    display:flex;
    border-bottom:1px solid var(--outline);
    padding:15px 15px;
    >img{
        width:50px;
        height:50px;
        border-radius:50%;
        margin-right:10px;
    }
    >div{
        width:100%;
        >div.header-content{
            position:relative;
            width:100%;
            >strong{
                margin-right:4px;
            }
            >span{
                color:var(--gray);
            }
            >span.last-seen{
                position:absolute;
                right:0;
            }
        }
        >div.text-content{
            color:var(--gray);
            font-size:15px;
        }
    }

    &:hover{
        cursor:pointer;
        background-color:var(--twitter-dark-hover);
    }
`;
