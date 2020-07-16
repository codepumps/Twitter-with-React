import React from 'react'
import styled, { css } from "styled-components";
import { Retweet, Heart, Comment, SaveAlt } from "../styles/icons";

const Tweet = () => {
    return (
        <Container>
            <Retweeted>
                <RetweetIcon style={{ width: "15px", height: "15px", marginLeft: "35px", marginRight: "9px" }} />
                <span>Retweetledin</span>
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Vural Uçar</strong>
                        <span>@vuralucarhd</span>
                        <Point />
                        <time>21 Nis</time>
                    </Header>
                    <Description>
                        React; Facebook tarafından üretilmiş, kullanıcı ara yüzleri oluşturmak için kullanılan bir javascript kütüphanesidir. React bir framework değil, belirttiğim gibi bir kütüphanedir.
                    </Description>
                    <ImgContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                                72
                        </Status>
                        <Status>
                            <RetweetIcon />
                                110
                        </Status>
                        <Status>
                            <LikeIcon />
                                256
                        </Status>
                        <Status>
                            <SaveAltIcon />
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:14px 16px;
    border-bottom:1px solid var(--profile-background);
    cursor:pointer;
    &:hover{
        background:var(--twitter-dark-hover);
    }
`;

const Retweeted = styled.div`
    >span{
        color:var(--gray);
        font-size:13px;
    }
`;

const Body = styled.div`
    display:flex;
    margin-top:3px;
    position:relative;
`;
const Avatar = styled.div`
    flex-shrink:0;
    width:50px;
    height:50px;
    border-radius:50%;
    background:var(--gray);
    /* margin-right:8px; */
    position:absolute;
    top:0;
    left:0;
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    padding-left:58px;
`;
const Header = styled.div`
    display:flex;
    align-items:center;
    white-space:nowrap;
    >strong{
        margin-right:5px;
    }
    >span,time{
        color:var(--gray);
    }
    >strong,span{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
`;
const Point = styled.div`
    width:2px;
    height:2px;
    border-radius:50%;
    background:var(--gray);
    margin:2px 8px 0px;
`;
const Description = styled.div`
    margin-top:5px;
    font-size:15px;
`;
const ImgContent = styled.div`
    margin-top:12px;
    width:100%;
    height:min(285px,max(175px,41vw));
    background:var(--outline);
    border-radius:15px;
    
`;
const Icons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-flow:row wrap;
    margin:10px auto 0;
    width:100%;
`;
const Status = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
    font-size:14px;
    color:var(--gray);
    &:nth-child(2){
        color:var(--retweet);
        >svg{
            fill:var(--retweet);
        }
    }
    &:nth-child(3){
        color:var(--like);
        >svg{
            fill:var(--like);
        }
    }
`;

const iconCommonCss = css`
    width:24px;
    height:24px;
    margin-right:5px;
    fill:var(--gray);
`;
const RetweetIcon = styled(Retweet)`
    ${iconCommonCss};
`;
const LikeIcon = styled(Heart)`
    ${iconCommonCss};
    &:hover{
        fill:var(--like);
    }
`;
const CommentIcon = styled(Comment)`
    ${iconCommonCss};
    &:hover{
        fill:var(--twitter);
    }
`;
const SaveAltIcon = styled(SaveAlt)`
    ${iconCommonCss};
    &:hover{
        fill:var(--twitter);
    }
`;