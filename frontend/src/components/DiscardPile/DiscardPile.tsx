import { ChildrenJSX } from "../../types/ChildrenJSX";
import css from "./DiscardPile.module.css";

const DiscardPile = ({ children }: ChildrenJSX) => {
  return <div className={css.discardPile__container}>{children}</div>;
};

export default DiscardPile;