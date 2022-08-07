import { Container, SideBarContainer, ProductContainer } from "./styles";
//import { useSelector } from 'react-redux';
import { SideBar } from "../components/SideBar";
import { NewCard } from "../components/NewCard";

import { useProducts } from "../hooks/useProducts"


export function HomePage() {
  // let products = useSelector(state => state.products);
  // const Filteredproducts = products.filter(product => product.id_categorys === 2);
 const { products, filteredProducts } = useProducts();
 
  console.log('Home Page productsList =>', products);

  return (
    <Container>
      <SideBarContainer>
        <SideBar/>

      </SideBarContainer>
      <ProductContainer>
        {filteredProducts.map(item => {
          return (
            <NewCard key={item.id_product} product={item} />
          )
        })}
      </ProductContainer>
    </Container>
  )
}