import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: white;
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dark-mode {
    .moon {
      margin-right: 15px;
      display: inline-flex;
      transform: rotate(-10deg);
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
  h1 {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;

    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
