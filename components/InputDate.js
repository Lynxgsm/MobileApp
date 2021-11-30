import React, { useState } from "react";
import { Text, Modal, StyleSheet, TouchableHighlight, View, Platform, Button, StatusBar } from "react-native";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker'
const InputDate = () => {

    // const styles = StyleSheet.create({
    //     contenaire: {
    //         flex: 1,

    //         alignItems: 'center',
    //         justifyContent: 'center    '
    //     }

    // })

    const [date, setDate] = useState(new Date);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Vide')


    const onChange = (event, selectDate) => {
        const currentDate = selectDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let templeDate = new Date(currentDate);
        let fDate = templeDate.getDate() + '/' + (templeDate.getMonth() + 1) + '/' + templeDate.getFullYear();
        setText(fDate)

    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }
    const InputDate = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <Text>{text}</Text>
            <Button title='DatePicker' onPress={function () {
                showMode('date')
            }} />

            {show && (<DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
            />)}
            <StatusBar style="auto" />

        </View>
    )

}

export default InputDate