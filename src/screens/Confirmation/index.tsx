import React from "react";

import { StatusBar, useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";

import { useNavigation, useRoute } from "@react-navigation/native";

interface Params{
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const routes = useRoute();
  const { title, message, nextScreenRoute } = routes.params as Params;

  function handleConfirmRental() {
    navigation.navigate(nextScreenRoute);
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>
          {message}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
