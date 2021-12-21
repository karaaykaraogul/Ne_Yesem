import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, getFirestore, onSnapshot, QuerySnapshot,query } from "firebase/firestore";
import { Dimensions, ListViewBase, StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../App';
import { Button } from 'react-native-web';
import { querystring } from '@firebase/util';
import react from 'react';
import { render } from 'react-dom';


const RandomFoodScreen = () => {
    
    const[foods,setFoods]=useState([])

    const fetchFoods = async () => {
        const fetchedFoods = [];
        const q = query(collection(db,"Foods"));
        const unsubscribe = onSnapshot(q,(querySnapshot)=>{
            const index = querySnapshot.size;
            const randomID = Math.floor(Math.random()*index);
            fetchedFoods.push(querySnapshot.docs[randomID].data())
            setFoods(fetchedFoods);
        })
    }
    useEffect(()=> {
        fetchFoods();
    }, [])

        return(
                <View style = {styles.container}>
                    <Text style = {{marginTop: 2}}>
                        Yemek
                    </Text>
                    <TouchableOpacity
                        onPress={fetchFoods}
                        style={styles.button}
                    >
                    <Text style = {styles.buttonText}>
                            Yeni Getir
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                    style={{marginTop:10,padding:10}}
                    data={foods}
                    renderItem={({item}) => 
                        <View style={{width:Dimensions.get("window").width/2.5,padding:5,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:24,fontWeight:"bold"}}> {item.name} </Text>
                            <Text style={{fontSize:18}}> İçindekiler: </Text>
                        <Text> {item.ingredients.join(' ')} </Text>
                        </View>
                    }
                    ItemSeparatorComponent={()=><View style ={{marginVertical:5,borderWidth:0.5}}/>}
                    />
                </View>
            
        )
}

export default RandomFoodScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
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