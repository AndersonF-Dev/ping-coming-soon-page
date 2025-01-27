import styled from "styled-components";

// Wrapper para centralizar o card
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;

`;


// Conteúdo do card
export const CardContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  min-width: 40vw;
  max-width: 637px;
  width: 100%;
  text-align: center;
  
`;

// Título do card
export const CardTitle = styled.h1`
  font-size: 34px;
  font-family: "Libre Franklin";
  font-weight: 700;
  margin-bottom: 16px;
  color: hsl(209, 33%, 12%);

  span{
    color: hsl(223, 87%, 63%);
  }
`;

// Subtítulo do card
export const CardSubTitle = styled.h2`
  font-size: 3.688rem;
  font-family: "Libre Franklin";
  margin-bottom: 16px;
  color: #333;

  span{
    font-weight: 400;
    color: hsl(0, 0%, 59%);
  }

  @media (max-width: 768px){
    font-size: 3rem;
  }
`;

// T´tulo informação
export const CardInformacao = styled.h3`
  font-size: 24px;
  font-weight: 400;
  font-family: "Libre Franklin";
  margin-bottom: 20px;
  color: hsl(209, 33%, 12%);
`;

// Botão do card
export const CardImagem = styled.div`
  width: 100%;
  margin-top: 4rem;
  overflow:hidden;

  img{
    width: 100%;
  }
`;

export const Cardfooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem; 
`;

export const Copyright = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 13px;
    color: hsl(0, 0%, 59%);
`;
