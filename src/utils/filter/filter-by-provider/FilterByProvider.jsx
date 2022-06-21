import cn from "./FilterByProvider.module.scss";
import { FilterProviders } from "../../../helpers/pseudo-data/filterProviders";

export default function FilterByProvider() {
  return <select className={cn.providers_block}>
     <option>All Provider</option>
     {FilterProviders.map(el => {
      return <option key={el.id}>{el.title}</option>
     })}
  </select>;
}
