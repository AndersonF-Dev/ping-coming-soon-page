import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: row; */
  /* height: 400px; */
  /* flex-wrap: wrap; */
  /* flex: 1; */
  gap: 8px;
  max-width: 100%;
  /* background-color:rgb(221, 37, 37); */
  margin-top: 2rem;
  overflow: hidden;
  object-fit: cover;
  padding: 15px;
  box-sizing: border-box;
  

  .input-container {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;

  }
  @media (max-width: 768px) {
    flex-direction: column;
    /* align-items: stretch; */
    .input-container{
      flex-direction: column;
    }
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  width: 27rem;
  /* max-width: 100%; */
  padding: 10px;
  border: 2px solid ${({ isValid }) => (isValid ? "#ccc" : "hsl(354, 100%, 66%)")};
  border-radius: 2rem;
  font-size: 16px;
  outline: none;
  overflow: hidden;
  box-sizing: border-box;
  /* background-color: coral; */

  &:focus {
    border-color: ${({ isValid }) => (isValid ? "#6b8afd" : "hsl(354, 100%, 66%)")};
    box-shadow: ${({ isValid }) => (isValid ? "0 0 5px #6b8afd" : "0 0 5px hsl(354, 100%, 66%)")};
  }
  @media (max-width: 768px) {
    /* background-color: lightgray; 
    color: darkblue;  Altere a cor do texto */
    max-width: 100%;
  }

  @media (max-width: 425px){
    width: 21.438rem;
    padding: 19px ;
    
  }

  @media (max-width: 375px){
    width: 18.138rem;
  }
`;

export const Button = styled.button`
  width: 11.438rem;
  max-width: 100%;
  padding: 10px 0px;
  background-color: hsl(223, 87%, 63%);
  color: white;
  border: none;
  border-radius: 2rem;
  font-size: 16px;
  font-family: "Libre Franklin";
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover {
    background-color:hsl(223, 90.50%, 71.20%);
  }

  &:active {
    background-color: #4a68b8;
  }

  @media (max-width: 768px) {
    /* background-color: lightgray; 
    color: darkblue;  Altere a cor do texto */
    width: 100%;
  }

  @media (max-width: 425px){
    width: 21.438rem;
    padding: 19px 0px;
    
  }

  @media (max-width: 375px){
    width: 18.138rem;
  }
`;

export const ErrorMessage = styled.span`
  color: hsl(354, 100%, 66%);
  font-family: "Libre Franklin";
  font-size: 14px;
  font-weight: bold;
`;


