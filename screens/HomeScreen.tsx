
import React from 'react';
import {
    StyleSheet,
    SafeAreaView, Text, View, FlatList, Animated, Dimensions,
    StatusBar, ScrollView
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Villa from '../constants/Villa';
import Decouvert from '../constants/Decouvert';
import Cards from '../components/Cards';
import CardDercouvert from '../components/CardDercouvert';
import { RouteParams } from '../navigation/RouteNavigation';

import { Avatar, Title, } from 'react-native-paper';

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
    homeTitre: {


        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        position: 'relative',
        alignSelf: 'stretch',
        fontSize: 15,
        fontWeight: "bold",
        color: "#D0A59B"

    }


})



export default function HomeScreen({ navigation }) {
    const scrollX = React.useRef(new Animated.Value(1)).current;
    const route = useRoute<RouteProp<RouteParams>>();
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    return (
        <>
            {/* {console.log(route.params?.id)} */}
            <StatusBar
                backgroundColor='#FFFFFF'
                barStyle='dark-content'

            />
            <SafeAreaView style={{ flex: 1 }}>
                {/*Debut de bar*/}
                <SafeAreaView style={styles.safe}>


                    <ScrollView showsVerticalScrollIndicator={false}>


                        <View style={{ marginTop: 15 }}>


                            <>

                                <View>
                                    <Text style={styles.homeTitre}>DÉCOUVREZ TOUTES NOS LOCATIONS DE VILLAS </Text>
                                    <Animated.FlatList
                                        onMomentumScrollEnd={(e) => {
                                            setActiveCardIndex(Math.round((e.nativeEvent.contentOffset.x) / cardWitdh));
                                        }}
                                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true },

                                        )}
                                        horizontal
                                        data={Villa}
                                        contentContainerStyle={{
                                            paddingVertical: 30, paddingLeft: 20,
                                            paddingRight: cardWitdh / 2 - 40,

                                        }}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item, index }) => <Cards hotel={item} AC={activeCardIndex} index={index} SX={scrollX} nav={navigation} />}
                                        snapToInterval={cardWitdh}

                                    />

                                </View>
                                <View style={styles.CardStatique}>

                                    <Avatar.Icon size={70} icon="home" backgroundColor='#F39F8D' />
                                    <Title>Nos villas </Title>

                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center', paddingLeft: 15,
                                        paddingRight: 15

                                    }}>
                                        <Text style={{ lineHeight: 20, color: '#908e8c' }}>
                                            Nos villas sont parfaitement entretenues et sécurisées à 100%. Elles sont confortables, testées et vérifiées par nos équipes sur-place. Notre accueil, dans votre Villa exclusive est assuré par votre Gouvernante, qui passera tout ce séjour avec vous. Elle est aussi votre lien avec votre concierge. Omar vous rencontre dès votre arrivée. Il est votre interlocuteur pour organiser vos excursions et autres massages à domicile, ou tout simplement pour vérifier que tout est parfait !
                                        </Text>
                                    </View>


                                </View>
                                <View style={styles.hombre}>
                                    <Text style={{ fontWeight: 'bold', color: '#908e8c', }}>Découvrir </Text>

                                </View>
                                <FlatList
                                    data={Decouvert}

                                    horizontal showsVerticalScrollIndicator={false} contentContainerStyle={{

                                        paddingLeft: 20, marginTop: 20, paddingBottom: 30,
                                    }}

                                    renderItem={({ item }) => <CardDercouvert hotel={item} />}
                                />
                            </>


                        </View>




                    </ScrollView>


                </SafeAreaView >
            </SafeAreaView>

        </>

    );
}

