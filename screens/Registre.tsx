import React, { useState } from "react";
import { View, Text, ScrollView, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from "../navigation/RouteNavigation";
import { RouteProp, useRoute } from '@react-navigation/native';

import moment from 'moment'
import axios from 'axios'
const style = StyleSheet.create({
    imageBack: {
        height: Dimensions.get('window').height / 2.5
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: "#ffffff",
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    form: {
        marginTop: 15,

    },
    container: {
        height: 42,
        width: "92%",
        borderRadius: 25,
        marginTop: 20
    },
    textInput: {
        marginTop: 0,
        width: "100%",
        borderColor: "#0B3270",
        borderWidth: 1,
        paddingLeft: 15
    },
    btn: {
        height: 42,
        width: "92%",
        borderRadius: 25,
        marginTop: 20,
        borderColor: "black",
        backgroundColor: '#F39F8D',
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff"
    },
    textError: {
        fontStyle: 'italic', color: 'red', marginEnd: 15, flex: 1, alignItems: 'center', justifyContent: 'center'

    }

})
const Registre = () => {
    const [text2, setText2] = React.useState('Date de retour');
    const [date, setDate] = useState(new Date);
    const [date2, setDate2] = useState(new Date);
    const [mode, setMode] = useState('date');
    const [mode2, setMode2] = useState('date');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [text, setText] = useState('Date de depart')
    const [nom, setNom] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [adulte, setAdulte] = useState('')
    const [enfant, setEnfant] = useState('')
    const [error, setError] = useState('ko')
    const [navigationState, setNavigationState] = useState('ko')
    const [demande, setDemande] = useState('')
    const Insert = () => {
        setDemande(route.params?.demande)
        axios.post("https://mobileappmarrakech.herokuapp.com/insertion", {
            date_d: text, date_r: text2, nom: nom,
            phone: phone, email: email, adulte: adulte, enfant: enfant,
            d: demande,


        }).then((reponse) => {
            const NonAutorise = reponse.data.message;

            setError(NonAutorise)
            if (NonAutorise == "ok") {
                setNavigationState(NonAutorise);
            }


            if (NonAutorise) {
                setReponse(NonAutorise);
            }
            else {
                if (reponse.data[0].compte == '2') {
                    history.push("/dashboard/overview")
                }
                else {
                    history.push("/dashboard/overview")
                }
            }
        })
    }


    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const route = useRoute<RouteProp<RouteParams>>();
    // 

    const onChange = (event, selectDate) => {



        const currentDate = selectDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let templeDate = new Date(currentDate);
        let fDate = templeDate.getDate() + '/' + (templeDate.getMonth() + 1) + '/' + templeDate.getFullYear();
        setText(fDate)

    }
    const onChange2 = (event, selectDate) => {
        const currentDate = selectDate || date;
        setShow2(Platform.OS === 'ios');
        setDate2(currentDate);

        let templeDate = new Date(currentDate);
        let fDate = templeDate.getDate() + '/' + (templeDate.getMonth() + 1) + '/' + templeDate.getFullYear();
        setText2(fDate)

    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }
    const showMode2 = (currentMode) => {
        setShow2(true);
        setMode2(currentMode)
    }
    const InputDate = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }


    return (
        <ScrollView style={{ backgroundColor: "#ffffff" }}
            showsVerticalScrollIndicator={false}

        >
            <ImageBackground style={style.imageBack} source={require('../assets/logo.png')}>

            </ImageBackground>

            {navigationState == "ko" ?

                <>

                    <View style={style.bottomView}>

                        <View style={{ padding: 40 }}>
                            <Text style={{ color: '#F39F8D', fontSize: 28 }}>
                                Une question, une disponibilité ?


                            </Text>
                            <Text style={{ fontStyle: 'italic', color: '#908e8c' }}>
                                Vous souhaitez séjourner en famille à Marrakech ?
                            </Text>

                            <View style={style.form}>

                                {/* <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} /> */}

                                <View style={style.container}>
                                    <TextInput style={{ ...style.container, ...style.textInput }} placeholder='Nom et Prénom' onChangeText={function (e) {
                                        setNom(e)
                                    }} />



                                </View>
                                {error == "Enom" ?
                                    <Text style={style.textError}>
                                        Veuiller saisir le Nom et Prénom S.V.P
                                    </Text>
                                    : null}
                                <View style={style.container}>
                                    <TextInput
                                        onChangeText={function (e) {
                                            setPhone(e)
                                        }}
                                        keyboardType='numeric'
                                        style={{ ...style.container, ...style.textInput }} placeholder='Numéro télephone' />

                                </View>
                                {error == "Ephone" ?
                                    <Text style={style.textError}>
                                        Veuiller saisir le Bonne numéro télephone .
                                    </Text>
                                    : null}
                                <View style={style.container}>

                                    <TextInput
                                        onChangeText={function (e) {
                                            setEmail(e)
                                        }}
                                        keyboardType='email-address'
                                        style={{ ...style.container, ...style.textInput }} placeholder='Email' />

                                </View>
                                {error == "Email1" || error == "Email2" ?
                                    <Text style={style.textError}>
                                        Veuiller saisir le Bon émail SVP .
                                    </Text>
                                    : null}



                                <View style={style.container}>
                                    <TextInput
                                        onChangeText={function (e) {
                                            setAdulte(e)
                                        }}
                                        keyboardType='numeric'
                                        style={{ ...style.container, ...style.textInput }} placeholder="Nombre d'adultes" />

                                </View>

                                {error == "Eadulte" ?
                                    <Text style={style.textError}>
                                        Veuiller saisir les nombre des Adultes .
                                    </Text>
                                    : null}
                                <View style={style.container}>
                                    <TextInput
                                        onChangeText={function (e) {
                                            setEnfant(e)
                                        }}
                                        keyboardType='numeric'
                                        style={{ ...style.container, ...style.textInput }} placeholder='Nombre des enfants moins -12 ans' />

                                </View>

                                {error == "Eenfant" ?
                                    <Text style={style.textError}>
                                        Veuiller saisir les nombre des enfants .
                                    </Text>
                                    : null}



                                <View style={style.container}>

                                    <Button icon="calendar" mode="Outlined" style={{ ...style.container, ...style.textInput }} color='black'

                                        onPress={() => showMode('date')}

                                    >
                                        {text}
                                    </Button>
                                </View>

                                {error == "Edepart" ?
                                    <Text style={style.textError}>
                                        Veuiller selectionner le Date de départ .
                                    </Text>
                                    : null}



                                <View style={style.container}>

                                    <Button icon="calendar" mode="Outlined" style={{ ...style.container, ...style.textInput }} color='black'

                                        onPress={() => showMode2('date')}

                                    >
                                        {text2}
                                    </Button>
                                </View>

                                {error == "Eretour" ?
                                    <Text style={style.textError}>
                                        Veuiller selectionner le Date de retour .
                                    </Text>
                                    : null}


                                {/* <TouchableOpacity style={{ ...style.btn, }} onPress={function () {
                            showMode('date')
                        }}>
                            <Text style={style.text}></Text>
                        </TouchableOpacity> */}


                                {show && (<DateTimePicker
                                    testID='dateTimePicker'
                                    value={date}
                                    mode={mode}
                                    is24Hour={false}
                                    display='default'
                                    onChange={onChange}
                                />)}




                                {show2 && (<DateTimePicker
                                    testID='dateTimePicker'
                                    value={date2}
                                    mode={mode}
                                    is24Hour={false}
                                    display='default'
                                    onChange={onChange2}
                                />)}

                                {/* <Btn onClick={() => Login()} title="Login" style={{ width: "48%" }} /> */}


                            </View>



                        </View>

                        <View style={{
                            height: 55,
                            justifyContent: 'center',
                            alignItems: 'center',

                            backgroundColor: "#F39F9D",
                            marginHorizontal: 20,
                            borderRadius: 10,

                        }}>
                            <Text style={{ textAlignVertical: "center", textAlign: "center", color: "#FFF", fontSize: 19, height: 55, width: 313 }} onPress={Insert}>
                                Envoyer ma démande
                            </Text>

                        </View>

                    </View>
                </>
                :

                <>

                    <View style={style.bottomView}>

                        <View style={{ padding: 40 }}>
                            <Text style={{ color: '#F39F8D', fontSize: 28 }}>
                                Mercie {nom} pour votre visite.

                            </Text>
                            <Text style={{ fontStyle: 'italic', color: '#908e8c' }}>
                                Notre équipe va essayer de vous contacter le plus vite possible.
                            </Text>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>

                                <Avatar.Icon size={24} icon="phone" style={{ backgroundColor: '#F39F8D', marginRight: 12 }} />

                                <Text style={{ color: 'black', fontSize: 14 }}>
                                    +212 670 670 456
                                </Text>


                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>

                                <Avatar.Icon size={24} icon="mailbox" style={{ backgroundColor: '#F39F8D', marginRight: 12 }} />

                                <Text style={{ color: 'black', fontSize: 14 }}>
                                    contact@findyourconcierge.com
                                </Text>


                            </View>

                        </View>


                        <View style={{
                            height: 55,
                            justifyContent: 'center',
                            alignItems: 'center',

                            backgroundColor: "#F39F9D",
                            marginHorizontal: 20,
                            borderRadius: 10,

                        }}>
                            <Text style={{ textAlignVertical: "center", textAlign: "center", color: "#FFF", fontSize: 19, height: 55, width: 313 }} onPress={function () {
                                navigation.navigate("Home", {
                                    id: "0",

                                });

                            }}>
                                Retout à la page d'acceuil
                            </Text>

                        </View>

                    </View>
                </>


            }


            <StatusBar style="auto" />
        </ScrollView >
    )
}

export default Registre