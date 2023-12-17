import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeroBcg1 from "../assets/photo-8.jpeg";
import HeroBcg2 from "../assets/photo-6.jpeg";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          筑星家居 <br />
          为您打造舒适的家
        </h1>
        <p>
          纯净的颜色，搭配任一款家具，尽显浪漫生活气息，满走您对居家生活的无止境追求。
          <br />
          筑星家居，达您所爱！
        </p>
        <Link to="/products" className="btn hero-btn">
          购物
        </Link>
      </article>

      <article className="img-container">
        <img src={HeroBcg1} alt="HeroBcg1" className="main-img" />
        <img src={HeroBcg2} alt="HeroBcg2" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);

  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    
  }
`;

export default Hero;
