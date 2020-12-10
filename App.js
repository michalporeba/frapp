import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import { Alert, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MainScreen from './app/screens/MainScreen';

export default function App() {
  const [isSomething, setIsSomething] = useState(true);
  const [searchText, setSearchText] = useState('');

  console.log("testing messages");
  let x = 1;
  console.log("executed");

  return (
    // <SafeAreaView style={styles.container}>
    <SafeAreaView style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "space-around"
    }}>
      <MainScreen />

      {/* <Image source={require("./assets/caverescue.jpg")} 
         style={{ height: 200, width: 200}}
      />
      <Text>FRAppss</Text>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Search"
        onChangeText={text => {setSearchText(text)}}
        />  
      <Button title="New Patient" type="outline" />
      <Button title="Primary Survey" 
        onPress={() => {setIsSomething(!isSomething)}} />
      <Button title="Secondary Survey" 
        disabled={!isSomething}/>
      <Button title="Others" />
      <Text>{searchText}</Text>
      <Button 
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
        icon={<Icon name="devices" size={50} color="#0F0" />}
        title="hello"
        onPress={() => 
          Alert.alert("Custom alert", "A question", [
            { text: "Yes", onPress: () => console.log("yes")},
            { text: "No", onPress: () => console.log("no")}
          ])
        }
      />  */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
});
