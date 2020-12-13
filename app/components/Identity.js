import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Identity = props => {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.dutyInfo}>
                <Text style={styles.dutyName}>Duty Name</Text>
                <Text style={styles.positionName}>Position Name</Text>
            </View>
            <View style={styles.dutyAction}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    dutyInfo: {
        flex: 4,
        alignItems: 'stretch'
      },
      dutyAction: {
        backgroundColor: 'gold',
        flex: 1
      }, 
      dutyName: {
        fontSize: 24,
        textAlign: 'right'
      }, 
      positionName: {
        textAlign: 'right',
        fontSize: 18
      }
});

export default Identity