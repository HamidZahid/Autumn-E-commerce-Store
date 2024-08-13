// import React, {createContext, useState, useEffect} from 'react';

// export const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   useEffect(()=> {
//     const fetchProducts = async ()=> {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       setProducts(data);
//       // console.log(data);
//     };
//     fetchProducts();
//   }, []);
//   return <ProductContext.Provider value={{ products }} >{children}</ProductContext.Provider>;
// };

// export default ProductProvider;


import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Fetch products error:', error);
      }
    };
    fetchProducts();
  }, []);


  return (
    <ProductContext.Provider value={{ products , setProducts}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
