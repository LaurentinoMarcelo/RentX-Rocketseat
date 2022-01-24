import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedules } from "../screens/Schedules";
import { SchedulesDetails } from "../screens/SchedulesDetails";
import { Confirmation } from "../screens/Confirmation";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { Signin } from "../screens/Signin";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Signin" component={Signin} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedules" component={Schedules} />
      <Screen name="SchedulesDetails" component={SchedulesDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
