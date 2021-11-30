import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsScreen from "../screens/DetailsScreen";
import Registre from "../screens/Registre";
import Galerie from "../screens/Galerie";
import ShowGalerie from "../screens/ShowGalerie";
export type RouteParams = {
    Home: {
        id: string;
    };
    Details: {
        id: string;
    };
    Inscription: undefined;
    sg: {
        imagesG: string
    }
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home}


                    options={{
                        headerShown: false,

                    }}


                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        headerShown: false,
                        animation: 'fade_from_bottom',

                    }}
                />

                <Stack.Screen
                    name="Inscription"
                    component={Registre}
                    options={{
                        headerShown: false,
                        animation: "none"
                    }}
                />

                <Stack.Screen
                    name="sg"
                    component={ShowGalerie}
                    options={{
                        headerShown: false,
                        animation: "none"
                    }}
                />


            </Stack.Group>
        </Stack.Navigator>
    );
};
