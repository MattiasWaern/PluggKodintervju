const products = [
  { name: "Mus", price: 299 },
  { name: "Tangentbord", price: 799 },
  { name: "Webbkamera", price: 449 },
  { name: "Skärm", price: 2499 }
];



function App() {

const prices = products.map((products => (products.price)));
const filteredPrices =  prices.filter(price => price > 500)
  




console.log(filteredPrices);

}

export default App
