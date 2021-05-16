import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from '@material-ui/core/Icon';

function Checkout() {

    const list = [
        {
          name: 'Cabbage',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: '$2.00'
        },
        {
          name: 'Broccoli',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '$5.00'
        },
        {
            name: 'Avocado',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: '$3.00'
        },
        {
        name: 'Juice',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '$4.00'
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Checkout Items</Text>
            <Text style={{ margin: 5, fontSize: 30, }}>(4)
                <Icon 
                    name="shopping-cart"
                    size = {40}
                    ></Icon>
            </Text>
            <ScrollView style={styles.scroller}>

            <View>
                {
                    list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{uri: l.avatar_url}} />
                        <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    ))
                }
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    title="Video Call with Attendent"
                    // type="outline"
                    style={styles.button}
                />
                <Button
                    title="Checkout Items"
                    type="outline"
                    style={styles.button}
                    onPress = {() => navigation.navigate('Checkout')}
                />
                <Button
                    title="Voice to Text for Items"
                    // type="outline"
                    style={ styles.button }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
    container: {
        flex: 1,
    },
    scroller:{
        padding: 10,
    },
    footer:{
        width: '100%', 
        height: '40%', 
        backgroundColor: '#FAF9F6', 
        justifyContent: 'center', 
        // alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    heading: {
        fontSize: 60,
    },
})

export default Checkout
