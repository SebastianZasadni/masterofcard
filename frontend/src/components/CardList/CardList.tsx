import css from "./CardList.module.css";
import { ChildrenJSX } from "../../types/ChildrenJSX";

const CardList = ({ children }: ChildrenJSX) => {
  return <ul className={css.cardList}>{children}</ul>;
};

export default CardList;
