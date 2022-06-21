import cn from "./CategoryBlock.module.scss"

export default function CategoryBlock({title}){
    return <button className={cn.category_block}>
               {title}
    </button>
}