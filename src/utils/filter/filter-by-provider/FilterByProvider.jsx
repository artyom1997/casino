import cn from "./FilterByProvider.module.scss";
import { FilterProviders } from "../../../helpers/pseudo-data/filterProviders";
import { useDispatch } from "react-redux";
import { filterByProvider } from "../../../store/slices/filterSlice";

export default function FilterByProvider() {
  const dispatch = useDispatch();

  return (
    <select className={cn.providers_block} onChange={e => dispatch(filterByProvider(e.target.value))}>
      <option value={'all'}>All Provider</option>
      {FilterProviders.map((el) => {
        return <option value={el.aggregator} key={el.id}>{el.title}</option>;
      })}
    </select>
  );
}
