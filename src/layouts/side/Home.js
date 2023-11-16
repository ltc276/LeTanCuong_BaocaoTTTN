import Slider from "../../pages/home/Slider";
import Deal from "../../pages/home/Deal";
import React from "react";
import CategoryHome from "../../pages/home/CategoryHome";
import Lightnovel from "../../pages/home/Lightnovel";
import Request from "../../pages/home/Request";
import Items from "../../pages/home/Items";
import Distributor from "../../pages/home/Distributor";
import Region from "../../pages/home/Region";
import Mangak from "../../pages/home/Mangak";
import Shortstory from "../../pages/home/Shortstory";


function Home(props) {
  return (
    <div className="container">
      <Slider />
      <Deal />
      <CategoryHome/>
      <Shortstory/>
      <Lightnovel />
      <Mangak />
      <Request />
      <Items />
      <Distributor />
      <Region />
    </div>
  );
}

export default Home;
