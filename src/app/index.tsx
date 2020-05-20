import * as React from "react";
import { Container } from "./styles";
import { StatusBar } from "react-native";
import { Header } from "../components/Header";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} backgroundColor={"#8B10AE"} />
      <Container>
        <Header />
      </Container>
    </React.Fragment>
  );
};
