import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import { FiPlusSquare } from 'react-icons/fi';
import { format } from 'date-fns'

import { api } from '../services/api';
import { ButtonApp } from '../components/ButtonApp'
import { CardMessage } from '../components/CardMessage'
import { MessageAddModal } from '../components/MessageAddModal';

import { ContainerPageMessage, HeaderMessage } from './styles'

Modal.setAppElement('#root');

export function Messages() {
  const [addMessageModal, setAddMessageModal] = useState(false);

 const formatDate = (date) => (format(date, `dd/mm/yyyy hh:mm a`))

  function handleOpenAddMessageModal() {
    setAddMessageModal(true);
  };

  function handleCloseAddMessageModal() {
    setAddMessageModal(false);
  };

  const [message, setMessage] = useState([]);

  useEffect(() => {
    api.get('/message')
      .then(({ data }) => {
        setMessage(data)
      })
  }, [addMessageModal])

  return (
    <>
      <ContainerPageMessage>
      <HeaderMessage>
        <h1> Menssagens Recebidas
        <ButtonApp type="text" text="Nova Mensagem" onClick={handleOpenAddMessageModal}>
          <FiPlusSquare size={24} />
        </ButtonApp>
        </h1>
      </HeaderMessage>
        <div className="messages-container">

        {message.map((content) => {
          return (
            <CardMessage
              key={content.id}
              email={content.email}
              message={content.message}
              created_at={formatDate(new Date(content.created_at))}
            />
          )
        })}
        </div>
      </ContainerPageMessage>

      <MessageAddModal
        isOpen={addMessageModal}
        onRequestClose={handleCloseAddMessageModal}
      />
    </>
  )
}