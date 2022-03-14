import { css } from "styled-components";

//Tablet Media Query
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};

//Mobile Phone Media Query
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};
