import React from "react";;
import { createStackNavigator } from "@react-navigation/stack";

// routes
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";

// styles
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle:{
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            
            <Screen
                name='SignIn'
                component={SignIn}
            />

            <Screen
                name='Home'
                component={Home}
            />

        </Navigator>
    );
}