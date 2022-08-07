import { ButtonApp } from "../ButtonApp";

import { FiShoppingCart } from 'react-icons/fi';

import { CardContainer } from "./stylex";

export function NewCard({ product }) {
  return (
    <CardContainer Key={product.id_product}>
      <h5>{product.name_product}</h5>
      <img src={product.image} alt={product.name_product} srcset="" />
      <h4>R$ {product.price.toFixed(2)}</h4>
      <ButtonApp type="text" text="Adicionar" >
        <FiShoppingCart size={24} />
      </ButtonApp>

    </CardContainer>
  )

}