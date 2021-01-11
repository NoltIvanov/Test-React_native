import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export const Header = (props) => {
    const [authState, setAuthState] = useState({ isLoggedIn: false })

    const toggleUser = () => {
        setAuthState(prevState => {
            return { isLoggedIn: !prevState.isLoggedIn }
        })
    }

    let display = authState.isLoggedIn ? 'Sample User' : props.message;

    return (
        <View style={styles.header}>
            <Image
                style={styles.image}
                source={require('./img/ic_plus.png')} />

            <Text
                style={styles.title}
                onPress={toggleUser}>
                {display}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: Platform.OS === 'android' ? 70 : 70,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: '#26B2F3',
        paddingBottom: 10,
        paddingEnd: 10,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 2
    },
    image: {
        width: 30,
        height: 30,
    },
})