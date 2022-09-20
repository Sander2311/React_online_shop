import React from "react";
import { Brands, BrandTitle, CBottom, CBottomLogo, CBottomTitle, CBottomTitleBox, Price, Title, } from "../Style";
import Brand_1 from "../../../../../Images/rolex.png";
import Brand_2 from "../../../../../Images/louis_vuitton.png";

function CardBottom({currentColor, setCurrentColor}) {
    return ( 
        <CBottom>
            <CBottomTitleBox>
                <CBottomTitle>{currentColor === 1 ? "Наручні годинники" : "Ремені"}</CBottomTitle>
                <CBottomLogo src={currentColor === 1 ? Brand_1 : Brand_2} alt="logo" currentColor={currentColor}/>
            </CBottomTitleBox>
            <Title>Кращі наручні годинницик</Title>
            <div className="brands">
                <BrandTitle>Choose a brand:</BrandTitle>
                <Brands>
                    <div className="brand-1" onClick={()=> setCurrentColor(1)}>Годинники</div>
                    <div className="brand-2" onClick={()=> setCurrentColor(2)}>Ремені</div>
                </Brands>
            </div>
            <Price currentColor={currentColor}>
                <span>Best price </span>
            </Price>
        </CBottom>
     );
}

export default CardBottom;