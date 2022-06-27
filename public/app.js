"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const form = document.querySelector(".new-item-form");
const invOne = new Invoice("William", "Buying a car", 50);
const invTwo = new Invoice("Shatner", "Lending a wardrobe", 403);
console.log(invOne.format());
console.log(invTwo.format());
const type = document.getElementById("type");
const tofrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
