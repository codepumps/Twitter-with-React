import styled from "styled-components";


export default styled.button`
    background:${props => props.theme.main};
    color:${props => props.theme.btnColor};
    border:${props => props.theme.btnBorder};

    padding:10px 16px;
    border-radius:25px;
    font-weight:bold;
    font-size:15px;
    cursor:pointer;
    outline:0;

    &:hover{
        background:${props => props.theme.hoverMain}
    }
`;
