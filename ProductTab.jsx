import Product from "./product.jsx";

function ProductTab() {
  let styles = {
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

  };
  return (
    <div style={styles}>
      <Product title = "Logitech MX Master" idx = {0} />
      <Product title = "Appple pencil (2nd Gen)" idx = {1}/>
      <Product title = "Zebronics Zeb-transformer" idx = {2}/>
      <Product title = "petronics Toad 23" idx = {3}/>
      <Product title = "Panatonics battery" idx = {4}/>
      <Product title = "safari bag" idx = {5}/>
      <Product title = "mini laptop for child" idx = {6}/>
      <Product title = "toys" idx = {7}/>
      <Product title = "Apple watch" idx = {8}/>
      <Product title = "lifeline pen" idx = {9}/>
      <Product title = "water bottle" idx = {10}/>
      <Product title= "Mac Book" idx = {11}/>

    </div>
  );
}

export default ProductTab;
