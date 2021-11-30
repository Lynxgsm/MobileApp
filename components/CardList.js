import React from "react";
import { View, StyleSheet, Image, Text, } from "react-native";

const style = StyleSheet.create({
    card: {

        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: "#FFF",
        elevation: 15,
        borderRadius: 12,


    },
    DecovertImage: {
        height: 120,
        width: 120,
        marginRight: 10,
        borderRadius: 15,



    }

})

const CardList = ({ image, titre, soustitre, paragraphe, couleur }) => {

    return (

        <>

            <View style={style.card} onPress={function () {
                alert('ok')
            }}>


                <Image style={style.DecovertImage} source={image} />

                <View>
                    <Text style={{ fontSize: 22, fontWeight: "700", color: 'black', marginTop: 0 }}>
                        {titre}
                    </Text>

                    <Text style={{ fontSize: 14, fontWeight: "bold", color: '#F39F8D', justifyContent: 'center', width: 200 }}>
                        {soustitre}
                    </Text>
                    <Text style={{ fontSize: 9, fontWeight: "bold", color: '#908e8c', alignContent: 'center', justifyContent: 'center', width: 200 }}>
                        {paragraphe}
                    </Text>
                </View>
            </View>


        </>

    )

}

export default CardList;