import styled from 'styled-components';

export const Container = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column ;
  align-items: center;

 h1{
   font-weight: 500;
   font-size: 2rem;
   line-height: 2rem;
   margin-bottom: 2.5rem ;
 }

  textarea {
    height: 7rem ;
  }

  button {
    margin-top: 1.25rem ;
  }

  .alert-success {
    display: flex ;
    justify-content: space-between ;
    margin-top: 2rem ;
    width: 100% ;
  //  padding: 1.5rem;
   // text-align: center ;
    strong {
      padding: 1.5rem ;
      font-weight: 400;
      font-size: 1.2rem;
    }
    button {
      margin-top: 0 ;
      margin-bottom: 2rem ;
      padding:0 ;
      border: 0;
      background: transparent;
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const InputContainer = styled.div`
  margin: 1rem;
  width: 100% ;
`;