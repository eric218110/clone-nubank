import styled from "styled-components/native";
import { Animated } from "react-native";
import { StyleSheet } from "react-native";

export const Container = styled(Animated.ScrollView)`
  padding: 0 30px;
  max-height: 70%;
  overflow: hidden;
`;

export const Code = styled.View`
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
  width: 100%;
`;
export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;
export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 15px;
  width: 100%;
`;

export const SignOutButtonText = styled.Text`
  font-weight: bold;
  font-size: 13px;
  color: #fff;
  text-transform: uppercase;
`;
