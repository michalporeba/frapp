import React from 'react';
import { Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import colors from '../config/colors'

function ToolsScreen(props) {
    return (
        <>
        <View style={{
            backgroundColor: "limegreen",
            flex: 1,
            alignContent: "center",
            alignItems: "center"
          }}>
              <Text>Tools</Text>
        </View>
        </>
    )
}

export default ToolsScreen;