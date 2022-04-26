import styled, {keyframes} from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 6px solid rgba(255,255,255, 0.35);
  border-right: 6px solid rgba(255,255,255, 1);
  border-bottom: 6px solid rgba(255,255,255, 0.35);
  border-left: 6px solid rgba(255,255,255, 0.35);
  background: transparent;
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;

export const ContainerInfoPage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(/images/Landing-Page-BG1.png) no-repeat center fixed;
  height: 100vh;
  width:100%;
  @media (max-width: 450px) {
    height: 110vh;
    
  }
  @media (max-width: 410px) {
    height: 115vh;
    
  }
  @media (max-width: 380px) {
    height: 140vh;
    
  }
`;
export const ContainerBurnPage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(/images/Landing-Page-BG1.png) no-repeat center fixed;
  height: 100vh;
  width:100%;
  @media (max-width: 400px) {
    height: 105vh;
    
  }
  @media (max-width: 380px) {
    height: 140vh;
    
  }
  @media (max-height: 600px) {
    height: 200vh;
    
  }
  @media (max-height: 410px) {
    height: 300vh;
    
  }
`;
export const ContainerReward = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  height: 300px;
  width:100%;
`;
export const ContainerHomePage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(/images/Landing-Page-BG1.png) no-repeat center fixed;
  height: 100vh;
  width:100%;
`;
export const ContainerOne = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(/images/Landing-Page-BG1.png) no-repeat center fixed;
  height: 100vh;
  width:100%;

  @media (max-width: 1050px) {
    height: 200vh;
    
  }
  @media (max-width: 700px) {
    height: 300vh;
    
  }
  @media (max-width: 380px) {
    height: 380vh;
    
  }

`;

export const BoxReward = styled.img`
  margin: 100px;
  max-width:100%; height:auto;
  @media (max-width: 1050px) {
    margin: 50px;
    
  }
  @media (max-width: 700px) {
    margin: 20px;
    
  }

  @media (max-width: 500px) {
    margin: 10px;
    
  }
`;
export const Box = styled.img`
  height: 350px;
  margin-bottom:20px;

`;
export const BoxIcon = styled.img`
  height: 350px;
  @media (max-width: 1050px) {
    height: 320px;
    width: 320px;
    
  }
  @media (max-width: 700px) {
    height: 300px;
    width: 300px;
    
  }

  @media (max-width: 500px) {
    height: 280px;
    width: 280px;
    
  }
`;

export const ContainerKeys = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  flex: 1;
`;
export const ContainerInfo = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex: 3;
  flex-direction: row;
  align-items: flex-end;
  width:100%;
  justify-content: space-around;
  @media (max-width: 1000px) {
    flex:7;
    
  }
`;
export const ContainerLogout = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  width:100%;
  justify-content: center;
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  width:55%;
  height:70%;
  flex-wrap: wrap;
  border-radius: 40px;
  justify-content: flex-start;
  background: rgba(242, 242, 242, 0.65);
  flex-direction: column;
  border: 9px #06334E solid;
  @media (max-width: 1100px) {
    width:80%;
    
  }
`;

export const Headline = styled.div`
  font-size:30px;
  font-weight: bold;
`;
export const Par = styled.div`
  margin: 30px;
  font-size:24px;
  font-weight: bold;
`;
export const ContainerThree = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/images/Landing-Page-BG1.png);
  height: 90vh;
  width:100%
`;

export const SendBetButton = styled.button`


  cursor: pointer;
  background: linear-gradient(180deg, ${({ color }) => (color ? color : "black")}, ${({ color2 }) => (color2 ? color2 : "black")});
  width:530px;
  height: 140px;
  border-radius:85px;
  outline: 5px white solid;
  border: none;
  border-bottom: 9px ${({ borderColor }) => (borderColor ? borderColor : "black")} solid;
  color:white;
  font-weight: bold;
  margin-top:120px;
  font-size: 40px;
  @media (max-width: 1050px) {
    width:460px;
    height: 120px;
    font-size: 36px;
    
  }
  @media (max-width: 650px) {
    width:380px;
    height: 110px;
    font-size: 30px;
  }

  @media (max-width: 550px) {
    width:300px;
    height: 90px;
    font-size: 26px;
  }
  
`;

export const InfoButton = styled.button`


  cursor: pointer;
  background: linear-gradient(180deg, ${({ color }) => (color ? color : "black")}, ${({ color2 }) => (color2 ? color2 : "black")});
  width:350px;
  height: 80px;
  border-radius:85px;
  display:flex;
  align-items: center;
  justify-content: center;
  outline: 5px white solid;
  border: none;
  border-bottom: 9px ${({ borderColor }) => (borderColor ? borderColor : "black")} solid;
  color:white;
  font-weight: bold;
  margin-top:120px;
  font-size: 40px;
  @media (max-width: 1050px) {
    width:300px;
    height: 70px;
    font-size: 36px;
  }
  @media (max-width: 650px) {
    width:300px;
    height: 70px;
    font-size: 32px;
  }
  
`;
export const CollectButton = styled.button`


  cursor: pointer;
  background: linear-gradient(180deg, ${({ color }) => (color ? color : "black")}, ${({ color2 }) => (color2 ? color2 : "black")});
  width:350px;
  height: 80px;
  border-radius:85px;
  outline: 5px white solid;
  border: none;
  border-bottom: 9px ${({ borderColor }) => (borderColor ? borderColor : "black")} solid;
  color:white;
  font-weight: bold;
  margin-top:100px;
  font-size: 40px;
  margin-bottom:40px;
  @media (max-width: 1050px) {
    width:300px;
    height: 70px;
    font-size: 36px;
  }
  @media (max-width: 650px) {
    width:300px;
    height: 70px;
    font-size: 32px;
  }
  
`;

export const LogOutB = styled.button`


  cursor: pointer;
  background: linear-gradient(180deg, ${({ color }) => (color ? color : "black")}, ${({ color2 }) => (color2 ? color2 : "black")});
  width:250px;
  height: 50px;
  border-radius:85px;
  outline: 5px white solid;
  border: none;
  border-bottom: 9px ${({ borderColor }) => (borderColor ? borderColor : "black")} solid;
  color:white;
  font-weight: bold;
  margin-top:120px;
  font-size: 30px;

`;