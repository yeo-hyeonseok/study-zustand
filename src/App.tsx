import "./App.css";
import React from "react";
import styled from "styled-components";
import { useStore } from "store/store";
import Test from "components/Test";

const App = () => {
  const { plusCount, minusCount } = useStore();

  return (
    <AppStyle>
      <Test />
      <button onClick={() => plusCount()}>증가</button>
      <button onClick={() => minusCount()}>감소</button>
    </AppStyle>
  );
};

const AppStyle = styled.div`
  text-align: center;
`;

export default App;
