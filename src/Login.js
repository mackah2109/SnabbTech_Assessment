import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/Ionicons';
import Checkbox from 'react-native-custom-checkbox';


const Login = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [showOTPField, setShowOTPField] = useState(false);
  

  const handleOTPLogin = () => {
    setShowOTPField(!showOTPField);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{left: 16, top: 88}}>
        <Text style={{color: '#003A68', fontSize: 32, fontWeight: 800}}>
          Login
        </Text>

        <View style={{top: 35, width: 360, height: 71}}>
          <Text style={{color: '#2B2B2B'}}> Mobile Number / Email ID</Text>
          <TextInput
            placeholder="Mobile Number / Email ID"
            placeholderTextColor="#A5A5A5"
            style={styles.field}
          />
        </View>

        {showOTPField ? (
          <View style={{top: 55, width: 360, height: 71}}>
            <Text style={{color: '#2B2B2B'}}> Enter OTP</Text>
            <TextInput
              placeholder="Enter OTP"
              placeholderTextColor="#A5A5A5"
              style={styles.field}
            />
          </View>
        ) : (
          <View style={{top: 55, width: 360, height: 71}}>
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
        )}

        <TouchableOpacity onPress={()=>props.navigation.navigate("Forgot")}>
          <Text
            style={{color: '#003A68', fontSize: 16, fontWeight: 400, top: 70}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View style={{top: 100, flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox 
          style={styles.check}
          />
          <Text style={styles.checktext}>Remember me for 30 days</Text>
        </View>

        <View style={{top: 120, flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox 
          checked={showOTPField}
          style={styles.check} 
          onChange={handleOTPLogin}
          />
          <Text style={styles.checktext}>
            Login with OTP instead of password
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0, 58, 104, 0.4)',
            width: 343,
            height: 56,
            borderRadius: 44,
            marginLeft: 10,
            top:170
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 16,
              marginTop: 15,
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <Text style={{
            color:'#000000',
            fontSize:16,
            fontWeight:400,
            top:200,
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            right:18
        }}>
            Don't have an account? <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}><Text style={{
                color:'#003A68',
                fontSize:16,
                fontWeight:700,top:4
            }}>Signup</Text></TouchableOpacity>
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

export default Login;

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
  check: {
    height: 24,
    width: 24,
    borderWidth: 1,
    color: '#003A68',
    borderColor: '#585858',
    borderRadius: 5,
  },
  checktext: {
    left: 5,
    color: '#2B2B2B',
    fontSize: 14,
  },
});
