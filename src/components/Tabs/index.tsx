import * as React from "react";
import { Container, TabsContainer, TabItem, TabText } from "./styles";
import { dataTabs } from "./data";

import { Animated } from "react-native";

interface ITabsProps {
  translateY: Animated.Value;
}

export const Tabs: React.FC<ITabsProps> = ({ translateY }) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: "clamp",
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 280],
          outputRange: [1, 0.3],
          extrapolate: "clamp",
        }),
      }}
    >
      <TabsContainer>
        {dataTabs.map((tab) => (
          <TabItem key={tab.id}>
            <tab.icon.type name={tab.icon.name} size={24} color={"#FFF"} />
            <TabText>{tab.text}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
};
