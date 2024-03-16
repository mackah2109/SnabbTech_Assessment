import {Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native-animatable'

const Home = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <View>
            <Image source={require('../images/logo.jpg')}
            style={{width:183.66,height:65,marginLeft:92,top:40}}/>
            <Image source={require('../images/homepic.jpg')} 
            style={{height:188,width:290,top:80,marginLeft:39}}/>

            <View style={{height:150,width:325,marginLeft:35,justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:20,color:'#2B2B2B',fontWeight:700, textAlign:'center',top:60
            }}>Book Tests And Find Best Labs Near You At Suitable Price</Text></View>

            <View style={{top:130}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}
                style={{
                    backgroundColor:'#003A68',
                    width:343,
                    height:56,
                    borderRadius:44,
                    marginLeft:22
                }}>
                    <Text style={{color:'#FFFFFF',textAlign:'center',fontWeight:600,fontSize:16,marginTop:15}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Signup") }
                style={{
                    backgroundColor:'#51E3AA',
                    width:343,
                    height:56,
                    borderRadius:44,
                    marginLeft:22,
                    top:15
                }} >
                    <Text style={{color:'#FFFFFF', textAlign:'center',fontWeight:600,fontSize:16,marginTop:15}}>Create New Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{top:65}}
                onPress={()=>props.navigation.navigate("City")}>
                    <Text style={{fontSize:16,fontWeight:600,textAlign:'center',color:'#003A68'}}>Skip Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home
