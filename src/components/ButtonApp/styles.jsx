import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 1.25rem ;
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: ${props => props.theme.colors.secundary};
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .text {
    display: block ;
    text-align: right ;
    padding: 16px 24px;
  }
  .icon {
    display: flex;
    padding: 16px 16px;
    background: ${props => props.theme.colors.cyan500};
    filter: 2;
    border-radius: 0 8px 8px 0;
    /* margin: 0 auto; */
  }
`;
