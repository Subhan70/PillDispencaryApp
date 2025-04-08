import React from "react";
import { View, Text, TouchableOpacity, FlatList,StyleSheet, Image } from 'react-native';

const items = [
    {
        id: 1,
        name: 'Soandso'
    },
    {
        id: 2,
        name: 'Venkatesan'
    }
]

const Item = ({ title }) => (
    <View style={styles.wrapper}>
    <TouchableOpacity style={styles.item}>
        <Image style={styles.profilePic} source={require('../../assets/picone.jpeg')} />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity></View>
);


export default function MultiProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Profiles</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => <Item title={item.name}/>}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    heading: {
        fontSize: 40,
        alignSelf: 'center',
        paddingTop: 50
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#f87556',
        borderRadius: 50,
        margin: 20
    },
    buttonText: {
        color: 'white',
        padding: 20,
    },
    profilePic:{
        height: 150,
        width: 150,
        borderRadius: 100
    },
    title:{
        fontSize: 20,
        textAlign: 'center'
    },
    wrapper:{
        alignSelf: 'center',
        margin:20
    }
})
