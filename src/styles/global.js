import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    text-decoration: none ;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 40rem;
    background:  ${props => props.theme.colors.cyan300};
    padding: 1rem 2.5rem;
    position: relative;
    border-radius: 0.25rem;
   }

 .react-modal-close {
   position: absolute;
   right: 1.5rem;
   top: 1.5rem;
   border: 0;
   background: transparent;
   width: 2rem;
   height: 2rem;

   transition: filter 0.2s;

   &:hover {
     filter: brightness(0.5)
   }
 }

`;