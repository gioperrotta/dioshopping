import styled from 'styled-components';

export const HeaderContainer = styled.header`
  //margin-top: 2rem ;
  width: 100%;
  height: 18rem;
  background: ${props => props.theme.colors.blue800};

  display: flex;
  align-items: top;
  justify-content: space-between ;
  padding: 2rem ;

  h1 {
    font-size: 3rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    letter-spacing: 0rem;
    color: ${props => props.theme.colors.gray100};
    

    &:hover {
      color: white ;
    }
  }

  nav {
   // height: 100%;
    a {
      display: inline-block;
      padding: .2rem 0.5rem;
      margin-right: 1rem;
      height: 100%;
      line-height: 5rem;
      color: ${props => props.theme.colors.gray100};
      text-decoration: none;
      font-size: 1.5rem ;
      font-weight: 500 ;

      transition: color 0.2s;
      margin-right: 2rem ;

      /* & + a {
        margin-left: 8rem;
      } */

      &:hover {
        color: white;
      }
    } 
  }

  button {
    margin-bottom: 1rem ;
    margin-left: 2rem ;
  }


`

export const HeaderContent = styled.div`
  max-width: 1720px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between ;





   
`;