import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from "react-native-image-picker";
// import Icon from '@material-ui/core/Icon';

function Checkout({ navigation }) {

    let handleChoosePhoto = () =>{
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
        });
    };

    const list = [
        {
          name: 'Cabbage',
          avatar_url: 'https://images.pexels.com/photos/1070984/pexels-photo-1070984.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1070984.jpg&fm=jpg',
          subtitle: '$2.00'
        },
        {
          name: 'Broccoli',
          avatar_url: 'https://media.istockphoto.com/photos/broccoli-picture-id147060621?s=612x612',
          subtitle: '$5.00'
        },
        {
            name: 'Avocado',
            avatar_url: 'https://media.istockphoto.com/photos/avocado-halves-on-a-wooden-board-picture-id1140004004?s=612x612',
            subtitle: '$3.00'
        },
        {
        name: 'Juice',
        avatar_url: 'https://media.istockphoto.com/photos/orange-juice-picture-id120742288?s=612x612',
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
                <Text style={styles.addItemsText}>Add Items</Text>
                <Button 
                    style={styles.button}
                    title="Take Photo">
                </Button>
                <Button
                    title="From Gallery"
                    type="outline"
                    style={styles.button}
                    onPress = {() => {
                            const options = {};
                            ImagePicker.launchImageLibrary(options, response => {
                                console.log("response", response);
                            });
                    }}
                />
                <Button
                    title="Pay"
                    // type="outline"
                    style={ styles.button }
                    onPress = {() => navigation.navigate('PaymentSuccessful')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    addItemsText:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
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
        height: '30%', 
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
