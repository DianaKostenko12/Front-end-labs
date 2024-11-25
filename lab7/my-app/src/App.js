import "./App.css";
import Header from "./components/Header";
import Content from "./components/contentFolder/Content";
import Image from "./components/imageFolder/Image";
import GoodsCard from "./components/goodsCardFolder/GoodsCard";
import { useState } from "react";

function App() {
  const [goods, setGoods] = useState([
    { img: "banana.jpg", name: "Banana", price: "60 grn" },
    { img: "blueberry.jpg", name: "Blueberry", price: "100 grn" },
    { img: "lychees.jpg", name: "Lychees", price: "220 grn" },
    { img: "peach.jpg", name: "Peach", price: "80 grn" },
    { img: "raspberry.jpg", name: "Raspberry", price: "130 grn" },
    { img: "tangarine.jpg", name: "Tangerine", price: "180 grn" },
  ]);

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Image></Image>

      <div id="cards">
        {goods.map((good) => (
          <GoodsCard {...good} />
        ))}
      </div>
    </div>
  );
}
export default App;
