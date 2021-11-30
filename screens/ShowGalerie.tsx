import React from 'react'
import { View, ImageBackground, Dimensions, Text, Image } from 'react-native'
import { RouteParams } from '../navigation/RouteNavigation'
import { RouteProp, useRoute } from '@react-navigation/native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ShowGalerie = () => {
    const route = useRoute<RouteProp<RouteParams>>();
    const val = route.params?.imagesG

    return (

        <View>

            {/* <Text>{route.params?.imagesG}</Text> */}

            {/* <Image source={require({ route.params?.imagesG })} /> */}
            <ImageBackground source={val} style={{
                height: deviceHeight, width: deviceWidth

            }} />

        </View>

    )
}

export default ShowGalerie;