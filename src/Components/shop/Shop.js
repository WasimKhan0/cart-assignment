import React, { useContext, useState } from "react";
import "./shop.css";
import Item from "../item/Item";
import Products from "../Products";
import ShopContext from "../ShopContext";

const Shop = () => {
  const { category, searchTerm } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const filteredProducts = Products.filter((product) => {
    return (
      (category === "all" || product.category === category) &&
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get current items
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container">
        {currentItems.map((product) => (
          <Item key={product.id} data={product} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Shop;
