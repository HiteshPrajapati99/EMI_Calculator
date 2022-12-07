import { createGlobalStyle } from "styled-components";

export const Globlestyle = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
 }
 
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
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
   }
   .maindiv{
    display: flex;
    gap: 3rem;
   }

   @media only screen and (max-width: 600px) {
       .maindiv{
        display: inline-block;
       }
       .div-1{
        .box{
          max-width:30rem ;
        }
       } 
       .div-table{
        width: 30rem ;
       }
    }

    @media only screen and (max-width: 992px) {
      .maindiv{
        display: inline-block;
       }
       .div-1{
        .box{
          width: 40rem ;    
        }
       } 
       .div-table{
        width: 45rem ;
       }
    }
`;
