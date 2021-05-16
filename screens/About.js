// About us Page

import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import AboutCard from '../components/AboutCard';

function About() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>About Us</Text>
        <Image source={require('../assets/splash.png')} style={styles.image} />
        <AboutCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 20,
  },
  image: {
    marginLeft: 60,
   
    borderWidth: 1,
    height: 130,
    
  },
  mainDiv: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'grey',
  },

  paragraph: {
    fontSize: 20,
  },
});

export default About;
