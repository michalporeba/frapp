import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function App() {
  const [isSomething, setIsSomething] = useState(true);
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <Text>FRApp</Text>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Search"
        onChangeText={text => {setSearchText(text)}}
        />  
      <Button title="New Patient" raised="true" type="outline" />
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
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
