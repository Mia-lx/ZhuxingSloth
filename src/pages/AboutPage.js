import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import aboutImage from "../assets/photo-1.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="关于" />
      <Wrapper className="page section section-center">
        <img src={aboutImage} alt="photo-1" />
        <article>
          <div className="title">
            <h2>我们的故事</h2>
            <div className="underline"></div>
          </div>
          <p>
            时光的舞姿如此绚丽地呈现，如同看到了梦幻的颜色，被珍藏在温柔的空间里。面对温馨的家，从容自信于心底长腾而起，也许生活中太多的感动来自于这样平凡的家。以人为本的设计理念，崇尚视觉与触觉的完美结合，难以觉察的精巧细节，透出优雅与高贵。
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
