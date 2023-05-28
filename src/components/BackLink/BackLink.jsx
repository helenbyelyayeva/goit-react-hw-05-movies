import { HiArrowLeft } from "react-icons/hi";
import css from "./BackLink.module.css";
import { Link } from "react-router-dom";


export const BackLink = ({ to }) => {
  return (
    <Link to={to} className={css.btn}>
      <HiArrowLeft size="18" />
      Go back
    </Link>
  );
};
