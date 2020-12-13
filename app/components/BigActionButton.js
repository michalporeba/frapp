import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';

const BigActionButton = props => {
    return (
        <TouchableNativeFeedback style={[styles.container, props.style]}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableNativeFeedback>
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
    button: {
        fontSize: 48,
        textAlign: 'center',
    }
});

export default BigActionButton;