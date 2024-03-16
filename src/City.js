import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/Feather';
import { Image } from 'react-native-animatable';
import CityImage from './CityImage';

const City = () => {
  
  const [mumbaiimageColor, setmumbaiImageColor] = useState('#948A8A');

  const handlePressIn = () => {   
    setmumbaiImageColor('#003A68');
  };

  const handlePressOut = () => {
    setmumbaiImageColor('#948A8A');
  };
  return (
    <SafeAreaView>
        <Text style={{
          fontSize: 24,
          fontWeight: 700,
          top: 35,
          left: 16,
          color: '#2B2B2B',
        }}>
        Setup Location
        </Text>
        <View>
            <View style={{ top:77,left:30

            }}>
            <Icons name="search" size={24} color='#003A68'/></View>
            
            <TextInput style={{
            height: 48,
            width: 360,
            left: 16,
            borderRadius: 4,
            borderWidth: 1,
            color: '#585858',
            borderColor:'#959595',
            top: 40,
            fontSize: 16,
            paddingLeft:50
        }}
        placeholder="Search for your city"
        placeholderTextColor={'#585858'}
        
        /></View>
        

        <Text style={{
            fontSize:18,
            fontWeight:700,
            color:'#2B2B2B',left:16,
            top:65
        }}>Top Cities</Text>

        <View style={[styles.cityImages,{top:90,left:22,flexDirection:'row',
        }]}>
            <CityImage source={require('../images/delhi.png')} width={40} left={0} name='Delhi' textleft={4}/>
            <CityImage source={require('../images/mumbai.png')} width={65} left={40} name="Mumbai" textleft={45}/>
            <CityImage source={require('../images/bangalore.png')} width={70} left={70} name="Bangaluru" textleft={75}/>
            <CityImage source={require('../images/chennai.png')} width={50} left={110} name="Chennai" textleft={110}/>
        </View>

        <View style={[styles.cityImages,{top:110,left:22,flexDirection:'row',
        }]}>
            <CityImage source={require('../images/hyderabad.png')} width={55} left={10} name='Hyderabad' textleft={4}/>
            <CityImage source={require('../images/ahmedabad.png')} width={55} left={40} name="Ahmedabad" textleft={30}/>
            <CityImage source={require('../images/jaipur.png')} width={50} left={70} name="Jaipur" textleft={75}/>
            
        </View>

        <View style={{borderWidth:5,borderColor:'#E8E8E8',top:140}}></View>

        <Text style={{
            fontSize:18,
            fontWeight:700,
            color:'#2B2B2B',left:16,
            top:160
        }}>Other Cities</Text>
        <TouchableOpacity><Text style={[styles.citytext,{top:180}]}>Shimla</Text></TouchableOpacity>
        <View style={[styles.line,{top:190}]}></View>
        <TouchableOpacity><Text style={[styles.citytext,{top:200}]}>Patna</Text></TouchableOpacity>
        <View style={[styles.line,{top:210}]}></View>
        <TouchableOpacity><Text style={[styles.citytext,{top:220}]}>Shimla</Text></TouchableOpacity>
        <View style={[styles.line,{top:230}]}></View>
        <TouchableOpacity><Text style={[styles.citytext,{top:240}]}>Patna</Text></TouchableOpacity>
        <View style={[styles.line,{top:250}]}></View>
        <TouchableOpacity><Text style={[styles.citytext,{top:260}]}>Patna</Text></TouchableOpacity>
        <View style={[styles.line,{top:270}]}></View>
        <TouchableOpacity><Text style={[styles.citytext,{top:280}]}>Shimla</Text></TouchableOpacity>
        <View style={[styles.line,{top:290}]}></View>
        <TouchableOpacity><Text style={[styles.citytext,{top:300}]}>Patna</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
    citytext:{
        fontSize:16,fontWeight:400,color:"#2B2B2B",
        left:16
    },
    line:{
        borderWidth:1,
        color:'E7E7E7'
    },
});
