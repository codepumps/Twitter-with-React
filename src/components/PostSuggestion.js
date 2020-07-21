import React from 'react'
import styled, { css } from "styled-components";
import { Settings2Outline, ChevronDown } from "../styles/icons";

const PostSuggestion = ({ isIcon }) => {
    const posts = [
        {
            id: "1",
            Title: "Türkiye tarihinde gündemde",
            Tag: "#lgs2020",
            Count: 4.853,
        },
        {
            id: "2",
            Title: "Dünya tarihinde gündemde",
            Tag: "Apple",
            Count: 128 + " B",
        },
        {
            id: "3",
            Title: "Türkiye tarihinde gündemde",
            Tag: "#twitterhacked",
            Count: 43.9 + " B",
        },
        {
            id: "4",
            Title: "Türkiye tarihinde gündemde",
            Tag: "Cemal Metin Avcı",
            Count: 13 + " B",
        },
        {
            id: "5",
            Title: "Türkiye tarihinde gündemde",
            Tag: "#gabaryanıyor",
            Count: 6394,
        },
    ]
    let css = ""
    isIcon ? css += "border" : css = "";

    return (
        <Container className={css}>
            <Item>
                <Title>
                    <span>İlgini çekebilecek gündemler</span>
                    {isIcon && <div className="icon"><Settings /></div>}
                </Title>
            </Item>
            {posts.map(item => {
                return <Item key={item.id}>
                    <div>
                        <span>{item.Title}</span>
                        <div className="icon">< DownIcon /></div>
                    </div>
                    <span>{item.Tag}</span>
                    <span>{item.Count} Tweet</span>
                </Item>
            })}
        </Container>
    )
}

export default PostSuggestion

const Container = styled.div`
    display:flex;
    flex-direction:column;
    background:var(--secondary);
    &.border{
        border-radius:14px;
    }
`

const Item = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;

    &:not(:first-child){
        padding:10px 16px;
    }
    &:first-child{
        padding:10px 10px 10px 16px; /*for icons padding*/
    }

    >div{
        display:flex;
        justify-content:space-between;
        >span{
            color:var(--gray);
            font-size:13px;
        }
        >div{
            border-radius:50%;
            &:hover{
                cursor:pointer;
                background:#162632;
                >svg{
                    fill:var(--twitter);
                }
            }
            >svg{
            fill:var(--gray);
            }
        }
        &+span{
            font-weight:bold;
        }
    }
    >span:nth-child(2){
        position:absolute;
        top:29px;
    }

    >span:last-child{
        color:var(--gray);
        padding-top:23px;
        font-size:13px;
    }

    &+div{
        border-top:1px solid var(--outline);
    }
    &:not(:first-child):hover{
        cursor:pointer;
        background:#191e23;
    }
    
    
`
const Title = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    >div{
        padding:6px;
        border-radius:50%;
        &:hover{
                cursor:pointer;
                background:#162632;
        }
        >svg{
            fill:var(--twitter);
    }
    
    }
    >span{
        font-size:19px;
        font-weight:bold;
    }
`

const iconCss = css`
    width:24px;
    height:24px;
`

const Settings = styled(Settings2Outline)`
    ${iconCss};
`
const DownIcon = styled(ChevronDown)`
    ${iconCss};
`