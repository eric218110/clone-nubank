import * as React from "react";
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from "./styles";
import { StatusBar } from "react-native";
import { Header } from "../components/Header";
import { Tabs } from "../components/Tabs";
import { Menu } from "../components/Menu";
import { MaterialIcons } from "@expo/vector-icons";
import { Animated } from "react-native";
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";

const translateY = new Animated.Value(0);
let offSet: number = 0;

const animatedEvent = Animated.event(
  [
    {
      nativeEvent: {
        translationY: translateY,
      },
    },
  ],
  {
    useNativeDriver: true,
  }
);

function onHandlerStateChanged(event: PanGestureHandlerStateChangeEvent) {
  if (event.nativeEvent.oldState === State.ACTIVE) {
    let opened: boolean = false;
    const { y } = event.nativeEvent;
    const translatey = event.nativeEvent.translationY;

    offSet += translatey;

    translateY.setOffset(offSet);
    translateY.setValue(0);

    if (y >= 100) {
      opened = true;
    } else {
      translateY.setOffset(offSet);
      translateY.setValue(0);
      offSet = 0;
    }

    Animated.timing(translateY, {
      toValue: opened ? 320 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      offSet = opened ? 380 : 0;
      translateY.setOffset(offSet);
      translateY.setValue(0);
    });
  }
}

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} backgroundColor={"#8B10AE"} />
      <Container>
        <Header />
        <Content>
          <Menu translateY={translateY} />
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={(event: PanGestureHandlerStateChangeEvent) =>
              onHandlerStateChanged(event)
            }
          >
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-200, 0, 380],
                      outputRange: [-50, 0, 380],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              }}
            >
              <CardHeader>
                <MaterialIcons name={"attach-money"} size={28} color={"#666"} />
                <MaterialIcons
                  name={"visibility-off"}
                  size={28}
                  color={"#666"}
                />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponivel</Title>
                <Description>R$ 200.155,12</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de 192$,65 recebida de Eric Silva Mendes hoje às
                  08:53h.
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>
        <Tabs translateY={translateY} />
      </Container>
    </React.Fragment>
  );
};
