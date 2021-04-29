function calculation(){
    let shoeSizeVar = document.getElementById('shoeSize').value;
    let birthYearVar = document.getElementById('birthYear').value;
    alert((shoeSizeVar * 2 + 5) * 50 - birthYearVar + 1769);
}