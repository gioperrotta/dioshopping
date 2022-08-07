import styled from "styled-components";

export const Container = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: space-between ;
  /* border: 1px solid ${props => props.theme.colors.text}; */
  margin: .75rem;
  /* padding: .5rem; */
  width: 30% ;
  min-height: 10rem;
  border-radius: 6px;
  background: white ;
`;

export const AuthorContainer = styled.div`
 display: flex ;
 flex-direction: column ;
  width: 100% ;
  padding: 0.5rem ;
  font-size: 1.5rem;
  background: ${props => props.theme.colors.gray300};
  border-radius: 6px;
`;

export const Content = styled.div`
  width: 100% ;
  padding: 0.25rem ;
  margin: .25rem 0; 
  font-size: 1.2rem ;
  overflow-wrap:break-word ;
  flex: 1;
 
`;

export const DateContainer = styled.span`
  width: 100% ;
  padding: 0 0.5rem ;
  /* margin-top: .25rem;  */
  text-align: end ;
  font-size: 1rem;
`;

