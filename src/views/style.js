import styled from "styled-components";

export const ContainerOne = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(/images/Landing-Page-BG1.png) no-repeat center fixed;
  height: 100vh;
  width:100%;


`;
export const Box = styled.img`
  height: 350px;
  
  

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
  flex: 3;
  flex-direction: row;
  align-items: flex-end;
  width:100%;
  justify-content: space-around;
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
  width:1000px;
  height:600px;
  justify-content: flex-start;
  background: rgba(242, 242, 242, 0.5);
  flex-direction: column;
  border: 9px #06334E solid;
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
  @media (max-width: 768px) {
    width:430px;
    height: 100px;
    font-size: 36px;
  }
  @media (max-width: 550px) {
    width:330px;
    height: 100px;
    font-size: 28px;
  }
  
`;

export const InfoButton = styled.button`


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
  margin-top:120px;
  font-size: 40px;
  @media (max-width: 768px) {
    width:230px;
    height: 50px;
    font-size: 36px;
  }
  @media (max-width: 550px) {
    width:200px;
    height: 40px;
    font-size: 28px;
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
  @media (max-width: 768px) {
    width:200px;
    height: 50px;
    font-size: 26px;
  }
  @media (max-width: 550px) {
    width:100px;
    height: 30px;
    font-size: 18px;
  }
  
`;