export const renderGradient = (colorId) =>{
    let gradient = "";
    switch(colorId) {
        case 1:
            gradient = `${"to right, #3252b3, #020f36"}`
            return gradient
        case 2:
            gradient = `${"to right, #fc9003, #eb0d09, #6e0503"}`
            return gradient
        default:
            return gradient
    }
}