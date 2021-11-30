import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
const { width } = Dimensions.get("screen")
const cardWitdh = width / 1.8
import { useNavigation } from '@react-navigation/native';
import { RouteParams } from '../navigation/RouteNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    card: {
        height: 310,
        width: cardWitdh,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    cardImage: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',

    },
    priceTage: {
        height: 40,
        width: 125,
        backgroundColor: '#F39F8D',
        position: "absolute",
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',


    },
    cardDetails: {
        height: 100,
        borderRadius: 15,
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: "100%",

    },
    cardDetails2: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 17,

    },
    cardTextLocation: {
        color: '#908e8c',
        fontSize: 13,


    },
    apropos: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    },
    grade: {
        flexDirection: "row",

    },
    textGray: {
        fontSize: 8,
        color: '#908e8c',
    },
    cardOverLay: {
        height: 280,
        backgroundColor: '#FFF',
        position: "absolute",
        zIndex: 100,
        width: cardWitdh,
        borderRadius: 15,

    }

})

const Cards = ({ hotel, index, SX, nav, AC }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    const Information = () => {
        navigation.navigate("Details", {
            titre: hotel.name,
            description: hotel.description,
            image: hotel.image,
            categorie: hotel.titre,
            PS1: hotel.Ps1,
            PS2: hotel.Ps2,
            PS3: hotel.Ps3,
            Espace: hotel.escape,
            Largeur: hotel.largeur
        })

    }

    const inputRange = [
        (index - 1) * cardWitdh,
        index * cardWitdh,
        (index + 1) * cardWitdh,
    ];
    const opacity = SX.interpolate({
        inputRange,
        outputRange: [0.7, 0, 0.7],
    });
    const scale = SX.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
    });


    return (
        <TouchableOpacity
            activeOpacity={1}
            disabled={AC != index}
            onPress={Information}
        >
            <Animated.View style={{ ...styles.card, transform: [{ scale }] }}>
                <Animated.View style={{ ...styles.cardOverLay, opacity }} />
                <View style={styles.priceTage}>
                    <Text style={styles.text}>
                        {hotel.titre}
                    </Text>
                </View>
                <Image source={hotel.image} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                    <View style={styles.cardDetails2} >
                        <View >

                            <Text style={styles.cardText}>
                                {hotel.name}
                            </Text>
                            <Text style={styles.cardTextLocation}>
                                {hotel.description}
                            </Text>
                        </View>
                        <Icon name="bookmark-border" size={26} color='#F39F8D' />

                    </View>
                    {/* <View style={styles.apropos}>
                        
                        <View style={styles.grade}>
                            <Icon name="star" size={15} color='#f5a623' />

                        </View>
                        <Text style={styles.textGray}> {hotel.nombre}</Text>

                    </View> */}

                </View>
            </Animated.View>
        </TouchableOpacity>

    );




}

export default Cards;