import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

function PaymentSucessfull() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/load-check.gif')}></Image>
      <Text style={styles.heading}>Sucessfull</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading:{
    fontSize: 50,
  },
});

export default PaymentSucessfull;
