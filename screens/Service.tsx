
import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Title, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RouteParams } from '../navigation/RouteNavigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


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
    CardStatique: {
        height: 200,
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
        marginBottom: 10,
        position: 'relative',
        alignSelf: 'stretch',


    },


})


const Service = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const route = useRoute<RouteProp<RouteParams>>();

    const Inscription = () => {
        navigation.navigate("Inscription", {
            demande: "Service",

        })

    }



    return (
        <ScrollView
            showsVerticalScrollIndicator={false}

            contentContainerStyle={{ backgroundColor: "#FFF", paddingBottom: 20 }}>

            <ImageBackground style={style.headerImage} source={require('../assets/kaly.jpg')}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '400',
                    color: '#FFF',
                    marginTop: 5,
                }}>Vous souhaitez séjourner au Maroc ?.</Text>

            </ImageBackground>
            <View>
                <View style={style.iconContainer}>
                    <Icon name="restaurant" size={37} color="#FFF" onPress={function () {
                        alert("Bonjour Bernardin")
                    }} />

                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Le service pack que nous vous proposons</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#908e8c',
                        marginTop: 5,
                        color: "#F39F8D"
                    }}>Profitez d’un service repas dans votre Villa à Maroc !</Text>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ lineHeight: 20, color: '#908e8c' }}>
                            Tout d’abord, nous garantissons la fraîcheur absolue de nos repas. Ainsi, pour votre Villa à Maroc, les courses sont faites chaque jour, voir deux fois par jour en haute saison… De plus, pour une plus grande fraîcheur, nous assurons zéro congélation. Nos cuisinières sont parfaitement formées et réputées pour vous préparer une cuisine Marocaine d’exception
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,

                        }}>Nos formules répas - Villa à Maroc</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,

                        }}></Text>

                    </View>
                    <View style={style.CardStatique}>
                        <Avatar.Text size={60} label="29€" backgroundColor="#8E6F68" />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,
                            justifyContent: "center",

                            width: 225,
                            paddingLeft: 50


                        }}>29€ / jour/personnes</Text>

                        <Title size={20}>DEMI PENSION AVEC BOISSON</Title>



                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,

                            width: 225

                        }}>Petits déjeuners avec déjeuners ou dîners au choix et boissons sans alcool à discrétion toute la journée</Text>

                    </View>

                    <View style={style.CardStatique}>
                        <Avatar.Text size={60} label="48€" backgroundColor="#8E6F68" />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,
                            justifyContent: "center",

                            width: 225,
                            paddingLeft: 50


                        }}>48€ / jour/personnes</Text>

                        <Title size={20}>ALL INCLUSIVE</Title>



                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,

                            width: 225

                        }}>Tous les repas et boissons sans alcool à discrétion toute la journée</Text>

                    </View>

                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: 'black',
                        marginTop: 5,
                        justifyContent: "center",

                        width: 225,
                        paddingLeft: 50


                    }}></Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#908e8c',
                        marginTop: 5,
                        justifyContent: "center",




                    }}>Réduction de 50% sur les repas pour les enfants de moins de 12 ans Réduction de 10% sur les repas si règlement avant votre arrivée</Text>


                </View>
                <View style={{
                    marginTop: 20, flexDirection: 'row', justifyContent: 'space-between',
                    paddingLeft: 20, alignItems: 'center'
                }}>

                    <View style={style.priceTag}>

                        <Text style={{ fontSize: 16, fontWeight: "bold", color: '#8E6F68' }}>
                            Nos repas à la carte
                        </Text>

                    </View>



                </View>

                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>

                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                    </View>

                    <View style={style.CardStatique}>
                        <Avatar.Text size={60} label="24€" backgroundColor="#8E6F68" />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,
                            justifyContent: "center",

                            width: 225,
                            paddingLeft: 50


                        }}>24€ / jour/personnes</Text>

                        <Title size={20}>DÉJEUNER</Title>

                    </View>

                    <View style={style.CardStatique}>
                        <Avatar.Text size={60} label="24€" backgroundColor="#8E6F68" />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'black',
                            marginTop: 5,
                            justifyContent: "center",

                            width: 225,
                            paddingLeft: 50


                        }}>24€/jour/personnes</Text>

                        <Title size={20}>DÎNER</Title>

                    </View>

                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: 'black',
                        marginTop: 5,
                        justifyContent: "center",

                        width: 225,
                        paddingLeft: 50


                    }}></Text>
                    <Text style={{ lineHeight: 20, color: '#908e8c' }}>Les petits déjeuners sont disponibles uniquement avec les formules repas. Réduction de 50% sur les repas pour les enfants de moins de 12 ans. Réduction de 10% sur les repas si règlement avant votre arrivée.</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: 'black',
                        marginTop: 5,
                        justifyContent: "center",



                    }}>Achat et Livraisons d’alcools à Marrakech :</Text>
                    <Text style={{ lineHeight: 20, color: '#908e8c' }}>

                        Pour l’alcool, vous avez la possibilité de rapporter vos bouteilles de votre pays d’origine dans nos villas ou de les acheter sur place à Maroc dans les établissements agréés.

                        Vous pouvez également vous faire livrer à la villa par notre partenaire Des Vignes Aux Vins.
                        .</Text>

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
                    <Text style={{ textAlignVertical: "center", textAlign: "center", color: "#FFF", fontSize: 19, fontWeight: 'bold', height: 55, width: 313 }} onPress={Inscription}>
                        Passer le Commande
                    </Text>

                </View>






            </View>


        </ScrollView>
    )

}

export default Service;