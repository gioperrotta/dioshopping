import React from 'react';
import { BsChatDots } from 'react-icons/bs'

import { HeaderContainer } from './styles';

import Cart from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      {/* <HeaderContent> */}
        <a href="/">
          <h1>Dio Shopping</h1>
        </a>
        <nav>
          <a href="/menssagens"> <BsChatDots size={28}/> <span>Contato</span> </a>
          <Cart />
        </nav>
       {/* </HeaderContent> */}

    </HeaderContainer>
  )
}