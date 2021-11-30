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
        titre: string;
        description: string;
        image: string;
        categorie: string;
        PS1: string;
        PS2: string;
        PS3: string;
        Espace: string;
        Largeur: string;


    };
    Inscription: {
        demande: string;
    };
    sg: {
        imagesG: string
    },
    RetourHome: undefined;
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
                    name="RetourHome"
                    component={Home}
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
