import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw ;
  display: flex ;
  justify-content: space-between ;
  flex-wrap: wrap ;
  margin-top: -8rem;
  min-height: 6rem;
  border-radius: 6px;
`;

export const SideBarContainer = styled.div`
  width: 400px ;
  min-height: 100vh ;
`;

export const ProductContainer = styled.div`
  flex: 1;
  min-height: 100vh ;
  gap: 20px;
  display: flex ;
  flex-wrap: wrap ;
`;

export const ContainerPageMessage = styled.div`
  width: 85vw ;
  margin: 0 auto;
  display: flex ;
  flex-direction: column ;
  margin-top: -8rem;
  min-height: 6rem;
  border-radius: 6px;


  .messages-container {
    display: flex ;
    flex-wrap: wrap ;
    justify-content: space-between ;
    margin-top: 3rem ;
  }
`;

 export const HeaderMessage = styled.div`
   max-width: 95vw ;
   display: flex ;
   align-items: center ;
   justify-content: space-between ;
   padding: 0 2rem;
   margin-top: 2rem ;
      
   h1 {
    font-size: 2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.167;
    letter-spacing: 0em;
    flex: 1 ;
    text-align: center ;
    color: white ;
    display: flex;
    justify-content: space-between ;
  }

`;