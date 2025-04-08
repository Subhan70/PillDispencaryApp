import React, { Platform, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';

const type_data = [
    { key: '1', value: 'Blood test' },
    { key: '2', value: 'Sugar test' },
    { key: '3', value: 'ECG' },
]

export default function Tests({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [type_var, setType] = React.useState("");

    const onChangeDate = ({ type }, selectedDate) => {
        setDate(selectedDate);
        setShowDate(false);
    }

    const onChangeTime = ({ type }, selectedDate) => {
        setTime(selectedDate);
        setShowTime(false);
    }


    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Reminder Type</Text>
                    <Text style={styles.optionText}>{type_var}</Text>
                </View>
                <SelectList
                    boxStyles={{ borderRadius: 20 }}
                    dropdownStyles={{ backgroundColor: '#d9d8d8' }}
                    inputStyles={{ color: '#f87556' }}
                    search={false}
                    setSelected={(val) => setType(val)}
                    data={type_data}
                    save="value"
                />
            </View>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Select Date</Text>
                    <Text style={styles.optionText}>{date.toLocaleDateString()}</Text>
                </View>

                <TouchableOpacity style={[styles.button,{marginTop: 10}]} onPress={() => { setShowDate(true) }}>
                    <Text style={[styles.buttonText,{padding: 10, fontSize: 15}]}>Open Calendar</Text>
                </TouchableOpacity>
                {showDate && <DateTimePicker
                    mode="date"
                    display="calendar"
                    is24Hour={true}
                    value={date}
                    onChange={onChangeDate}
                    minimumDate={new Date()}
                />}
            </View>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Select Time</Text>
                    <Text style={styles.optionText}>{time.toLocaleTimeString()}</Text>
                </View>

                <TouchableOpacity style={[styles.button,{marginTop: 10}]} onPress={() => { setShowTime(true) }}>
                    <Text style={[styles.buttonText,{padding: 10, fontSize: 15}]}>Open Clock</Text>
                </TouchableOpacity>
                {showTime && <DateTimePicker
                    mode="time"
                    display="clock"
                    is24Hour={true}
                    value={time}
                    onChange={onChangeTime}
                    minimumDate={new Date()}
                />}
            </View>

            <TouchableOpacity onPress={() => { console.log('Added ' + type_var + ' on ' + date.toLocaleDateString() + ' at ' + time.toLocaleTimeString()) }} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

        </View>
    );

                }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f8f0',
        padding: 30,
        alignContent: 'center'
    },
    textWrapper: {
        marginBottom: 20
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    button: {
        backgroundColor: '#f87556',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#f9f8f0',
        padding: 15,
        fontSize: 20,
        paddingHorizontal: 50
    }
})