import { createContext, useContext, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const products = useSelector(state => state.products);
  const [categorys, setCategorys] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const categorysList = products.map(
    category => {
      const container = {};
      container['id'] = category.id_categorys;
      container['name'] = category.name_categorys;
      return container;
    }
  )
  const sumaryCategory = categorysList.map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse)

  const arrayCategory = categorysList.map(category => category.name)
  let count = {};
  for (let i = 0; i < arrayCategory.length; i++) {
    let key = arrayCategory[i];
    count[key] = (count[key] ? count[key] + 1 : 1)
  }

  const tempCategory = [];
  sumaryCategory.forEach(element => {
    tempCategory.push({
      ...element,
      qtd: count[element.name],
      check: false
    })
  });

  useEffect(() => {
    setCategorys(tempCategory)
  },[]);

  function handleFilterProducts() {
    const tempCategorys = [...categorys];
    let result = [];
    for (let i = 0; i < tempCategorys.length; i++) {
      if (tempCategorys[i].check) {
        const id = tempCategorys[i].id;
        result = [...result, ...products.filter(product => product.id_categorys === id)];
      }
    }
    if (result.length > 0) {
      setFilteredProducts(result);
    } else {
      setFilteredProducts(products);
    }
  }

  function toglleCheckCategory(id) {
    const updateCategorys = [...categorys];
    const categoryExists = updateCategorys.find(category => category.id === id);
    if (categoryExists) {
      categoryExists.check = !categoryExists.check;
      setCategorys(updateCategorys);
    }
    handleFilterProducts();
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        categorys,
        toglleCheckCategory

      }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}
