import React from 'react';
import { Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import colors from '../config/default.colors'

function ToolsScreen(props) {
    return (
        <View style={{
            backgroundColor: "limegreen",
            flex: 1,
            alignContent: "center",
            alignItems: "center"
          }}>
              <Text>Tools</Text>
              <Button style={[styles.btn, getTheme('bcrc').btn]} title="Test" />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: '40%'
    }
});

const getTheme = (t) => themes[t];

const themes = {
    stjohn: StyleSheet.create({
        btn: {
            backgroundColor: 'green'  
        }
    }),
    bcrc: StyleSheet.create({
        btn: {
            backgroundColor: 'blue'
        }
    })
}

export default ToolsScreen;