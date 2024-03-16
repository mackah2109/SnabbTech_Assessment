import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Forgot = (props) => {
  return (
    <SafeAreaView>
        <View style={{top: 88, left: 16}}>
            <Text style={{
            color: '#003A68',
            fontSize: 32,
            fontWeight: 800,
          }}>Forgot Password</Text>
        </View>

        <View style={{
            width:343,
            height:72,
            left:16,
            top:110
        }}><Text 
        style={{fontSize:16,
        fontWeight:400,
        color:'#4B4B4B'}}>
        Provide us the email id/ mobile of your account and we will send
         you an email/otp with instructions to reset your password.
        </Text></View>

        <View style={{top: 130, width: 360, height: 71,left:16}}>
          <Text style={{color: '#2B2B2B'}}> Mobile Number / Email ID</Text>
          <TextInput
            placeholder="Mobile Number / Email ID"
            placeholderTextColor="#A5A5A5"
            style={styles.field}
          />
        </View>

        <TouchableOpacity
          onPress={()=> props.navigation.navigate("Reset")}
          style={{
            backgroundColor: 'rgba(0, 58, 104, 0.4)',
            width: 343,
            height: 56,
            borderRadius: 44,
            marginLeft: 10,
            top:170,
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
            Send instructions
          </Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default Forgot

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