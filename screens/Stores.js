// Stores near the user

import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import SellerCard from '../components/SellerCard';

function Stores({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Near You</Text>

                <SellerCard name="Mark's Store" navigation={navigation} img='store.jpg'/>
                <SellerCard name="Phil's Store" navigation={navigation} img='store.jpg'/>
                <SellerCard name="John's Store" navigation={navigation} img='store.jpg'/>
                <SellerCard name="Lary's Store" navigation={navigation} img='store.jpg'/>
                <SellerCard name="Jane's Store" navigation={navigation} img='store.jpg'/>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardText:{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        padding: 10,
    },
    heading: {
        fontSize: 60,
    }
});

export default Stores
