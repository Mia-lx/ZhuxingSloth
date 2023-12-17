import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h5>抱歉，未找到匹配的产品...</h5>;
  }

  if (grid_view === false) {
    return <ListView products={products}></ListView>;
  }
  return <GridView products={products}></GridView>;
};

export default ProductList;
