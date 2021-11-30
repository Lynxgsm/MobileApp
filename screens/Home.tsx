
import React from 'react';
import {
    StyleSheet,
    SafeAreaView, Text, View, TextInput, Animated, Dimensions,
    StatusBar, ScrollView
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Categorie from '../components/Categorie';

import { RouteParams } from '../navigation/RouteNavigation';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/MaterialIcons';
import Service from './Service';
import Excursions from './Excursions';

import Sejour from './Sejour';
import HomeScreen from './HomeScreen';
const { width } = Dimensions.get("screen")
const cardWitdh = width / 1.8
const w = width;
const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: 'white'

    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    searche: {
        height: 50,
        backgroundColor: '#f9f9f9',
        marginTop: 15,
        marginLeft: 20,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: "row",
        alignItems: "center"


    },
    hombre: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 20,

    },
    CardStatique: {
        height: 450,
        width: '95%',
        backgroundColor: 'white',
        elevation: 11,
        marginHorizontal: 10,
        borderRadius: 10,
        marginRight: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        position: 'relative',
        alignSelf: 'stretch',


    },
    ImageStatique: {
        height: 80,
        width: '100%',
        borderTopRightRadius: 10,

    },


})



export default function Home({ navigation }) {
    const scrollX = React.useRef(new Animated.Value(1)).current;
    const route = useRoute<RouteProp<RouteParams>>();
    return (
        <>

            <StatusBar
                backgroundColor='#FFFFFF'
                barStyle='dark-content'

            />
            <SafeAreaView style={{ flex: 1 }}>
                {/*Debut de bar*/}
                <SafeAreaView style={styles.safe}>
                    <View style={styles.header}>
                        <View style={{ paddingBottom: 15 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                                FIND YOUR CONCIERGE
                            </Text>

                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F39F8D', marginTop: 0 }}>
                                Marrakech
                            </Text>

                        </View>

                        <Icon name="vpn-key" size={38} color="black" />

                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.searche}>
                            <Icon name="search" size={30} color="black" style={{ marginLeft: 20 }} />
                            <TextInput placeholder="Recherche" style={{ fontSize: 20, paddingLeft: 10 }} />

                        </View>
                        <Categorie />
                        <View style={{ marginTop: 15 }}>
                            {route.params?.id == undefined || route.params?.id == "0" ?


                                <HomeScreen />
                                :
                                route.params?.id == "1" ?
                                    <Sejour /> : route.params?.id == "2" ? <Service /> : <Excursions />



                            }
                        </View>




                    </ScrollView>


                </SafeAreaView >
            </SafeAreaView>

        </>

    );
}

