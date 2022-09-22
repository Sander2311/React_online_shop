import { useEffect, useState } from "react";

import s from "./Main.module.css";
import shop_items from "./Shop_items";
import CardItem from "./Card_item"
import Filter from "./Filter";
import CategoriesShoe from "./Show_categories/Shoe_categories/Categories";
import CategoriesClothes from "./Show_categories/Clothes_categories/Categories";
import CategoriesAccessory from "./Show_categories/Accessory_categories/Categories";
import {motion, AnimatePresence} from "framer-motion";


function Main() {
    const [assortment, setAssortment] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeBtn, setActiveBtn] = useState("all");
    const [img, setImg] = useState(0);
    const [modal, setModal] = useState("none");


    useEffect(() =>{
        setAssortment(shop_items);
        setFiltered(shop_items);        
    }, [])

    useEffect(() =>{
        if(img !== 0){
            setModal("flex");
        }
    }, [img])

    

    return ( 
        <div className={s.main}>
            <div className={s.main_title_box}>
                <ul className={s.main_title}>
                    <li>K</li>
                    <li>A</li>
                    <li>L</li>
                    <li>Y</li>
                    <li>N</li>
                    <li>A</li>
                    <li>_</li>
                    <li>S</li>
                    <li>H</li>
                    <li>O</li>
                    <li>P</li>
                </ul>
            </div>
            <div className={s.cateoriesgWrapper}>
                <CategoriesShoe />
                <CategoriesClothes />
                <CategoriesAccessory />
            </div>
            <Filter assortment={assortment} setFiltered={setFiltered} activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
            <motion.div
                className={s.shop_items}
            >
                <AnimatePresence>
                    {filtered.map((item) =>{
                        return <CardItem key={item.id} item={item} setImg={setImg}/>
                    }).reverse()}
                </AnimatePresence>
            </motion.div>
            <footer className={s.footer}>
                    <p className={s.footer_text}>Move to our instagram - <a href="https://www.instagram.com/kalina_p11/" target="_blank" rel="noreferrer">Here</a> </p>
            </footer>
            <div id={s.myModal} className={s.modal} style={{display: modal}}>
                <span className={s.close} onClick={() => {setModal("none"); setImg(0)}}>&times;</span>
                <img className={s["modal-content"]} id={s.img01} src={img} alt="img"/>
            </div>
        </div>
     );
}

export default Main;