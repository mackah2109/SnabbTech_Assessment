import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/Ionicons';
import { CountryPicker } from 'react-native-country-codes-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const Signup = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [countryId, setCountryId] = useState('');


  const [showIcon, setShowIcon] = useState(false);
  
  useEffect(() => {
    setCountryCode('+91 (IND)')
    setShowIcon(true); 
  }, []);
  
  

  return (
    
    <SafeAreaView>
      <View style={{top: 60, left: 16}}>
        <Text
          style={{
            color: '#003A68',
            fontSize: 32,
            fontWeight: 800,
          }}>
          Signup
        </Text>

        <View style={{top: 35, width: 360, height: 71}}>
          <Text style={styles.heading}>Full Name</Text>
          <TextInput placeholder="Full Name" style={styles.field} />
        </View>

        
        <Text style={[styles.heading,{top:50}]}>Phone Number</Text>
        <View style={{top: 50, width: 360, height: 71,flexDirection:'row'}}>
          
          
          <TouchableOpacity onPress={() => setShow(true)} style={{width:'35%',borderWidth:1,
          height:48,borderColor:'#A5A5A5',top:5,borderBottomLeftRadius:4,borderTopLeftRadius:4}}>
          <Text style={{
            color: '#2B2B2B',
            fontSize: 16,
            padding:10
          }}>
            {countryCode}
            {countryId && `(${countryId})`}
            
            {showIcon && <Entypo name="triangle-down" size={22} color="black" />}
          </Text>
          </TouchableOpacity>
          
          <CountryPicker show={show} pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setCountryId(item.code);
            setShow(false);}}/>
        
          
          <TextInput placeholder="Phone Number" style={[styles.field,{borderBottomLeftRadius:0
          ,borderTopLeftRadius:0,width:'65%'}]} />
          
        </View>

        <View style={{top: 65, width: 360, height: 71}}>
          <Text style={{color: '#2B2B2B'}}> Password</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#A5A5A5"
            secureTextEntry={!passwordVisible}
            style={styles.field}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <Icons
              name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#A5A5A5"
              style={{position: 'absolute', right: 10, bottom: 6}}
            />
          </Pressable>
        </View>
        <View style={{top:95}}>
          <Text style={styles.heading}>
            By signing up, I agree to 
            <TouchableOpacity >
              <Text style={{top:4, color:'#51E3AA'}}> terms</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0, 58, 104, 0.4)',
            width: 343,
            height: 56,
            borderRadius: 44,
            marginLeft: 10,
            top:130
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 16,
              marginTop: 15,
            }}>
            Send OTP
          </Text>
        </TouchableOpacity>


        <Text style={{
            right:15,
            color:'#000000',
            fontSize:16,
            fontWeight:400,
            top:160,
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center'
        }}>
            Already have an account? <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}><Text style={{
                color:'#003A68',
                fontSize:16,
                fontWeight:700,top:4
            }}>Login</Text></TouchableOpacity>
        </Text>

        <TouchableOpacity
        onPress={()=>props.navigation.navigate("City")}
        style={{top:280}}>
                    <Text style={{fontSize:16,fontWeight:600,textAlign:'center',color:'#003A68',right:18}}>Skip Now</Text>
        </TouchableOpacity>


        

      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  field: {
    borderColor: '#A5A5A5',
    borderWidth: 1,
    borderRadius: 4,
    top: 5,
    fontSize: 16,
    color: '#A5A5A5',
    padding: 16,
    height: 48,
  },
  heading: {
    color: '#2B2B2B',
    fontSize: 14,
  },
});
