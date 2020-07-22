import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowLeft, CreateMoreListIcon, BookmarksMoreIcon } from "../../styles/icons";
import Button from "../Button";
const ListsMain = () => {
    return (
        <>
            <Header>
                <div className="leftInfo">
                    <Link to="/home">
                        <ArrowIcon />
                    </Link>
                    <div>
                        <strong>Listeler</strong>
                        <span>@serkan_sayhan</span>
                    </div>
                </div>
                <div className="icons">
                    <span className="more-icon">
                        <CreateMoreListIcon />
                    </span>
                    <span>
                        <BookmarksMoreIcon />
                    </span>
                </div>
            </Header>
            <Fasten>
                <div className="fasten">
                    <strong>Sabitlenenler</strong>
                </div>
                <div className="content">
                    Burada henüz hiçbir şey görünmüyor. Hızlıca erişmek istediğin favori Listelerinden en fazla beş tanesini üste sabitleyebilirsin.
                </div>
            </Fasten>
            <BottomSpace />
            <Lists>
                <div className="header">
                    <strong>Listelerin</strong>
                </div>
                <div className="empty-content">
                    <strong>Henüz Liste oluşturmadın</strong>
                    <span>Bunu yaptığında burada görüntülenir.</span>
                    <Button theme={{
                        main: "var(--twitter)",
                        btnColor: "var(--twit-text)",
                        btnBorder: "none",
                        hoverMain: "var(--twitter-light-hover)"
                    }}>Liste Oluştur</Button>
                </div>
            </Lists>
        </>
    )
}

export default ListsMain


const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    z-index:2;
    background:var(--primary);
    padding:8px 15px;
    cursor:pointer;
    border-bottom:1px solid var(--outline);

    >div.leftInfo{
        display:flex;
        align-items:center;
        >a{
            padding:8px;
            border-radius:50%;
            margin-right:22px;
            &:hover{
                background:var(--twitter-dark-hover);
            }
        }
        >div{
            display:flex;
            flex-direction:column;
            >strong,span{
                white-space:nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
            }
            >strong{
                font-weight:900;
                font-size:19px;
            }
            >span{
                font-size:13px;
                font-weight:400;
                color:var(--gray);
            }
        }
    }
    >div.icons{
        >span.more-icon{
            display:none;
        }
        @media(min-width:500px){
            >span.more-icon{
                display:inline-block;
            }
        }
        >span{
            padding:8px;
            border-radius:50%;
            &:hover{
                background:var(--twitter-dark-hover);
            }
        }
    }
`;

const ArrowIcon = styled(ArrowLeft)`
    width:22px;
    height:22px;
    fill:var(--twitter);
`

const Fasten = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    >div.fasten{
        display:flex;
        align-items:center;
        width:100%;
        height:50px;
        border-bottom:1px solid var(--outline);
        >strong{
            font-size:19px;
            font-weight:900;
            margin-left:15px;
        }
    }
    >div.content{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        overflow-wrap:break-word;
        color:var(--gray);
        text-align:center;
        font-size:15px;
        padding:40px 20px;

    }
`

const BottomSpace = styled.div`
    height:10px;
    width:100%;
    background:rgb(32, 35, 39);
`

const Lists = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;

    >div.header{
        display:flex;
        align-items:center;
        width:100%;
        height:50px;

        >strong{
            font-size:19px;
            font-weight:900;
            margin-left:15px;
        }
        border-bottom:1px solid var(--outline);
    }

    >div.empty-content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        padding:50px 0;

        >strong{
            font-size:19px;
            font-weight:bold;
            line-height:1.3125;
            margin-bottom:10px;
        }
        >span{
            color:var(--gray);
            font-size:15px;
            margin-bottom:20px;
            font-weight:500;
        }
    }
`