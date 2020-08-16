import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:var(--white);
}
html,body,#root{
    max-height:100vh;
    max-width:100vw;
    width:100%;
    height:100%;
}
*,button,input{
    border:0;
    background:none;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
}
html{
    background:var(---primary);
}
:root{
    --primary: #fff;
    --secondary:#F5F8FA;
    --white:#1A1D20;
    --search: #E6ECF0;
    --gray: #7A7A7A;
    --outline: rgb(230, 236, 240);
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twit-btn:#1A91DA;
    --twit-text:#FDFDFD;
    --twitter-dark-hover: rgba(230, 236, 240,0.3);
    --twitter-more-dark-hover: rgba(165, 213, 242,0.3);
    --twitter-light-hover: #2C8ED6;
    --profile-background:rgba(47,51,54);
    --send-tweet-background:rgba(153,153,153,0.6);
    --more-button-hover:rgba(101, 119, 134, 0.2);
    --logo:#1DA1F2;
    --tweet-like-back-hover:rgba(232, 38, 94,0.1);
    --tweet-comment-back-hover:rgba(51, 161, 242,0.1);
    --tweet-retweet-back-hover:rgba(0, 192, 107,0.1);
    --twitter-menubar-icons-hover:rgba(165, 213, 242,0.3);
}
.dark:root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twit-btn:#1A91DA;
    --twit-text:#FCFDFE;
    --twitter-dark-hover: #011017;
    --twitter-more-dark-hover: #03293a;
    --twitter-light-hover: #2C8ED6;
    --profile-background:rgba(47,51,54);
    --send-tweet-background:rgba(255,255,255,0.2);
    --more-button-hover:rgba(255, 255, 255, 0.2);
    --logo:#33A1F2;
    --tweet-like-back-hover:#571c32;
    --tweet-comment-back-hover:#162632;
    --tweet-retweet-back-hover:#152923;
    --twitter-menubar-icons-hover:#011017;
}

.dim:root{
    --primary: rgb(21, 32, 43);
    --logo:#33A1F2;
}

`