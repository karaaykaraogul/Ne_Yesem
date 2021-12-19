import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
        navigation.replace('Login')
    })
}

const Settings = () => {
    const auth = getAuth();
    return (
        <View style = {styles.container}>
            <Text>
                Email: {auth.currentUser?.email}
            </Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style = {styles.buttonText}>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings

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