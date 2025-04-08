import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default function Onboard({navigation}){
    return(
        <View style={styles.container}>
            <Image style = {styles.image} source={require('C:/Users/Prathyuma/OneDrive/Desktop/TARP-app/assets/onboard.png')}/>
            <View style={styles.textWrapper}>
            <Text style={styles.text}>Forgetful? Not anymore.</Text>
            <Text style={styles.text}>Mediplan notifies you when its time to take medicine</Text>
            </View>
            <View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("TabNav",{screen:'Home'})}>
               <Text style={styles.buttonText}> Get Started! </Text> 
              </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f9f9f1',
        padding: 75
    },
    image:{
        height: 450,
        width: 320,
        alignSelf: 'center',
    },
    textWrapper:{
        marginTop: 50
    },
    text:{
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
    },
    button:{
        backgroundColor:'#f87556',
        marginTop: 30,
        alignItems: "center",
        borderRadius: 50,
        padding: 15
    },
    buttonText:{
        color: '#f9f9f1',
        fontSize: 30
    }
})