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
        <div className={s.filter}>
                <h1 className={s.filter_title}>Категорії</h1>
            <div className={s.filter_container}>
                <button className={activeBtn === "all"? s.active : "" } onClick={() => setActiveBtn("all")}>Всі категорії</button>
                <button className={activeBtn === "shoe"? s.active : "" } onClick={() => setActiveBtn("shoe")}>Взуття</button>
                <button className={activeBtn === "jacket"? s.active : "" } onClick={() => setActiveBtn("jacket")}>Куртки / Жилетки</button>
                <button className={activeBtn === "skinny"? s.active : "" } onClick={() => setActiveBtn("skinny")}>Кофти / Худі</button>
                <button className={activeBtn === "suit"? s.active : "" } onClick={() => setActiveBtn("suit")}>Костюми</button>
                <button className={activeBtn === "underwear"? s.active : "" } onClick={() => setActiveBtn("underwear")}>Білизна</button>
                <button className={activeBtn === "accessory"? s.active : "" } onClick={() => setActiveBtn("accessory")}>Аксесуари</button>
            </div>
        </div>
            
     );
}

export default Filter;