import React from "react";
import {View,Text,FlatList,StyleSheet} from 'react-native';
import { FontAwesome5,Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';
import DATA from '../data/details.json';

const item = DATA[0];

const Item = ({title,time,dose}) => (
    <View style={styles.item}>
    <View style={{flexDirection: 'row'}}>
    <MaterialCommunityIcons style={{alignSelf: 'center'}}name="pill" size={30} color="black" />
    <View style={styles.details}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{dose} pills today</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row'}}>
        <FontAwesome5 name="clock" size={15} color="black" />
        <Text style={styles.subtitle}>{time}</Text>
    </View>
    </View>
  );

export default function Pills(){
    return(
        <View style={styles.container} >
        <FlatList
        data={item.pill_details}
        renderItem={({item}) => <Item title={item.name}
                                      time={item.time}
                                      dose ={item.dosage}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={{
            flexGrow: 1,
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: 10,
      backgroundColor: '#f9f8f0'
    },
    item: {
      backgroundColor: '#e6f6f8',
      padding: 30,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 50,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 20,
    },
    subtitle:{
        fontSize: 15,
        paddingLeft: 5
    },
    details:{
        marginLeft: 10,
        alignSelf: 'center'
    }
  });
