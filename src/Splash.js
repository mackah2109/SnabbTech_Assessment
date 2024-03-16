import {Image, View} from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({navigation}) => {
    
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home');
        },2000);
    },[]);

    return (
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Image source={require('../images/splash1.jpg')} style={{width:'100%',height:'100%'}}
        resizeMode='cover'/>
        </View>
  );
};

export default Splash;


