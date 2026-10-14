const products = [
  { name: "Mus", price: 299 },
  { name: "Tangentbord", price: 799 },
  { name: "Webbkamera", price: 449 },
  { name: "Skärm", price: 2499 }
];



function App(){
  function CheckPrice() {

  const prices = products.map((products => (products.price)));
  const filteredPrices =  prices.filter(price => price > 500)
    
  console.log(filteredPrices);

  }

const categories = [
  "SEO", 
  "Webb", 
  "SEO", 
  "Design", 
  "Webb", 
  "SEO"
];

  function Categories() {
    
    const counts: Record<string, number>= {};

    categories.forEach((element) => {
      if(counts[element] === undefined){
        counts[element] = 1;
      } else {
        counts[element] ++;
      }
    });
    console.log(categories);
    console.log(counts);
  }
  




  function Double(){

    const emails = [
    "anna@mail.se",
    "erik@mail.se",
    "anna@mail.se",
    "lisa@mail.se",
    "erik@mail.se"
    ];

    const doubles: Record <string, number> = {}; 

    emails.forEach((element) => {
      if(doubles[element] === undefined){
        doubles[element] = 1;
      } else {
        doubles[element] ++;
      }
    });
    console.log(doubles);
    console.log(emails)
  }




















  Double();
  CheckPrice();
  Categories();
}






export default App
