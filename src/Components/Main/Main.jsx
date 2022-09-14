import { useEffect, useState } from "react";

import s from "./Main.module.css";
import shop_items from "./Shop_items";
import Card_item from "./Card_item"
import Filter from "./Filter";
import Categories_shoe from "./Show_categories/Shoe_categories/Categories";
import Categories_clothes from "./Show_categories/Clothes_categories/Categories";
import Categories_accessory from "./Show_categories/Accessory_categories/Categories";
import {motion, AnimatePresence} from "framer-motion";


function Main() {
    const [assortment, setAssortment] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeBtn, setActiveBtn] = useState("all");


    useEffect(() =>{
        setAssortment(shop_items);
        setFiltered(shop_items);
    }, [])



    return ( 
        <div className={s.main}>
            <div className={s.main_title_box}>
                <ul className={s.main_title}>
                    <li>S</li>
                    <li>H</li>
                    <li>O</li>
                    <li>P</li>
                    <li>&ensp;</li>
                    <li>N</li>
                    <li>A</li>
                    <li>M</li>
                    <li>E</li>
                </ul>
            </div>
            <div className={s.cateoriesgWrapper}>
                <Categories_shoe />
                <Categories_clothes />
                <Categories_accessory />
            </div>
            <Filter assortment={assortment} setFiltered={setFiltered} activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
            <motion.div
                className={s.shop_items}
            >
                <AnimatePresence>
                    {filtered.map((item) =>{
                        return <Card_item key={item.id} item={item}/>
                    }).reverse()}
                </AnimatePresence>
            </motion.div>
            <footer className={s.footer}>
                    <p className={s.footer_text}>Move to our instagram - <a href="/">Here</a> </p>
            </footer>
        </div>
     );
}

export default Main;