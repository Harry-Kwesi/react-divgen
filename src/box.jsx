import React, { useEffect, useState } from "react";

export default function Box({ count }) {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    generateBoxes(count);
  }, [count]);

  function randomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function generateBoxes(count) {
    const newBoxes = [];
    for (let i = 0; i < count; i++) {
      newBoxes.push({
        id: i,
        color: randomColor(),
      });
    }
    setBoxes(newBoxes);
  }

  return (
    <div className="container">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="box"
          style={{ backgroundColor: box.color }}
        />
      ))}
    </div>
  );
}
