import React from "react";
import styled from "styled-components";
import { CartContent, PageHero } from "../components/index";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCartContext();
  console.log(cart);
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>你的购物车是空的。</h2>
          <Link to="/products" className="btn">
            购物
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="购物车" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
