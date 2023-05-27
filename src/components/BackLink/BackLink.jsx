import { HiArrowLeft } from "react-icons/hi";
import css from "./BackLink.module.css";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const StyledLink = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   padding: 8px 0;
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   text-transform: uppercase;

//   :hover {
//     color: orangered;
//   }
// `;

export const BackLink = () => {
    return (
      <button className={css.btn}>
        <HiArrowLeft size="18" />
        Go back 
      </button>
    );
  };