import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Hero from '../components/Hero'

const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredProducts)
  const filteredProduct = products.filter((items) => {
    return (
      items.category === "electronics" || items.category === "jewelery"
    );
  });
  // console.log(filteredProduct)
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                // <div className="w-full h-[300px] bg-blue-200" key={product.id}>
                //   {product.title}
                // </div>
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProduct.map((products) => {
              return (
                <Product product={products} key={products.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
