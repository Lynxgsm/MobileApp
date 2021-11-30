
import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import CardList from '../components/CardList';
import { useNavigation } from '@react-navigation/native';
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


const Excursions = () => {

    const navigation = useNavigation()

    const Inscription = () => {
        navigation.navigate("Inscription")

    }



    return (
        <ScrollView
            showsVerticalScrollIndicator={false}

            contentContainerStyle={{ backgroundColor: "#FFF", paddingBottom: 20 }}>

            <View>

                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Excursions Find Your Concierge</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',

                        marginTop: 5,
                        color: "#F39F8D"
                    }}>Découvrez tous les secrets de Marrakech avec Rachid, le meilleur guide de la ville.</Text>
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
                            Rachid est GNO (Guide National Officiel) et il est simplement exceptionnel ! Son CV nous a impressionné dès le début de notre relation. Ainsi, aujourd’hui ce sont les commentaires de nos clients qui nous impressionnent chaque jour. De plus, les excursions Find Your Concierge tiennent à vous présenter un guide passionné par son pays, par les marocains, et aussi passionné de botanique… Et il peut vous parler pendant des heures des vertus de la figue de barbarie ou de la nécessité de manger des grenades en automne !
                        </Text>
                        <Text style={{ lineHeight: 20, color: '#908e8c' }}>
                        </Text>
                        <Text style={{ lineHeight: 20, color: '#908e8c' }}>
                            Même si vous pensez bien connaître Marrakech et/ou le Maroc, passez un moment avec Rachid. Jamais vous ne regretterez et ce sera même un grand souvenir pour vous. De ce fait, les excursions Find Your Concierge vont vous faire découvrir les moindres recoins de Marrakech. Rachid va encore plus loin, depuis 2016 : il est le seul guide de Marrakech capable de dialoguer avec le langage des signes pour les sourds et malentendants. Sans doute a-t-il pensé recevoir la famille Bélier !
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',

                            marginTop: 5,
                            color: "#F39F8D"
                        }}>Vous ne savez pas quelle excursion choisir ? Choisissez-les toutes !</Text>

                    </View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#908e8c',
                        marginTop: 5,

                    }}>La formule « COMBO » rassemble les éléments clés de chaque excursion. C’est la formule idéale pour une première découverte de Marrakech…</Text>



                </View>






            </View>

            <View style={style.card}>


                <Image style={style.DecovertImage} source={require('../assets/atlas_10.jpg')} />

                <View>
                    <Text style={{ fontSize: 20.5, fontWeight: "700", color: 'black', marginTop: 0 }}>
                        Atlas Marrakech
                    </Text>

                    <Text style={{ fontSize: 14, fontWeight: "bold", color: '#908e8c', justifyContent: 'center', width: 200 }}>
                        Les plus belles excursions des vallées de l’Atlas A quelques heures de route de Marrakec
                    </Text>
                </View>
            </View>

            <View style={style.card}>


                <Image style={style.DecovertImage} source={require('../assets/botanique.jpg')} />

                <View>
                    <Text style={{ fontSize: 20.5, fontWeight: "700", color: 'black', marginTop: 0 }}>
                        Marrakech Botanique
                    </Text>

                    <Text style={{ fontSize: 14, fontWeight: "bold", color: '#908e8c', justifyContent: 'center', width: 200 }}>
                        Venez profiter de la verdure avec Excursion Marrakech Botanique !
                    </Text>
                </View>
            </View>

            <View style={style.card}>


                <Image style={style.DecovertImage} source={require('../assets/souks.jpg')} />

                <View>
                    <Text style={{ fontSize: 20.5, fontWeight: "700", color: 'black', marginTop: 0 }}>
                        Marrakech Souks
                    </Text>

                    <Text style={{ fontSize: 14, fontWeight: "bold", color: '#908e8c', justifyContent: 'center', width: 200 }}>
                        Profitez de l’Excursion Souk Marrakech !
                    </Text>
                </View>
            </View>





        </ScrollView>
    )

}

export default Excursions;