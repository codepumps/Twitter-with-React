import React from 'react'
import styled, { css } from "styled-components";
import { Retweet, Heart, Comment, SaveAlt, ChevronDown } from "../styles/icons";

const Tweet = ({ tweet }) => {
    return (
        <Container>
            {
                tweet.retweet ?
                    <Retweeted>
                        <RetweetIcon style={{ width: "15px", height: "15px", marginLeft: "35px", marginRight: "9px" }} />
                        <span>Retweetledin</span>
                    </Retweeted>
                    : null
            }


            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>{tweet.name}</strong>
                        <span>{tweet.mail}</span>
                        <Point />
                        <time>{tweet.time}</time>
                        <DownIcon />
                    </Header>
                    <Description>
                        {tweet.description}
                    </Description>
                    {
                        tweet.image.status ? <ImgContent /> : null
                    }
                    <Icons>
                        <Status>
                            <span className="icon icon-comment">
                                <CommentIcon />
                            </span>
                            <span className="comment-text">
                                {tweet.comment}
                            </span>
                        </Status>
                        <Status>
                            <span className="icon icon-retweet">
                                <RetweetIcon />
                            </span>
                            <span className="retweet-text">
                                {tweet.retweetCount}
                            </span>
                        </Status>
                        <Status>
                            <span className="icon icon-like">
                                <LikeIcon />
                            </span>
                            <span className="like-text">
                                {tweet.like}
                            </span>
                        </Status>
                        <Status>
                            <span className="icon icon-comment">
                                <SaveAltIcon />
                            </span>
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
    position:relative;
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
    >svg{
        position:absolute;
        right:0;
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
    padding:10px 0;
    width:85%;
`;
const Status = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
    font-size:14px;
    color:var(--gray);

    >span.icon{
        padding:3px;
        border-radius:50%;
        margin-right:5px;
    }
    &:hover{
        >span.icon-comment{
            background: #162632;
            >svg{
                fill:var(--twitter);
            }
        }
        >span.comment-text{
            color:var(--twitter);
        }
        >span.icon-like{
            background:#571c32;
            >svg{
                fill:var(--like);
            }
        }
        >span.like-text{
            color:var(--like);
        }
        >span.icon-retweet{
            background:#152923;
            >svg{
                fill:var(--retweet);
            }
        }
        >span.retweet-text{
            color:var(--retweet);
        }
    }
`;

const iconCommonCss = css`
    width:24px;
    height:24px;
    fill:var(--gray);
`;
const RetweetIcon = styled(Retweet)`
    ${iconCommonCss};
`;
const LikeIcon = styled(Heart)`
    ${iconCommonCss};
`;
const CommentIcon = styled(Comment)`
    ${iconCommonCss};
`;
const SaveAltIcon = styled(SaveAlt)`
    ${iconCommonCss};
    &:hover{
        fill:var(--twitter);
    }
`;
const DownIcon = styled(ChevronDown)`
    ${iconCommonCss};
    margin-right:0px;
`