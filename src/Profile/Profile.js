import {useState} from 'react';
import { View, TouchableOpacity,ScrollView, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import List from "./List_Comp";
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import exampleImage from "C:/Users/Prathyuma/OneDrive/Desktop/TARP-app/assets/profilepic.jpeg";

export default function Profile({ navigation }) {

    const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;
    
    const [image, setImage] = useState(exampleImageUri);

    const changeImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
        if (result) {
          setImage(result.assets[0].uri);
          console.log("Image has been changed");
        }
      };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
            {image && <Image source={{ uri: image }} style={styles.profile} />}
                <TouchableOpacity onPress={changeImage} style={{alignSelf: 'flex-end',marginBottom: 10}}>
                        <FontAwesome name="edit" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.detailsWrapper}>
                <List />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f7f9',
        padding: 5
    },
    detailsWrapper: {
        backgroundColor: '#f9f9f1',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 20
    },
    profile: {
        paddingTop: 50,
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: 'black',
        backgroundColor: '#41373b',
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 10
    }
});