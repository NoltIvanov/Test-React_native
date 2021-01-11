import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export const Contact = (props) => {

    let navigationOptions = {
        header: null
    };


    return (
        <View style={styles.mainContainer}>
            <Header message='Press to login' />
            <Text style={{ flex: 8 }}>The Contact from will go here</Text>
            <Text style={{ flex: 8 }}>More Contact from will go here</Text>
        </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})