import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

const ActionStrip = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={() => props.onPress()}>
                <View>
                    <Text style={styles.label}>{props.label}</Text>
                </View>
            </TouchableOpacity>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '100%',
        marginTop: 5,
        flexDirection: 'row'
    }, 
    touchable: {
        borderWidth: 0, 
        width: '100%'
    },
    label: {
        fontSize: 24,
        padding: 10,
    }
});

export default ActionStrip;
