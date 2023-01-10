import React from "react";
import { useStore } from "store/store";

const Test = () => {
  const { count } = useStore();

  return <div>카운트: {count}</div>;
};

export default Test;
