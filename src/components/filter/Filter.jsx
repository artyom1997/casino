import "./Filter.css"

import FilterByCategory from "../../utils/filter/filter-by-category/FilterByCategory"
import FilterByProvider from "../../utils/filter/filter-by-provider/FilterByProvider"


export default function Filter(){
    return(
        <div className="filter">
            <FilterByCategory />
            <FilterByProvider />
        </div>
    )
}