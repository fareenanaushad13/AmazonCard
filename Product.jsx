import "./product.css";
import Price from "./Price";
import { useOptimistic } from "react";

function Product({ title, idx }) {
  let oldPrices = ["34,487", "12,564", "1,999", "588", "6,790","975","900","870","1,345","199","89","1,60,000"];
  let newPrices = ["30,999", "9,345", "1,560", "499" ,"5,677","787","878","768","989","99","80","1,50,000"];
  let description = [
    ["8,000 DPI", "5 programmable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro","intuitive surface"],
    ["wireless", "optical orientation"],
    ["8,000 DPI", "wireless"],
    ["designed to sell","good features"],
    ["programming butttons", "usableOptimistic"],
    ["standard quality", "satisfied"],
    ["make smoothy", "satisfaction"],
    ["intuitive surface", "productive"],
    ["durable", "strong"],
    ["SSD sizes start at 256GB"," Memory (8GB to 16GB+"],
  ];
  return (
    <div className="product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
