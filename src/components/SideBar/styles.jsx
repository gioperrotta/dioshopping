import styled from 'styled-components';

export const SideBarContainer = styled.div`
  /* background: ${props => props.theme.colors.gray100}; */
  width: 100% ;
  min-height: 20rem ;
  padding: 0.5rem  1rem;
  margin-top: 9rem ;

  h1 {
    color: ${props => props.theme.colors.gray800};
    text-decoration: none;
    font-size: 2rem ;
    text-align: left ;
    margin-bottom: 1rem ;
  }
  div {
    display: flex ;
    flex-direction: column ;
  }
  span {
    font-size: 1.5rem ;
    color: ${props => props.theme.colors.gray800};
    margin-top: 0.5rem ;

    input {
      margin-right: 0.7rem ;
      width: 20px;
      height: 20px;
    }
  }
`;



