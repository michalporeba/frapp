import React from 'react';
import { Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import colors from '../config/colors'

function ToolsScreen(props) {
    return (
        <>
        <View style={{
            backgroundColor: "dodgeblue",
            flex: 1
          }}>
              <Text>Tools</Text>
        </View>
        </>
    )
}

export default ToolsScreen;