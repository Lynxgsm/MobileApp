
import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RouteParams } from '../navigation/RouteNavigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-paper';
import CardImage from '../components/CardImage';
import Galerie from './Galerie';
const style = StyleSheet.create({
    headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    iconContainer: {
        position: 'absolute',
        height: 55,
        width: 55,
        backgroundColor: "#F39F8D",
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: "#F5CFC7",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
    },

})


const DetailsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const route = useRoute<RouteProp<RouteParams>>();

    const Retour = () => {
        navigation.navigate("Home", {
            id: "0"

        })

    }
    const Inscription = () => {

        navigation.navigate("Inscription", {
            demande: route.params?.titre,

        })

    }



    return (
        <ScrollView
            showsVerticalScrollIndicator={false}

            contentContainerStyle={{ backgroundColor: "#FFF", paddingBottom: 20 }}>
            <StatusBar barStyle="light-content" translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground style={style.headerImage} source={route.params?.image}>
                <View style={style.header}>

                    <Icon name="arrow-back-ios" size={37} color="#FFF" onPress={Retour} />

                    <Icon name="bookmark-border" size={37} color="#FFF" onPress={function () {

                    }} />

                </View>

            </ImageBackground>
            <View>
                <View style={style.iconContainer}>
                    <Icon name="place" size={37} color="#FFF" onPress={function () {

                    }} />

                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.params?.titre}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#908e8c',
                        marginTop: 5,
                    }}>{route.params?.description}</Text>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="local-hotel" size={20} color='black' />

                            </View>
                            <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 5 }}>
                                {route.params?.Largeur}
                            </Text>
                        </View>
                        <Text style={{ fontSize: 13, color: '#908e8c' }}>
                            {route.params?.Espace}
                        </Text>
                    </View>


                </View>

                <Galerie P1={route.params?.PS1} P2={route.params?.PS2} P3={route.params?.PS3} />
                <View style={{
                    marginTop: 20, flexDirection: 'row', justifyContent: 'space-between',
                    paddingLeft: 20, alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Marrakech
                    </Text>
                    <View style={style.priceTag}>
                        <Text style={{ fontSize: 12, fontWeight: "bold", color: '#8E6F68' }}>
                            Location Villas
                        </Text>

                    </View>


                </View>
                <View style={{
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 40,
                    backgroundColor: "#F39F9D",
                    marginHorizontal: 20,
                    borderRadius: 10,

                }}>
                    <Text style={{ textAlignVertical: "center", textAlign: "center", color: "#FFF", fontSize: 14, height: 55, width: 313 }} onPress={Inscription}>
                        Vous souhaitez séjourner  à Marrakech ? Clické ici
                    </Text>

                </View>
            </View>

        </ScrollView>
    )

}

export default DetailsScreen;