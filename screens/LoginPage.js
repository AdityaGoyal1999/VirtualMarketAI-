import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

function LoginPage() {
    return (
        <View>
            <Image 
                style = {styles.logoHeader}
                source={require("../assets/splash.png")}></Image>
            <Text
                style={styles.tagline}>Shop Contact Less</Text>
            
            <View style={styles.form}>
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                />
                <Input
                    placeholder='Password'
                    leftIcon={
                        <Icon
                        name='key'
                        size={24}
                        color='black'
                        />
                    }
                    secureTextEntry={true}
                />

                <Button
                    title="Login"
                    style={styles.button}
                />
                <Button
                    title="SignUp"
                    type="outline"
                    style={styles.button}
                />
                <Text
                    style={{ color: 'black', }}
                    onPress= {()=>{ Linking.openURL('https://www.google.com')}}
                    >Forgot Password?
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      margin: 10,
    },  
    form: {
      padding: 20,
      marginTop: 50,
    },
    logoHeader: {
      marginTop: 0,
      marginLeft: 20,
      marginTop: 10,
    },
    tagline:{
      textAlign: 'center',
      fontSize: 30
      }
  });
  

export default LoginPage
