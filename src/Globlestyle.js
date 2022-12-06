import { createGlobalStyle } from "styled-components";

export const Globlestyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed; */
 }
 /* @keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
} */
 .resultdata{
   display: flex;
   gap: 1rem;
   margin-left: 1.3rem;
   
 }
 .boxdata {
      width: 15rem;
      height: 4rem ;
      background-color  : CaptionText;
      color: Highlight;
      display: grid;
      text-align : center;
      align-items: center;
      font-size: 1.2rem;
   }
   form{
      display: grid;
    margin: 2rem 3rem;
    gap: 1rem;
    .buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
   }

`;
