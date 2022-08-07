import { Container , AuthorContainer, Content,DateContainer} from './styles'

export function CardMessage({email, message, created_at}) {
  return (
    <Container>
      <AuthorContainer>
         <DateContainer >
          {created_at}
        </DateContainer>
         {email} 
      </AuthorContainer> 
      <Content>{message}</Content>
     
    </Container>  
  )
}