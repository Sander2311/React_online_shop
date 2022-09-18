export const renderGradient = (colorId) =>{
    let gradient = "";
    switch(colorId) {
        case 1:
            gradient = `${"to right bottom, #000, #39403a"}`
            return gradient
        case 2:
            gradient = `${"to right bottom, #910503, #f28627"}`
            return gradient
        default:
            return gradient
    }
}