import React from "react";
import welcome from "../src/images/welcome.png";
import './index.css';

function Home() {
  return (
    <div>
     <img  className="picture" src={welcome} />
    </div>
  );
}

export default Home;
