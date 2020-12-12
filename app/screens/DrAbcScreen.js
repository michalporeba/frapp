import React from 'react';
import { Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import colors from '../config/default.colors'

function DrAbcScreen(props) {
    return (
        <>
        <View style={{
            backgroundColor: "gold",
            flex: 1,
            alignContent: "center",
            alignItems: "center"
          }}>
              <Text>DR ABC</Text>
        </View>
        </>
    )
}

export default DrAbcScreen;