import { getAuth, signOut } from 'firebase/auth';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {

    const navigation = useNavigation()
    

    const handleRandomFoodSuggest = () => {
        navigation.navigate("Random Food")
    }

    return (
        <View style = {styles.container}>
            
            <TouchableOpacity
                    onPress={handleRandomFoodSuggest}
                    style={styles.button}
                >
                    <Text style = {styles.buttonText}>
                        Ne Yesem?
                    </Text>

                </TouchableOpacity>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'blue',
        width:'60%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:40,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'blue',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },

})