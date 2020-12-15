import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';

const ActionStripAction = props => {
    return (
        <View>
            <Text>T</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '100%',
        marginTop: 5
    }, 
    touchable: {
        borderWidth: 0
    },
    label: {
        fontSize: 24,
        padding: 10,
    }
});

export default ActionStripAction;
