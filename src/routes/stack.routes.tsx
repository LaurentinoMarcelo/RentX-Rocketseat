import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Schedules } from '../screens/Schedules';
import { SchedulesDetails } from '../screens/SchedulesDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
               
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="Schedules"
                component={Schedules}
            />
            <Screen
                name="SchedulesDetails"
                component={SchedulesDetails}
            />  
            <Screen
                name="SchedulingComplete"
                component={SchedulingComplete}
            />           

        </Navigator>

    )
}