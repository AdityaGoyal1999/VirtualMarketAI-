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
    <View>
      <Image
        style={styles.image}
        source={require('../images/load-check.gif')}></Image>
      <Text style={styles.heading}>Payment Sucessfull</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 160,
    left: 70,
  },

  heading: {
    fontSize: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    marginLeft: 60,
    marginTop: 140,
  },
});

export default PaymentSucessfull;
