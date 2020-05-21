import * as React from "react";
import QRCore from "react-native-qrcode-svg";
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from "./styles";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Animated } from "react-native";

interface IMenuProps {
  translateY: Animated.Value;
}

export const Menu: React.FC<IMenuProps> = ({ translateY }) => (
  <Container
    style={{
      opacity: translateY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1],
      }),
    }}
  >
    <Code>
      <QRCore
        color={"#FFF"}
        backgroundColor={"#8B10AE"}
        size={100}
        value={"https://app.nubank.com.br/#/login"}
      />
    </Code>
    <Nav>
      <NavItem>
        <MaterialIcons name={"help-outline"} size={20} color={"#FFF"} />
        <NavText>Me ajuda</NavText>
      </NavItem>
      <NavItem>
        <MaterialIcons name={"person-outline"} size={20} color={"#FFF"} />
        <NavText>Perfil</NavText>
      </NavItem>
      <NavItem>
        <AntDesign name={"creditcard"} size={20} color={"#FFF"} />
        <NavText>Configurar cartão</NavText>
      </NavItem>
      <NavItem>
        <MaterialCommunityIcons
          name={"account-badge-horizontal-outline"}
          size={20}
          color={"#FFF"}
        />
        <NavText>Configurar conta</NavText>
      </NavItem>
      <NavItem>
        <MaterialIcons name={"smartphone"} size={20} color={"#FFF"} />
        <NavText>Configurações do app</NavText>
      </NavItem>
    </Nav>
    <SignOutButton>
      <SignOutButtonText>sair do app</SignOutButtonText>
    </SignOutButton>
  </Container>
);
