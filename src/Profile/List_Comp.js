import React, { useState } from 'react';
import DATA from '../data/details.json';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const item = DATA[0];

export default function List({ }) {
    const [gender, setGender] = useState();
    
    const bg = gender === '' ? '#6e3b6e' : '#f9c2ff';
    const inside = gender === '' ? 'white' : 'black';

    return (
        <View>
            <View style={styles.item}>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.input}
                    keyboardType="default"
                    onChangeText={newText => console.log(newText)}>
                    {item.Name}</TextInput>
                <View style={styles.line} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Age</Text>
                <TextInput style={styles.input}
                    keyboardType="numeric"
                    onChangeText={newText => console.log(newText)}>
                    {item.Age}</TextInput>
                <View style={styles.line} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Gender</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={()=>setGender('Male')} style={styles.icon}>
                        <Text style={{ borderRadius: 20, padding: 5, backgroundColor: {bg}, color: {inside} }}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setGender('Female')} style={styles.icon}>
                        <Text style={{ borderRadius: 20, padding: 5, backgroundColor: {bg}, color: {inside} }}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setGender('Others')} style={styles.icon}>
                        <Text style={{ borderRadius: 20, padding: 5, backgroundColor: {bg}, color: {inside}}}>Other</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Height</Text>
                <View>
                    <View style={{ flexDirection: "row"}}>
                        <TextInput style={styles.detailedinput}
                            keyboardType="numeric"
                            onChangeText={newText => console.log(newText)}>
                            {item.height.value}</TextInput>
                        <Text style={{ paddingTop: 10 }}>cm</Text>
                    </View>
                    <View style={{ flexDirection: "row"}}>
                        <Text style={{ paddingTop: 10 }}> Last updated on: </Text>
                        <Text style={{ paddingTop: 10 }}>{item.height.updated}</Text>
                    </View>
                </View>
                <View style={styles.line} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Weight</Text>
                <View>
                    <View style={{ flexDirection: "row"}}>
                        <TextInput style={styles.detailedinput}
                            keyboardType="numeric"
                            onChangeText={newText => console.log(newText)}>
                            {item.weight.value}</TextInput>
                        <Text style={{ paddingTop: 10 }}>kg</Text>
                    </View>
                    <View style={{ flexDirection: "row"}}>
                        <Text style={{ paddingTop: 10 }}> Last updated on: </Text>
                        <Text style={{ paddingTop: 10 }}>{item.weight.updated}</Text>
                    </View>
                </View>
                <View style={styles.line} />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        paddingTop: 5
    },
    line: {
        backgroundColor: '#e8e9e1',
        paddingVertical: 2
    },
    list: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    item: {
        padding: 10
    },
    icon: {
        padding: 5,
    },
    detailedinput: {
        fontSize: 18,
        paddingTop: 5,
        paddingRight: 10
    }
});