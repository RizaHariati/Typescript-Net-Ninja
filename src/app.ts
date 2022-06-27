class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const invOne = new Invoice("William", "Buying a car", 50);
const invTwo = new Invoice("Shatner", "Lending a wardrobe", 403);

console.log(invOne.format());
console.log(invTwo.format());

const type = document.getElementById("type") as HTMLSelectElement;
const tofrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
});
