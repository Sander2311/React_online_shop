import s from "./Card.module.css";
import {motion} from "framer-motion";
import star_icon from "../../Images/star-icon.svg";
import star_icon_color from "../../Images/star-icon-color.svg"




function Card({item}) {

    let idImg = 0;
    let idSizes = 0;

    const qualityRender = (qualityNum) =>{
        switch(qualityNum){
            case 1:
                return <div className={s.quality_icons}>
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                        </div> 
            case 2:
                return <div className={s.quality_icons}>
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                        </div> 
            case 3:
                return <div className={s.quality_icons}>
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                        </div> 
            case 4:
                return <div className={s.quality_icons}>
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon} alt="error" />
                        </div>  
            case 5:
                return <div className={s.quality_icons}>
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                            <img src={star_icon_color} alt="error" />
                        </div> 
            default:
                return <div className={s.quality_icons}>
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                            <img src={star_icon} alt="error" />
                        </div> 
        }
    }

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
                    idImg += 1;
                    return <img src={img} key={idImg} alt="error"/>
                })}
            </div>
            <div className={s.info_card}>
                <div className={s.info}>
                    <h1 className={s.title}>{item.title}</h1>
                    <div className={s.sizes}>
                        <h2 className={s.size_title}>Розміри:</h2>
                        <div className={s.size_items}>
                            {item.sizes.map((size) =>{
                                idSizes += 1;
                                return <div className={s.size} key={idSizes}>{size}</div>;
                            })}
                        </div>  
                    </div>
                    <div className={s.quality}>
                        <h2 className={s.quality_title}>Якість:</h2>
                        {qualityRender(item.quality)}
                    </div>
                    <div className={s.material}>
                        <h2 className={s.material_title}>Матеріал:</h2>
                        <div className={s.material_text}>{item.material}</div>     
                    </div>
                    <div className={s.maker}>
                        <h2 className={s.maker_title}>Виробник:</h2>
                        <div className={s.maker_text}>{item.maker}</div> 
                    </div>
                    <div className={s.btn_block}>
                        <button className={s.btn} onClick={(e) => window.open('https://www.instagram.com/direct/t/340282366841710300949128168046407494337')}>Перейти в Instagram</button>
                        <p className={s.btn_text}>Щоб дізнатись детальну інформацію про товар або замовити його, пишіть в Direct в Instagram</p>
                    </div>
                </div>
                <div className={s.price_block}>
                    <p className={s.price}>{item.price} uah</p> 
                </div>
            </div>
        </motion.div>
     );
}

export default Card;