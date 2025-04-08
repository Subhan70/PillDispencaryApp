import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import MyTabs from "./Top_Nav";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Schedule({navigation}){
    return(
        <View style={styles.container}>
            <MyTabs/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f9f8f0',
        marginTop: 30
    }
})