import cn from "./CategoryBlock.module.scss";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../../store/slices/filterSlice";

export default function CategoryBlock({ title,aggregator }) {
   const dispatch = useDispatch()
  return <button onClick={() => dispatch(filterByCategory(aggregator))} className={cn.category_block}>{title}</button>;
}
