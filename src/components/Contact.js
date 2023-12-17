import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h2>筑星俱乐部</h2>
        <div className="content">
          <p>
            <b>
              免费加入筑星俱乐部，即可享受会员福利，更有不期而至的小惊喜等着你。
            </b>
            <br />
            1.每月会员特惠。
            <br />
            2.消费累积分，兑丰富好礼。
            <br />
            3.退换货时间,延长至365天。
            <br />
            ......
            <br />
            惊喜多多，详情请订阅查看!
          </p>
          <form className="contact-form">
            <input type="email" className="form-input" placeholder="输入邮箱" />
            <button className="submit-btn" type="submit">
              订阅
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .submit-btn {
    background: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
    &:hover {
      color: var(--clr-white);
    }
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
