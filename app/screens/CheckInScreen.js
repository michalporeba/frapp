import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CheckInScreen(props) {
    return(
        <View style={styles.container}>
            <Text>Event selection</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CheckInScreen;