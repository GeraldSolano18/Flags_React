import styled from "styled-components";
import {Link} from 'react-router-dom'
import { fadeing } from "../../styles/animation";


export const StyledLink = styled(Link)`
    color:var(--black);
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Article = styled.article`
  ${fadeing()};
  cursor: pointer;
  width: 264px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  .details {
    padding: 1.5em;
    border: solid 1px transparent;
    border-top:none;
    border-radius:0 0 5px 5px;
    transition: 1.5s border;
  }

  &:hover .details{
   border: solid 1px var(--black);
   border-top:none;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin: 0.5rem 0;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  vertical-align:top;
  border-radius:5px 5px 0 0;
`;

export const CountrySyled = styled.div`
  min-height: 200px;
`;
