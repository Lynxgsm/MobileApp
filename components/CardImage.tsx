import React from "react";
import { View, Text, ImageEditor, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    contenaire: {
        flex: 1,

    },
    Header: {
        height: '50px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '6px',
        padding: '0 11px'

    },
    Row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        marginTop: '9px',
        width: '90%',
        height: '300px'
    }
})

const CardImage = () => {
    return (
        <View style={styles.contenaire}>
            <Image source={require('../assets/piscine_1.jpg')} />


        </View>
    );
}

export default CardImage;