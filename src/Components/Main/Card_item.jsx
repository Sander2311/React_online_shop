import s from "./Card.module.css";
import {motion} from "framer-motion";



function Card({item}) {

    let id = 0;

    return ( 
        <motion.div
            animate={{opacity: 1, scale: 1}}
            initial={{opacity: 0, scale: 0}}
            exit={{opacity: 0, scale: 0}}
            layout 
            className={s.card}
        >
            <div className={s.container}>
                {item.img_url.map((img) =>{
                    id += 1;
                    return <img src={img} key={id}/>
                })}
            </div>
            <div className={s.info_card}>
                <div className="info">
                    <h2 className={s.title}>{item.title}</h2>
                    <p className={s.description}>{item.description}</p>
                </div>
                <div className={s.price_btn}>
                    <p className={s.price}>{item.price} grn</p>
                    <button className={s.btn}>Click me</button>
                </div>
            </div>
        </motion.div>
     );
}

export default Card;