import cn from "./FilterByCategory.module.scss";
import CategoryBlock from "../category-block/CategoryBlock";
import { FilterCategories } from "../../../helpers/pseudo-data/filterCategories";


export default function FilterByCategory() {
  return <div className={cn.filter_category_block}>
    {FilterCategories.map(el => <CategoryBlock title={el.title} key={el.id} />)}
  </div>;
}
