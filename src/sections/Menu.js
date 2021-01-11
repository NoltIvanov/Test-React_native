import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Image, Text } from 'react-native';

export const Menu = (props) => {

    onPress = () => {
        Alert.alert("Pressed menu item");
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Text style={styles.buttonText}>LESSONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Text style={styles.buttonText}>BLOG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Text style={styles.buttonText}>CONTACT</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Text style={styles.buttonText}>QUIZ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Text style={styles.buttonText}>ABOUT</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyle: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
})