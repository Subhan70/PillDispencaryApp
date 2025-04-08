import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';
import Slider from '@react-native-community/slider';

const type_data = [
    { key: '1', value: 'Daily' },
    { key: '2', value: '2 days once' },
    { key: '3', value: '3 days once' },
]

export default function Tablets({ navigation }) {

    const [type_var, setType] = React.useState("");
    const [dose, setDosage] = useState(0);
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const [tab, setTab] = useState('');

    const onChangeTime = ({ type }, selectedDate) => {
        setTime(selectedDate);
        setShowTime(false);
    }

    return (
        <ScrollView style={styles.container}>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Tablet Name</Text>
                    {/* <Text style={styles.optionText}>{type_var}</Text> */}
                </View>
                <TextInput
                    onChangeText={(val) => setTab(val)}
                    value={tab}
                    placeholder="Enter..."
                    keyboardType="default"
                    style={styles.inputtext}
                />
            </View>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>When to Remind</Text>
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
                    <Text style={styles.topText}>Dosage</Text>
                    <Text style={styles.optionText}>{dose}</Text>
                </View>
                <Slider
                    style={{ width: 200, height: 40, alignSelf: 'center' }}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    minimumTrackTintColor='#f87556'
                    maximumTrackTintColor='#d9d8d8'
                    onValueChange={(val) => setDosage(val)}
                />
            </View>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Select Time</Text>
                    <Text style={styles.optionText}>{time.toLocaleTimeString()}</Text>
                </View>

                <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={() => { setShowTime(true) }}>
                    <Text style={[styles.buttonText, { padding: 10, fontSize: 15 }]}>Open Clock</Text>
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

            <TouchableOpacity onPress={() => { console.log('Added ' + type_var + ' of ' + tab + dose + ' tablets at ' + time.toLocaleTimeString()) }} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f8f0',
        padding: 20,
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
        marginTop: 15,
        margin: 5
    },
    buttonText: {
        color: '#f9f8f0',
        padding: 10,
        fontSize: 20,
        paddingHorizontal: 50
    },
    inputtext: 
    { 
    color: '#f87556', 
    padding: 8, 
    borderRadius: 20, 
    borderColor: 'black', 
    borderWidth: 1,
paddingHorizontal: 20}
})