import { useEffect } from "react";
import s from "./Filter.module.css"


function Filter({assortment, setFiltered, activeBtn, setActiveBtn}) {

    useEffect(() => {
        if(activeBtn === "all"){
            setFiltered(assortment);
            return;
        }
        const filtered = assortment.filter((item) => {
            return item.item_type === activeBtn
        });
        
        setFiltered(filtered); 
    }, [activeBtn]);

    return ( 
        <div className={s.filter_container}>
            <button className={activeBtn === "all"? s.active : "" } onClick={() => setActiveBtn("all")}>Всі категорії</button>
            <button className={activeBtn === "shoe"? s.active : "" } onClick={() => setActiveBtn("shoe")}>Взуття</button>
            <button className={activeBtn === "clothes"? s.active : "" } onClick={() => setActiveBtn("clothes")}>Одяг</button>
            <button className={activeBtn === "accessory"? s.active : "" } onClick={() => setActiveBtn("accessory")}>Аксесуари</button>
        </div>
     );
}

export default Filter;