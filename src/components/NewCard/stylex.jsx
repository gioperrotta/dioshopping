import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex ;
  flex-direction: column;
  
  max-width: 300px;
  height: 400px ;
  background: white;
  /* border: 1px solid ${props => props.theme.colors.gray300}; */
  border-radius: 8px ;
  padding: 2px;
 
  h5 {
   margin-top: 1rem;
   font-size: 1.5rem ;
   width: 100% ;
   text-align: center ;
  }

  img {
    max-width: 100%;
    overflow: hidden ;
    background: white ;
    padding: 0.2rem 1rem ;
  }

  h4 {
    padding:0.2rem 1rem ;
    text-align: right ;
  }

`;

