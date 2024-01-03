"use strict";
/**
 * 38-interface
 */
const mobile = {
    title: "IPhone 13",
    price: 560,
    productInfo(describe) {
        console.log(`${describe}: ${this.price}`);
    },
};
mobile.productInfo('info');
