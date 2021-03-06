import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {  } from 'react-native';

const BigActionButton = props => {
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity style={styles.touchable}
                onPress={() => {if (typeof props.onPress === 'function') props.onPress(); }}>
                <Text style={styles.button}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        margin: 10
    }, 
    touchable: {
        flex: 1, 
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
    },
    button: {
        fontSize: 48,
        textAlign: 'center',
    }
});

export default BigActionButton;