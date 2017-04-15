function store() {
    this.products = [
        new product("1-1-anica-ef-0104-green-anica-34-400x400-imae3paj2t2f9bg9", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 1, 2),
        new product("ud020-unique-fashion-400x400-imae5smj9j3mzw4j", "Avocado", "Guacamole anyone?", 16, 90, 0, 1, 1, 1, 2),
        new product("sg-202-shree-ganesh-400x400-imae3fsr8dyhjfzw", "Banana", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 2, 2),
        new product("max-228-max-400x400-imae4sf9avzvpzak", "Fig", "OK, not that nutritious, but sooo good!", 10, 100, 0, 0, 0, 1, 2),
        new product("maximus-833-max-400x400-imae4sfabbbcjj4e", "Grapefruit", "Pink or red, always healthy and delicious.", 11, 50, 4, 4, 1, 1, 1),
        new product("afv337-pushpam-400x400-imae4sfavtqepmdf", "Grape", "Wine is great, but grapes are even better.", 8, 100, 0, 3, 0, 1, 1),
        new product("anjujred8-alvirafab-400x400-imaeezpvvgddymzw", "Guava", "Exotic, fragrant, tasty!", 8, 50, 4, 4, 0, 1, 2),
        new product("starkmshr4609-aara-400x400-imae3fpq3zw3hgwv", "Kiwi", "These come from New Zealand.", 14, 90, 1, 4, 0, 2, 2),
        new product("cpc42005hina-cutie-pie-400x400-imae2vfj83czsgzd", "Lychee", "Unusual and highly addictive!", 18, 125, 1, 4, 0, 2, 2),
        new product("blue-brasso-7-g-3-fashion-zone-400x400-imae5qjejv2vfkdr", "Mango", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 1, 1),
        new product("ed06-khushali-free-size-400x400-imae33ybznwbrywn", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 1, 4, 2, 1, 2),
        new product("1-1-sym2504-red-manmandir-xl-400x400-imaeaf5x2uujyefc", "Papaya", "Super-popular for breakfast.", 5, 60, 3, 4, 2, 2, 2),
        new product("1-1-sai-6-maruticreation-free-400x400-imaebg4vwz6rhnb5", "Peach", "Add some cream and enjoy.", 19, 70, 1, 2, 0, 1, 2),
        new product("sg0403-shree-ganesh-400x400-imaegrbgwxuf4733", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, 0, 2, 0, 1, 2),
        new product("1-1-navkaar1008-navkar1008-free-400x400-imaeav5dmh34jr3c", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 19, 110, 0, 2, 0, 2, 0),
        new product("ud020-unique-fashion-400x400-imae5smj9j3mzw4j", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 0, 1)

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
