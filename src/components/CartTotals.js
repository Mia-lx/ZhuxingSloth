import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            总计 : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            运费 : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            总费用 : <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            结账
          </Link>
        ) : (
          <button type="button" className="btn" onClick={loginWithRedirect}>
            登录
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
