import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import {Router, Route, Link, RouteHandler} from 'react-router';
import axios from 'axios';


function LoginPage({ navigation }) {

    const baseURL = 'https://visual-market-service-ernmtrrhya-uc.a.run.app/';

    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        state.email = text;
    }
    handlePassword = (text) => {
        state.password = text;
    }

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
                    onChangeText = {handleEmail}
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
                    onChangeText = {handlePassword}
                />

                <Button
                    title="Login"
                    style={styles.button}
                    onPress={() => {
                        
                        navigation.navigate('Stores');
                        // alert('email: ' + state.email + ' password: ' + state.password)
                        // 

                        // axios.get(baseURL + 'login_owner?', {
                        //     username: state.email,
                        //     password: state.password
                        // })

                        // alert('https://visual-market-service-ernmtrrhya-uc.a.run.app/login_owner?username='+ state.email +'&password=' + state.password)

                        // axios.get('https://visual-market-service-ernmtrrhya-uc.a.run.app/login_owner?username='+ state.email +'&password=' + state.password)
                        // .then((response) => {
                            
                        //     console.log(response);
                        //     if(response.status === 200){
                        //         navigation.navigate('Stores');
                        //     }
                        //     else{
                        //         alert('User or Password do not exist');
                        //     }
                            
                        // }, (error) => {

                        //     console.log(error);
                        //     alert('User or Password do not exist');
                        // });

                        

                        // // navigation.navigate('Stores')
                    }}
                />
                <Button
                    title="SignUp"
                    type="outline"
                    style={styles.button}
                    onPress={() => {


                        axios.get('https://visual-market-service-ernmtrrhya-uc.a.run.app/register?username='+ state.email +'&password=' + state.password)
                        .then((response) => {
                            
                            console.log(response);
                            if(response.status === 200){
                                navigation.navigate('Stores');
                            }
                            else{
                                alert('User or Password do not exist');
                            }
                            
                        }, (error) => {

                            console.log(error);
                            alert('User or Password do not exist');
                        });

                        
                    }}
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
