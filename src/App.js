import React from "react";
import Contenecard from "./components/Contenecard";
import data from "./data/Data";
import Navbar from "./components/Navbar";
import "./style.css";

const App = () => {
  const renderCards = data.map((item) => {
    return <Contenecard key={item.name} item = {item} />;
  });
  return (
    <div>
      <Navbar />
      <div className="content-outer-wrapper">{renderCards}</div>
    </div>
  );
};

export default App;
