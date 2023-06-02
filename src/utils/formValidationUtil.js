export const cardNoValidation = (cardNo) => {
    
    var parts = [];    
    for (var i = 0; i < cardNo.length; i += 4) {
        parts.push(cardNo.substring(i, i + 4));
    } 
    return parts;
}

export const cvvValidation = (ccv) => {

}