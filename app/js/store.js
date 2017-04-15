function store() {
    this.products = [
        new product("1-1-anica-ef-0104-green-anica-34-400x400-imae3paj2t2f9bg9", "Palakh Blue Cotton Kurti", "Palakh Blue Cotton Kurti", 12, 90, 0, 2, 0, 1, 2),
        new product("ud020-unique-fashion-400x400-imae5smj9j3mzw4j", "Janasya Multicoloured Crepe Straight Kurti", "Janasya Multicoloured Crepe Straight Kurti", 16, 90, 0, 1, 1, 1, 2),
        new product("sg-202-shree-ganesh-400x400-imae3fsr8dyhjfzw", "These are rich in Potassium and easy to peel.", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 2, 2),
        new product("max-228-max-400x400-imae4sf9avzvpzak", "W Multicoloured Rayon Straight Kurti", "W Multicoloured Rayon Straight Kurti", 10, 100, 0, 0, 0, 1, 2),
        new product("maximus-833-max-400x400-imae4sfabbbcjj4e", "shree wow Red Crepe Straight Kurti", "shree wow Red Crepe Straight Kurti", 11, 50, 4, 4, 1, 1, 1),
        new product("afv337-pushpam-400x400-imae4sfavtqepmdf", "W Green Cotton Straight Kurti", "W Green Cotton Straight Kurti", 8, 100, 0, 3, 0, 1, 1),
        new product("anjujred8-alvirafab-400x400-imaeezpvvgddymzw", "Shree Multicoloured Rayon Straight Kurti", "Shree Multicoloured Rayon Straight Kurti", 8, 50, 4, 4, 0, 1, 2),
        new product("starkmshr4609-aara-400x400-imae3fpq3zw3hgwv", "Shree Wow Blue Crepe Straight Kurti", "Shree Wow Blue Crepe Straight Kurti", 14, 90, 1, 4, 0, 2, 2),
        new product("cpc42005hina-cutie-pie-400x400-imae2vfj83czsgzd", "Vishudh Navy Cotton Straight Kurti", "Vishudh Navy Cotton Straight Kurti", 18, 125, 1, 4, 0, 2, 2),
        new product("blue-brasso-7-g-3-fashion-zone-400x400-imae5qjejv2vfkdr", "W Yellow Rayon A-line Kurti", "W Yellow Rayon A-line Kurti", 8, 70, 3, 4, 0, 1, 1),
        new product("ed06-khushali-free-size-400x400-imae33ybznwbrywn", "W Black Rayon Straight Kurti", "W Black Rayon Straight Kurti", 9, 70, 1, 4, 2, 1, 2),
        new product("1-1-sym2504-red-manmandir-xl-400x400-imaeaf5x2uujyefc", "W White Polyester Straight Kurti", "W White Polyester Straight Kurti", 5, 60, 3, 4, 2, 2, 2),
        new product("1-1-sai-6-maruticreation-free-400x400-imaebg4vwz6rhnb5", "W Multicoloured Poly cotton Straight Kurti", "W Multicoloured Poly cotton Straight Kurti", 19, 70, 1, 2, 0, 1, 2),
        new product("sg0403-shree-ganesh-400x400-imaegrbgwxuf4733", "W Pink Cotton Straight Kurti", "W Pink Cotton Straight Kurti", 8, 100, 0, 2, 0, 1, 2),
        new product("1-1-navkaar1008-navkar1008-free-400x400-imaeav5dmh34jr3c","W Multicoloured Poly cotton Straight Kurti", "W Multicoloured Poly cotton Straight Kurti", 19, 110, 0, 2, 0, 2, 0),
        new product("ud020-unique-fashion-400x400-imae5smj9j3mzw4j", "W Beige Viscose Anarkali Kurti", "W Beige Viscose Anarkali Kurti", 4, 60, 0, 3, 0, 0, 1)

    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
