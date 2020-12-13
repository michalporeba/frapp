import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Identity = (props) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.dutyInfo}>
                <Text style={styles.dutyName}>Duty Name</Text>
                <Text style={styles.positionName}>Position Name</Text>
            </View>
            <View style={styles.dutyAction}>
                <TouchableNativeFeedback style={{flex: 1}}
                    //onPress={props.onPress}
                    onPress={() => navigation.navigate('Tools')}
                >
                    <Icon 
                        style={styles.locationIcon}
                        name="my-location" size={50} color="#000" />
                </TouchableNativeFeedback>
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
        alignContent: 'center',
        alignItems: 'center',
        flex: 1
      }, 
      dutyName: {
        fontSize: 24,
        textAlign: 'right'
      }, 
      locationIcon: {
        textAlignVertical: 'center',
        flex: 1
      },
      positionName: {
        textAlign: 'right',
        fontSize: 18
      }
});

export default Identity