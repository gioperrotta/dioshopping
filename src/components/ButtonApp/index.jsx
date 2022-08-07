import { ButtonContainer } from './styles'

export function ButtonApp({ type, text, onClick, children }) {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      <div className="text">{text}</div>
      <div className="icon">
        {children}
      </div>
    </ButtonContainer>
  )
}