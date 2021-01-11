import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Header } from '../sections/Header';
import { Menu } from '../sections/Menu';

export const Home = (props) => {
    let title = Platform.OS === 'android' ? 'react-native andrik' : 'react-native ios'

    return (
        <View style={styles.container}>
            <Header message='Press to Login' />

            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://wow.zamimg.com/images/wow/icons/medium/ability_toughness.jpg' }} />
                <Menu></Menu>
            </View>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Platform.OS === 'android' ? 'lightgreen' : 'white'
    },
    title: {
        fontSize: 20
    },
    image: {
        width: 40,
        height: 40
    }

});