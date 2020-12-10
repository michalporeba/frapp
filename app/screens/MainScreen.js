import React from 'react';
import { Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import colors from '../config/colors'

function MainScreen({ props, navigation }) {
    return (
        <>
        <View style={{
            backgroundColor: "gold",
            flex: 0.5
          }}
          />
          <View style={{
            backgroundColor: "dodgerblue",
            flex: 3
          }}
          />
    
          <View style={{
            backgroundColor: "gold",
            flex: 1
          }}
          />
    
          <View style={{
            backgroundColor: "green",
            flex: 3,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            alignContent: "space-around",
            flexWrap: "wrap",
          
          }}
          >
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title="One" 
                onPress={() => navigation.navigate('DrAbc')}
              />
            </View>
    
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title="Two" 
                onPress={() => navigation.navigate('Tools')}
              />
            </View>
            
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title="Three" />
            </View>
    
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title="Four" />
            </View>
          </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonView: {
      width: '40%',
      height: '40%',
    },
    button: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.primary
    }
  });

  
export default MainScreen;