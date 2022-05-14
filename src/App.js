import axios from "axios";
import React, { useEffect, useState } from "react";
import Display from "./Display";
import "./styles.css";

const App = () => {
  const [state, setState] = useState("");
  const url =
    "https://api.dotshowroom.in/api/dotk/city/getStoreList?latitude=&longitude=&city_id=1&page=1&category_id=";

  useEffect(() => {
    getVal();
  }, []);

  const getVal = () => {
    axios.get(url).then((res) => {
      const val = res.data.stores;
      setState(val);
    });
  };

  return (
    <div className="App">
      <Display state={state} />
    </div>
  );
};

export default App;
