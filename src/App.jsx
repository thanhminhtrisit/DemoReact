import { useState } from "react";

const App = () => {
  //ReactJS cap nhat lai giao dien khi re-render
  //==> bien number thanh 1 cai state cua React

  //khu vuc cua JS
  //bien number thanh 1 cai state cua ReactJS
  const [number, setNumber] = useState(10);

  //khu vuc cua JSX/ReactJS

  //handle + chuc nang
  const handleAdd = () => {
    setNumber(number + 1);
  };

  //khu vuc cua html
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;
