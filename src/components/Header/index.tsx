import * as React from "react";
import { Container, Top, Logo, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";
const logo = require("../../../assets/logo/Nubank_Logo.png");

export const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Eric Silva</Title>
      </Top>
      <Ionicons name="ios-arrow-down" size={18} color={"#FFF"} />
    </Container>
  );
};
