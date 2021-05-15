import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function SellerCard({ name, navigation }) {
    return (
        <Card>
            <Card.Title>{ name }</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../assets/store.jpg')}></Card.Image>
            <Text style={styles.cardText}>
            The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress= {() => navigation.navigate('StoreView')}
            title='CHECK IN' />
            
                    
        </Card>
    )
}

const styles = StyleSheet.create({
    cardText:{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
});

export default SellerCard
