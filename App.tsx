import { NativeBaseProvider } from "native-base";
import React from "react";
import Navigation from "./App/navigation/Navigation";

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
};
export default App;
