import React from "react";
import { View, StyleSheet, Image, Text, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const style = StyleSheet.create({
    card: {
        height: 120,
        width: 120,
        backgroundColor: '#FFF',
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,

    },
    DecovertImage: {
        height: 80,
        width: '100%',
        borderTopRightRadius: 10,


    }

})

const CardDercouvert = ({ hotel }) => {

    return (

        <View style={style.card}>
            <View style={{ position: 'absolute', top: 5, right: 5, zIndex: 1, flexDirection: 'row' }}>
                <Icon name="star" size={15} color='#f5a623' fontSize />
                <Text style={{ fontSize: 15, fontWeight: "bold", color: '#FFF', }}>
                    5.0
                </Text>

            </View>
            <Image style={style.DecovertImage} source={hotel.image} />
            <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 10, fontWeight: "bold", color: '#908e8c', }}>
                    {hotel.name}
                </Text>
            </View>
        </View>

    )

}

export default CardDercouvert;