import styled from 'styled-components';



/**
 * So this is the embracing container
 */
const Appcontainer = styled.div`

  min-height: 100vh;
  margin : 0;
  padding : 0;
  overflow: auto;
  

  

  `

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(255, 255, 255, 0);

`

const GameTitle = styled.div`
  font-weight: 700;
  font-family: 'Maven Pro', sans-serif;

 

`

const GameDescription = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: 'Maven Pro', sans-serif;
  text-align: center;
  width: 100%;
  line-height: 1.5;

  /*change text on small screens*/
  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }

       

`


const Header = styled.header`
  font-size: 2.5rem;
  margin-top : 3rem;
  height : 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;

  @media
  (max-width: 768px) {
    font-size: 2rem;
  }

  @media
  (max-width: 600px) {
    font-size: 1.95rem;
  }

  @media
  (max-width: 400px) {
    font-size: 1.5rem;
  }

  @media
  (max-width: 300px) {
    font-size: 1rem;
  }

`

const TextWithShadow = styled.h1`

background: hsla(186, 100%, 69%, 1);

background: linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

background: -moz-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

background: -webkit-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#60EFFF", endColorstr="#0061FF", GradientType=1 ); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

  text-shadow:  0 0 10px 0 rgba(0, 0, 0, 0.2);
  text-decoration-color: #000000;
  text-decoration-thickness: 0.5rem;
  text-underline-offset: 0.5rem;
  text-decoration-skip-ink: none;
  text-decoration-skip: none;
  text-decoration-style: wavy;
  text-decoration-line: underline;
  
  @media
  (max-width: 768px) {
    text-decoration-thickness: 0.5rem;
  }

  @media
  (max-width: 600px) {
    text-decoration-thickness: 0.4rem;
  }

  @media
  (max-width: 400px) {
    text-decoration-thickness: 0.3rem;
  }

  @media
  (max-width: 300px) {
    text-decoration-thickness: 0.2rem;
  }


`

const GameContainer =
  styled.div`
  margin-top : 7rem;
  width: 40vh ;
  height: 40vh ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius:0.6rem;
  border: 10px solid transparent;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right,
      #31CCCC, #3B86DE) border-box;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
 

  @media
  (min-width:
    768px) {
      height : 550px;
      width : 550px;
  }


 

`

// footer 
const Footer = styled.footer`

width : 550px;

@media (max-width: 768px) {
  width: 40vh;
  

}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:5vh;
 
  color: white;
  background: hsla(186, 100%, 69%, 0.5);

  background: linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

  background: -moz-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

  background: -webkit-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#60EFFF", endColorstr="#0061FF", GradientType=1 );
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.4px);
  -webkit-backdrop-filter: blur(12.4px);
  border: 1px solid rgba(255, 255, 255, 0.78);



  


  `

const DivFooter =
  styled.div`
  margin-top : 3rem;
  display : flex;
  align-items: center;
  justify-content: center;

  `

const FooterText =
  styled.div`
  font-size: 2.2vm;
  font-weight: 400;
  font-family: 'Maven Pro', sans-serif;
  text-align: center;
  width: 100%;
  line-height: 0.2;

  @media
  (max-width: 768px and
    min-width: 400px) {
    font-size: 10pt;
  }

  @media
  (max-width: 400px) {
    font-size: 7pt;
  }
  `

// game content


const BoardContainer =
  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: none;
    background: 
      linear-gradient(to right,
        #31CCCC, #3B86DE);
    /*animation:
    1s ease-in-out 0s 1 slideInFromLeft;
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    } */
    .board-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        &:nth-child(1) > div:nth-child(1) {
            border-top-left-radius: 10px;
            animation:
            1s ease-in-out 0s 1 slideInFromTopLeft;
            @keyframes slideInFromTopLeft{
                25%{
                    transform: translate(-75%,-75%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(-50%,-50%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }
        &:nth-child(1) > div:nth-child(3) {
            border-top-right-radius: 10px;
            animation:
            1s ease-in-out 0.1s 1 slideInFromTopRight;
            @keyframes slideInFromTopRight{
                25%{
                    transform: translate(75%,-75%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(50%,-50%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }
               
       

        
        &:nth-child(3) > div:nth-child(1) {
            border-bottom-left-radius: 10px;
               
            animation:
            1s ease-in-out 0.2s 1 slideInFromBottom;
            @keyframes slideInFromBottom {
                25%{
                    transform: translate(-50%,50%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(-25%,25%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }

        
        &:nth-child(3) > div:nth-child(3) {
            border-bottom-right-radius: 10px;
            animation:
            1s ease-in-out 0.3s 1 slideInFromTop;
            @keyframes slideInFromTop {
                25%{
                    transform: translate(50%,50%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(25%,25%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }

            
      
     
        &:nth-child(2) > div:nth-child(2) {
            border-bottom-right-radius: 10px;
            animation:
            1s ease-in-out 0.7s 1 slideInFromZ;

            @keyframes slideInFromZ {
                25%{
                    transform: scale(1.6);
                    opacity:0.25;
                }
                50% {
                    transform: scale(1.2) rotate(8deg) skew(3deg);
                    -webkit-transform:scale(1.2)  rotate(8deg) skew(3deg);
                    -moz-transform:scale(1.2)  rotate(8deg) skew(3deg);
                    opacity:1;
                }
                100% {
                    transform: scale(1) rotate(8deg) skew(3deg);
                    -webkit-transform:scale(1) rotate(8deg) skew(3deg);
                    -moz-transform:scale(1) rotate(8deg) skew(3deg);
                }
            }
        }

     

        &:nth-child(n) > div:nth-child(n) {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
            transition: all 0.1s ease-in-out;
        &:hover {
            transform:
            rotate(10deg);
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

        }
        &:active {
            transform :
            scale(0.9);
            
        }
        }

        &:nth-child(n) > div:nth-child(even) {
            transform: rotate(8deg) skew(3deg);
            -webkit-transform: rotate(8deg) skew(3deg);
            -moz-transform: rotate(8deg) skew(3deg);
        }

        &:nth-child(n) > div:nth-child(odd) {
            transform: rotate(-8deg) skew(-3deg);
            -webkit-transform: rotate(-8deg) skew(-3deg);
            -moz-transform: rotate(-8deg) skew(-3deg);
        }
   
    }

    /*make it blurry and disabled*/
    
`;


const AlertContainer =
  styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    
    animation: 1s ease-in-out 0s 1 slideInFromTop;
    @keyframes slideInFromTop {

        25%{
            transform: translate(0,-50%);
            opacity:0.25;

        }
        50% {
            transform: translate(0,-25%);
            opacity:1;
        }
        100% {
            transform: translate(0,0);
        }
    }
`;

const AlertTitle =
  styled.div`
font-size: 10vh;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 2vh;
`;




const SquareContainer =
  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding :0;
    border: 5px solid transparent;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right,
      #31CCCC, #3B86DE) border-box;
    font-size: 10vh;
    font-weight: bold;
    cursor: pointer;
    position :relative;

    /*
    &:before {
        position: absolute;
        z-index: -1; 
        border: inherit;
        border-color: ingheri;
        top :-5px;
        right : -5px;
        left : -5px;
        bottom : -5px;
        background: inherit;
        background-clip: border-box;
        -webkit-filter: blur(12px);
                filter: blur(12px);
        content: '';
      }
      */
      
      /*change font size on small screens*/

        @media (max-width: 600px) {
            font-size: 5vh;
        }
        @media (max-width: 400px) {
            font-size: 3vh;
        }
        @media (max-width: 300px) {
            font-size: 2vh;
        }
 
    

    /*change span color*/
    span {

        background: linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        background: -moz-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        background: -webkit-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
   
    
`;


const DisplayScore =
  styled.div`
  
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom : 5rem;
    z-index: 10;
    font-size: 8vh;
    font-weight: bold;
    font-family: 'Rajdhani', sans-serif;
    
        .span{
            background: rgb(34,193,195);
            background: -moz-linear-gradient(45deg, rgba(34,193,195,1) 33%, rgba(39,215,141,1) 52%, rgba(49,253,45,1) 80%, rgba(49,253,45,1) 99%);
            background: -webkit-linear-gradient(45deg, rgba(34,193,195,1) 33%, rgba(39,215,141,1) 52%, rgba(49,253,45,1) 80%, rgba(49,253,45,1) 99%);
            background: linear-gradient(45deg, rgba(34,193,195,1) 33%, rgba(39,215,141,1) 52%, rgba(49,253,45,1) 80%, rgba(49,253,45,1) 99%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3",endColorstr="#31fd2d",GradientType=1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /*text-shadow*/
        }

        .big-letter{
            font-size: 9vh;
            color : #07f8af;
        }
        .vs {
            margin : 0 15px;
            position : relative;
            color: transparent;
          
          /*glitch text*/
          &:before{
            content: attr(data-text);
            position: absolute;
            top :-15px;
            font-size: 10vh;
            left: 2px;
            text-shadow: -1px 0 red;
            color: #ff0000;
            opacity: 0.5;
            animation: glitch 2s infinite linear alternate-reverse;

          }
            &:after{
            content: attr(data-text);
            font-size: 10vh;
            position: absolute;
            top :-15px;
            left: -2px;
            text-shadow: -1px 0 blue;
            color: #0000ff;
            opacity: 0.5;
            animation: glitch 2s infinite linear alternate-reverse;
            animation-delay: 1s;
            }


        
        }
        
    `

const Button =
  styled.button`
    background:
        linear-gradient(to right,
        #31CCCC, #3B86DE) ;
        border: none;
        color: white;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1vh 2vh;
    max-width : 10rem;
    margin: 1vh 1vh;
    border-radius: 5px;
    

   
    `

const GameInfo =
  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vh;
    padding :0;
    margin: 1vh 0;
    `

const GameInfoText =
  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%%;
    height: 5vh;    
    padding: 1vh 2vh;
    width : 90%;
    margin: 1vh 1vh;
    border: none
    font-size: 1.3rem;
    font-weight: bold;
    color : teal;
    `

  const JoinRoomForm = 
  styled.form`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vh;
    padding :0;
    margin: 1vh 0;
    `

  const JoinRoomInput = 
  styled.input`
    border :
    1px solid #31CCCC;
    border-radius: 5px;
    padding: 1vh 2vh;
    width : 90%;
    height: 2.5vh;
    margin: 1vh 1vh;
    font-size: 1.3rem;
    font-weight: bold;
    color : teal !important;
    caret-color: teal;
    outline:
    none;
          &:focus {
            border: 1px solid #3B86DE;
          }
    `

    const JoinRoomButton =
    styled.button`
    all : unset;
    cursor: pointer;
    margin: 1vh 1vh;
    border-radius: 5px;
    img {
      padding :0;
    }

    @media
    (max-width: 768px) {
      img {
        width : 3.1rem;
        height: 3rem;
      }
    }
      
    `


    const LeaveRoomButton =
    styled.button`
    position:absolute;
    bottom : 40px;
    border :
    1px solid tomato;  
    right : 30px;
    cursor: pointer;
    margin: 1vh 1vh;
    border-radius: 50%;
    width : 3rem;
    height : 3rem;
    img {
      padding :0;
    }
    border-radius: 50%;
    background: #ffffff;
    box-shadow:  31px 31px 84px #e6e6e6,
                 -31px -31px 84px #ffffff;

    @media
    (max-width: 300px) {
      width : 2.1rem;
      height : 2.1rem;
      bottom :0;
    }
    `
          

/**
 * ! All the styles are pure css
 * ? Styled components is a thing 😆
 */
export {
  Appcontainer,
  Container,
  GameTitle,
  GameDescription,
  Header,
  TextWithShadow,
  GameContainer,
  Footer,
  DivFooter,
  FooterText,

  SquareContainer,
  DisplayScore,
  Button,
  GameInfo,
  GameInfoText,
  AlertTitle,
  BoardContainer,
  AlertContainer,

  JoinRoomButton,
  JoinRoomForm,
  JoinRoomInput,

  LeaveRoomButton

}
