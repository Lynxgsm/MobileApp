import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RouteParams } from '../navigation/RouteNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10
    },
    categoryListText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    backText: {
        height: 3,
        width: 30,
        backgroundColor: '#F39F8D',
        marginTop: 2
    }
})
let n;

const Categorie = () => {

    const categories = ['Villa', 'Type de Séjour', 'Service', 'Excursion'];

    const [selectedCategorie, setSelectedCategorie] = useState(0)
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();


    return (
        <View style={styles.categories}>
            {categories.map((item, index) => (

                <TouchableOpacity key={index} activeOpacity={0.8}

                    onPress={function () {
                        setSelectedCategorie(index)
                        navigation.navigate("Home", {
                            id: index.toString(),

                        });


                    }}

                >
                    <View>
                        <Text style={{
                            ...styles.categoryListText,
                            color: selectedCategorie == index ? '#F39F8D' : '#908e8c',


                        }}


                        >{item}</Text>
                        {selectedCategorie == index && (
                            <View style={styles.backText}>

                            </View>

                        )}


                    </View>

                </TouchableOpacity>

            ))}
        </View>

    )

}

export default Categorie;

