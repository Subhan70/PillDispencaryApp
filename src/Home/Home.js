import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DATA from '../data/details.json';
import Pills from "./Pills_List";

const item = DATA[0];

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.mainImg} source={require('../../assets/family.jpeg')} />
            </View>
            <View style={styles.topWrapper}>
                <TouchableOpacity onPress={(() => navigation.navigate("Profile"))}>
                    <Image style={styles.cornerImg} source={require('../../assets/profilepic.jpeg')} />
                </TouchableOpacity>
                <View style={styles.text}>
                <Text style={styles.welcomeText}>
                    Hi, {item.Name}
                </Text>
                <Text style={styles.smallText}>Today you take {item.total_pills} pills</Text>
                </View>
            </View>
            <Pills />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f8f0',
        marginTop: 30
    },
    cornerImg: {
        marginTop: 30,
        height: 50,
        width: 50,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black',
        alignSelf: 'flex-end'
    },
    mainImg: {
        width: 400,
        height: 350,
        position: 'absolute',
        zIndex: -2
    },
    welcomeText: {
        fontSize: 30,
        paddingTop: 20,
    },
    text:{
        paddingLeft: 15
    },
    smallText: {
        fontSize: 18,
    },
    topWrapper: {
        paddingLeft: 30,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        marginTop: 270,
        backgroundColor: '#f9f8f0',
        flexDirection: 'row',
    }
})