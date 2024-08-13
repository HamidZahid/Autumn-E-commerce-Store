// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { BsPlus, BsEyeFill } from "react-icons/bs";
// import { CartContext } from "../contexts/CartContext";

// const Product = ({ product }) => {
//   const { addToCart } = useContext(CartContext);
//   // console.log(product);
//   const { id, image, category, title, price } = product;
//   return (
//     <div>
//       <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overfloe-hidden group transition">
//         <div className="w-full h-full flex justify-center items-center">
//           {/* {image} */}
//           <div className="w-[200px] mx-auto flex justify-center items-center">
//             <img
//               className="max-h-[160px] group-hover:scale-110 transition duration-300"
//               src={image}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="absolute top-6 -right-11 group-hover:right-5 p-2flex flex-col items-center justify-center gap-y-2
//         opacity-0 group-hover:opacity-100 transition-all duration-300">
//           <button onClick={()=> addToCart(product, id)}>
//             <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
//               <BsPlus className="text-3x1" />
//             </div>
//           </button>
//           <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
//             <BsEyeFill />
//           </Link>
//         </div>
//       </div>
//       <div>
//         <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
//         <Link to={`/product/${id}`}>
//         <h2 className="font-semibold mb-1">{title}</h2>
//         </Link>
//         <div className="font-semibold">$ {price}</div>
//       </div>
//     </div>
//   );
// };

// export default Product;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill, BsPencil, BsTrash } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import axios from 'axios';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { products, setProducts } = useContext(ProductContext);
  const { id, image, category, title, price } = product;

  // DELETE: Remove the product by ID
  const handleDelete = async (id) => {
    try {
      console.log('Attempting to delete product with ID:', id); // Debugging
      const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
      
      console.log('Delete response:', response); // Debugging
      if (response.status === 200) {
        alert('Product deleted successfully');
        // Update local state
        setProducts(products.filter(product => product.id !== id));
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  // UPDATE: Update the product details
  // const handleUpdate = async () => {
  //   const updatedProductData = {
  //     title: "Updated Title",  // Example updated data
  //     price: 19.99,  // Example updated price
  //     // Add other fields as necessary
  //   };

  //   try {
  //     console.log('Attempting to update product with ID:', id); // Debugging
  //     const response = await axios.put(`https://fakestoreapi.com/products/${id}`, updatedProductData);
      
  //     console.log('Update response:', response); // Debugging
  //     if (response.status === 200) {
  //       alert('Product updated successfully');
  //       // Update local state
  //       setProducts(products.map(product => 
  //         product.id === id ? response.data : product
  //       ));
  //     } else {
  //       alert('Failed to update product');
  //     }
  //   } catch (error) {
  //     console.error('Error updating product:', error);
  //     alert('Failed to update product');
  //   }
  // };
  const handleUpdate = async () => {
    const updatedProductData = {
      title: `${title} New title`,  // Example updated data
      price: `${price + 2}`,  // Example updated price
      // Add other fields as necessary
    };
  
    try {
      console.log('Attempting to update product with ID:', id); // Debugging
      const response = await axios.put(`https://fakestoreapi.com/products/${id}`, updatedProductData);
  
      console.log('Update response:', response); // Debugging
      if (response.status === 200) {
        alert('Product updated successfully');
        // Update local state with updated product
        setProducts(prevProducts =>
          prevProducts.map(product =>
            product.id === id ? { ...product, ...updatedProductData } : product
          )
        );
      } else {
        alert('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };
  

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
          <button onClick={handleUpdate}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-yellow-500">
              <BsPencil className="text-2xl" />
            </div>
          </button>
          <button onClick={() => handleDelete(id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-700">
              <BsTrash className="text-2xl" />
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;



