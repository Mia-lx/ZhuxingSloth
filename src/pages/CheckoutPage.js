import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";

//额外输入
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="结账" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>你的购物车是空的。</h2>
            <Link to="/products" className="btn">
              购物
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
