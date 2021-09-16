import React from "react";
import { Wrapper } from "../wrapper";
import { HeaderStyle } from "./styles";

export const Header = () => {
  function handleCLick() {}
  return (
    <HeaderStyle>
      <Wrapper>
        <div className='content'>
          <h1>Where the world?</h1>
          <div className="dark-mode">
            <p onClick={handleCLick}>
              <span className='moon'>
                  <i className="far fa-moon"></i>   
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyle>
  );
};
