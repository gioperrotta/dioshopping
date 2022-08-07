import { useState } from 'react';

import Modal from 'react-modal';

import { ButtonApp } from '../ButtonApp'
import { FiCheckSquare, FiXCircle } from 'react-icons/fi';
import { Container, InputContainer } from './styles'
import { api } from '../../services/api';

export function MessageAddModal({ isOpen, onRequestClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [success, setSuccess] = useState(false);

  function onMessageSuccessClose() {
    setSuccess(false);
    onRequestClose();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const bodyContent = {
      email,
      message
    };
    api.post('/message', bodyContent)
      .then(({ data }) => {
        console.log('ESTOU AQUI data =>', data)
        if (data.id) {
          setSuccess(true);
          setTimeout(() => {
            onRequestClose();
          }, 4000)
        }
      })
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <FiXCircle size={24} />
      </button>
      <Container onSubmit={handleSubmit}>
        <h1>Nova Mensagem</h1>
        < InputContainer>
          <label htmlFor="inputEmail">Endereço de Email</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="E-mail"
            required
            autoFocus
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </ InputContainer>
        < InputContainer>
          <label htmlFor="inputMessage">Mensagem</label>
          <textarea
            id="inputMessage"
            className="form-control"
            placeholder="Digite a Mensagem"
            required
            autoFocus
            value={message}
            onChange={(e) => { setMessage(e.target.value) }}
          />
        </ InputContainer>
        <ButtonApp type="submit" text="Enviar Mensagem">
          <FiCheckSquare size={24} />
        </ButtonApp>
        {success &&
          <div className='alert-success'>
            <strong>Mensagem enviada com suceeso</strong>
            <button
              type="button"
              onClick={onMessageSuccessClose}
            >
              <FiXCircle size={24} />
            </button>
          </div>
        }
      </Container>
    </Modal>
  )
}