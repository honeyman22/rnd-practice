import React, { useState } from "react";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const App = () => {
  const [myvalue, setMyvalue] = useState({
    width: 300,
    height: 200,
  });
  // const handleResize = (position) => {
  //   console.log("Hello", position);
  // };
  return (
    <>
      <Rnd
        style={style}
        default={{
          x: 0,
          y: 0,
          width: 200,
          height: 100,
        }}
        onResize={(e, dir, refToElement, delta, position) => {
          setMyvalue({
            width: myvalue.width + delta.width,
            height: myvalue.height + delta.height,
          });
        }}
      >
        Rnd 1
      </Rnd>
      <Rnd
        style={style}
        default={{
          x: 0,
          y: 0,
          width: myvalue.width,
          height: myvalue.height,
        }}
      >
        Rnd 2
      </Rnd>
    </>
  );
};
export default App;
