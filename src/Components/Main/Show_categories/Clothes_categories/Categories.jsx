import React, { useState } from "react";
import { CardWrapper, Container, Wrapper, Card, CTop, Logo, CTopText, CTopTitle, Description, Shoes, ShoeOne, ShoeTwo } from "./Style";
import Brand_1 from "../../../../Images/nike_PNG.png";
import Brand_2 from "../../../../Images/adidas-png.png";
import Clothe_1 from "../../../../Images/t-shirt-nike.png";
import Clothe_2 from "../../../../Images/clothe-adidas.png";
import CardBottom from "./Compon/CardBottom";
import { useMotionValue, useTransform } from "framer-motion";

function Categories() {
    const[currentColor, setCurrentColor] = useState(1);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [30, -30]);

    const rotateY = useTransform(x, [-100, 100], [30, -30]);

    const variants ={
        default: {
            translateX: 0,
            rotateZ: 15,
        },

        firstShoeAnimation: {
            translateX: -700,
            rotateZ: -45,
        },

        secondShoeAnimation: {
            translateX: -400,
            rotateZ: -345,
        },
    }

    return ( 
        <Wrapper>
            <Container>
                <CardWrapper 
                    style={{x, y, rotateX, rotateY, z: 100}}
                    drag 
                    dragConstraints={{top:0, right:0, bottom:0, left:0}} 
                    dragElastic={0.16} 
                    whileTap={{cursor: "grabbing"}}
                    >
                    <h1 className="categorie_title">Одяг</h1>
                    <Card>
                        <CTop currentColor={currentColor}>
                            <Logo src={currentColor === 1 ? Brand_1 : Brand_2} alt="logo"/>
                            <CTopText>
                                <CTopTitle>{currentColor === 1 ? "Nike" : "Adidas"}</CTopTitle>
                                <Description>
                                    {currentColor === 1 ?
                                        "Bring inspiration and innovation to every athlete in the world" 
                                        :
                                        "Everything we do is rooted in sport. "
                                    }
                                </Description>
                            </CTopText>
                            <Shoes style={{x, y, rotateX, rotateY, z: 10000}}>
                                <ShoeOne 
                                    src={Clothe_1} 
                                    alt="shoe-1" 
                                    animate={currentColor === 2 ? variants.firstShoeAnimation : variants.default} 
                                    variants={variants}
                                />
                                <ShoeTwo 
                                    src={Clothe_2} 
                                    alt="shoe-2" 
                                    animate={currentColor === 2 ? variants.secondShoeAnimation : variants.default}
                                    variants={variants}
                                />
                            </Shoes>
                        </CTop>
                        <CardBottom currentColor={currentColor} setCurrentColor={setCurrentColor}/>
                    </Card>
                </CardWrapper>
                
            </Container>
        </Wrapper>
     );
}

export default Categories;