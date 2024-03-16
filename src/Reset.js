import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Reset = () => {
  return (
    <SafeAreaView style={{backgroundColor:'FFFFFF'}}>
      <View style={{top: 88, left: 16}}>
        <Text
          style={{
            color: '#003A68',
            fontSize: 32,
            fontWeight: 800,
          }}>
          Reset Password
        </Text></View>

        <View style={{
            width:343,
            height:72,
            left:16,
            top:110
        }}><Text 
        style={{fontSize:16,
        fontWeight:400,
        color:'#4B4B4B'}}>
        Enter OTP and change password
        </Text></View>

        <View style={{top: 100, width: 360, height: 71,left:16}}>
          <Text style={{color: '#2B2B2B'}}> OTP</Text>
          <TextInput
            placeholder="OTP"
            placeholderTextColor="#A5A5A5"
            style={styles.field}
          />
        </View>

        <View style={{top: 120, width: 360, height: 71,left:16}}>
          <Text style={{color: '#2B2B2B'}}> New Password </Text>
          <TextInput
            placeholder=" New Password"
            placeholderTextColor="#A5A5A5"
            style={styles.field}
          />
        </View>

        <View style={{top: 140, width: 360, height: 71,left:16}}>
          <Text style={{color: '#2B2B2B'}}> Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#A5A5A5"
            style={styles.field}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0, 58, 104, 0.4)',
            width: 343,
            height: 56,
            borderRadius: 44,
            marginLeft: 10,
            top:190,
            left:16
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 16,
              marginTop: 15,
            }}>
            Reset Password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{top:220}}>
                    <Text style={{fontSize:16,fontWeight:600,textAlign:'center',color:'#003A68'}}>Resend OTP</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Reset

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
})