import React from 'react'
import { View, Image, TouchableOpacity, Dimensions, ScrollView, Text } from 'react-native'
import ImageGalerie from '../constants/ImageGalerie'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';
import { RouteParams } from '../navigation/RouteNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Galerie = ({ P1, P2, P3 }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    return (
        <ScrollView>

            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>


                <TouchableOpacity onPress={() => {

                    navigation.navigate("sg", {
                        imagesG: P1,
                    })


                }}>
                    <Image source={P1} style={{
                        height: deviceHeight / 3,
                        width: deviceWidth / 3 - 6,
                        borderRadius: 10,
                        margin: 2
                    }} />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {

                    navigation.navigate("sg", {
                        imagesG: P2,
                    })


                }}>
                    <Image source={P2} style={{
                        height: deviceHeight / 3,
                        width: deviceWidth / 3 - 6,
                        borderRadius: 10,
                        margin: 2
                    }} />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {

                    navigation.navigate("sg", {
                        imagesG: P3,
                    })


                }}>
                    <Image source={P3} style={{
                        height: deviceHeight / 3,
                        width: deviceWidth / 3 - 6,
                        borderRadius: 10,
                        margin: 2
                    }} />
                </TouchableOpacity>




            </View>
        </ScrollView>
    )
}

export default Galerie;