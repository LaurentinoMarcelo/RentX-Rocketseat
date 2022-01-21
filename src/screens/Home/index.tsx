import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar, TouchableOpacity, StyleSheet, BackHandler } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/logo.svg";
import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { LoadAnimation } from "../../components/LoadAnimation";

import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CardList,
} from "./styles";

import { useTheme } from "styled-components";

export function Home() {
  const [cars, setCars] = useState<CarDTO>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const navigation = useNavigation();

  const theme = useTheme();

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(event, ctx:any){
      ctx.positionX = positionX.value;
    },
    onActive(event, ctx:any){
      positionX.value = ctx.positionX + event.translationX; 
      positionY.value = event.translationY; 
    },
    onEnd(){

    }
  });

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    })
  })

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {
            !loading &&
            <TotalCars>Total de {cars.length} carros</TotalCars>
          }
          
        </HeaderContent>
      </Header>

      {
      loading ? <LoadAnimation /> : 
        <CardList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      }

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <ButtonAnimated
            onPress={handleOpenMyCars}
            style={[styles.button, { backgroundColor: theme.color.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.color.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
