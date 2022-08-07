
import { SideBarContainer } from "./styles";

import { useProducts } from '../../hooks/useProducts'

export function SideBar() {
  const { categorys, toglleCheckCategory} = useProducts();

  console.log('SideBar category =>', categorys);

  return (
    <SideBarContainer>
      <h1>Categorias</h1>
      <div>
        {categorys.map(
          category => {
            return (
              <span Key={category.id}>
                <input type="checkbox"
                  checked={category.check}
                  id={category.id}
                  onClick={(e)=> toglleCheckCategory(category.id)  
                  }
                />
                <label htmlFor={category.id}>
                  {category.name} ({category.qtd})
                </label>
              </span>
            )
          }
        )}
      </div>


    </SideBarContainer>
  )
} 