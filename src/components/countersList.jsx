import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 1, name: "Ненужная вещь", price: 200 },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 3, name: "Вилка" },
    { id: 3, value: 4, name: "Нож" },
    { id: 4, value: 0, name: "Набор кухонный" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    // console.log("handleDelete", id);
    const newCounters = counters.filter((coun) => coun.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("Сброс");
  };
  const handleDecrement = (id) => {
    const newCounter = counters.map((coun) => {
      if (coun.id === id) {
        coun.value -= 1;
        return coun;
      } else {
        return coun;
      }
    });
    setCounters(newCounter);
  };

  const handleIncrement = (id) => {
    const newCounter = counters.map((coun) => {
      if (coun.id === id) {
        coun.value += 1;
        return coun;
      } else {
        return coun;
      }
    });
    setCounters(newCounter);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          // id={count.id}
          // value={count.value}
          // name={count.name}
          onDelete={handleDelete}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
