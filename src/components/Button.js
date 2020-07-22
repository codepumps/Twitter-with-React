import styled from "styled-components";

// const theme = {
//     main: "transparent",
//     btnColor: "var(--twitter)",
//     btnBorder: "1px solid var(--twitter)",
//     hoverMain: "var(--twitter-dark-hover)"
// }

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
