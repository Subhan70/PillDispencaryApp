import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';

const type_data = [
    { key: '1', value: 'Walking' },
    { key: '2', value: 'Water' },
    { key: '3', value: 'Screen Time Break' },
    { key: '4', value: 'Yoga' },
    { key: '5', value: 'Bed Time' },
]

const freq_data = [
    { key: '1', value: 'Every 30 mins' },
    { key: '2', value: 'Every 1 hour' },
    { key: '3', value: 'Every 2 hours' },
    { key: '4', value: 'Daily'}
]
export default function SelfCare({ navigation }) {

    const [type_var, setType] = React.useState("");
    const [when_var,setWhen] = React.useState(new Date());
    const [freq_var,setFreq] = React.useState("");
    const [showTime, setShowTime] = useState(false);
    const onChangeTime = ({ type }, selectedDate) => {
        setWhen(selectedDate);
        setShowTime(false);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'column',margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Reminder Type</Text>
                    <Text style={styles.optionText}>{type_var}</Text>
                </View>
                <SelectList
                    boxStyles={{borderRadius:20}}
                    dropdownStyles={{backgroundColor:'#d9d8d8'}}
                    inputStyles={{color:'#f87556'}}
                    search={false} 
                    setSelected={(val) => setType(val)}
                    data={type_data}
                    save="value"
                />
            </View>

            <View style={{ flexDirection: 'column', margin: 20 }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>When to Remind</Text>
                    <Text style={styles.optionText}>{when_var.toLocaleTimeString()}</Text>
                </View>

                <TouchableOpacity style={[styles.button,{marginTop: 10}]} onPress={() => { setShowTime(true) }}>
                    <Text style={[styles.buttonText,{padding: 10, fontSize: 15}]}>Open Clock</Text>
                </TouchableOpacity>
                {showTime && <DateTimePicker
                    mode="time"
                    display="clock"
                    is24Hour={true}
                    value={when_var}
                    onChange={onChangeTime}
                    minimumDate={new Date()}
                />}
            </View>

            <View style={{ flexDirection: 'column',margin: 20  }}>
                <View style={styles.textWrapper}>
                    <Text style={styles.topText}>Frequency</Text>
                    <Text style={styles.optionText}>{freq_var}</Text>
                </View>
                <SelectList
                    boxStyles={{borderRadius:20}}
                    dropdownStyles={{backgroundColor:'#d9d8d8'}}
                    inputStyles={{color:'#f87556'}}
                    search={false} 
                    setSelected={(val) => setFreq(val)}
                    data={freq_data}
                    save="value"
                />
            </View>

            <TouchableOpacity onPress={()=>{console.log('Added '+type_var+' Reminder at '+when_var.toLocaleTimeString()+ ' during '+freq_var)}}style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f8f0',
        padding: 30,
        alignContent: 'center'
    },
    textWrapper:{
        marginBottom: 20
    },
    topText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    optionText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    button:{
        backgroundColor: '#f87556',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 50
    },
    buttonText:{
        color: '#f9f8f0',
        padding: 15,
        fontSize: 20,
        paddingHorizontal: 50
    }
})