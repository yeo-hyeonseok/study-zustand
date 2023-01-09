import "./App.css";
import React from "react";
import styled from "styled-components";
import create from "zustand";

interface UseStore {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
}

const useStore = create<UseStore>((set) => ({
  count: 0,
  plusCount() {
    set((state) => ({ count: state.count + 1 }));
  },
  minusCount() {
    set((state) => ({ count: state.count - 1 }));
  },
}));

const Test = () => {
  const { count } = useStore();

  return <div>카운트: {count}</div>;
};

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
