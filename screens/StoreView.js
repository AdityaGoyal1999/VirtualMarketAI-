import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from 'react-native';

function StoreView() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading }>Mark's Store</Text>
            <ScrollView>
            </ScrollView>

            <View style={styles.footer}>
                <Text>This is the bottom view</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 60,
    },
    container:{
        flex: 1,
    },
    footer:{
        width: '100%', 
        height: '10%', 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
});

export default StoreView
